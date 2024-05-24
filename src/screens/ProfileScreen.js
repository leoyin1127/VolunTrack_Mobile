import React, { useState, useEffect, useRef, useCallback } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, RefreshControl, ActivityIndicator } from 'react-native';
import { auth, db } from '../api/firebaseConfig';
import { onAuthStateChanged, signOut, updateProfile } from 'firebase/auth';
import { useFocusEffect } from '@react-navigation/native';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { launchImageLibrary } from 'react-native-image-picker';
import storage from '@react-native-firebase/storage';
import AsyncStorage from '@react-native-async-storage/async-storage';

import colors from '../../assets/colors/colors';

const ProfileScreen = ({ navigation }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(true);
  const isMounted = useRef(true);

  const firstLoad = useRef(true); // useRef to track the initial load

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    fetchUserData();
  }, []);

  useFocusEffect(
    useCallback(() => {
      const resetStateIfNeeded = async () => {
        const shouldReset = await AsyncStorage.getItem('resetFirstLoad');
        if (shouldReset === 'true') {
          firstLoad.current = true; // Reset the first load indicator
          await AsyncStorage.removeItem('resetFirstLoad'); // Clear the flag
        }
  
        if (firstLoad.current) {
          setLoading(true);
          fetchUserData();
          firstLoad.current = false;
        }
      };
  
      resetStateIfNeeded();
    }, [])
  ); 

  const fetchUserData = async () => {
    try {
        const userDocRef = doc(db, 'users', auth.currentUser.uid);
        const jsonValue = await AsyncStorage.getItem('@user_data');
        const userData = jsonValue != null ? JSON.parse(jsonValue) : null;

        console.log(jsonValue)

        const docSnap = await getDoc(userDocRef);
        if (docSnap.exists()) {
            const userData = docSnap.data();
            setCurrentUser(userData);
            await AsyncStorage.setItem('@user_data', JSON.stringify(userData));
        } else {
            console.log("No user data available");
        }
    } catch (error) {
        console.error("Failed to fetch user data:", error);
    }
    setRefreshing(false);
  };

  useFocusEffect(
    useCallback(() => {
        const checkUser = async () => {
            try {
                const jsonValue = await AsyncStorage.getItem('@user_data');
                const userData = jsonValue != null ? JSON.parse(jsonValue) : null;
                if (userData) {
                    setCurrentUser(userData);
                } else {
                    setCurrentUser(null);
                }
            } catch (e) {
                console.error('Failed to load user data:', e);
                Alert.alert('Error', 'Failed to load data');
            }
        };

        checkUser();
    }, [])
  );

  useEffect(() => {
    const checkUserAuthentication = async () => {
      const storedUserData = await loadUserData();
      if (storedUserData) {
        setCurrentUser(storedUserData);
        setLoading(false);
      } else {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
          if (user && user.emailVerified) {
            // Fetch and set user data here
            setLoading(false);
          } else {
            setCurrentUser(null);
            setLoading(false);
          }
        });
        return () => {
          unsubscribe();
          isMounted.current = false;
        };
      }
    };

    checkUserAuthentication();
  }, []);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      await AsyncStorage.removeItem('@user_data'); // Clear stored user data
      setCurrentUser(null);
      navigation.replace('SignInScreen'); // Replace the current screen with the sign-in screen
    } catch (error) {
      console.error('Error signing out: ', error);
      alert('Failed to sign out.');
    } finally {
      setLoading(false);
    }
  };

  const saveUserData = async (userData) => {
    try {
      const jsonValue = JSON.stringify(userData);
      await AsyncStorage.setItem('@user_data', jsonValue);
    } catch (e) {
      console.error('Failed to save user data', e);
    }
  };

  const loadUserData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@user_data');
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      console.error('Failed to load user data', e);
      return null;
    }
  };

  const pickImage = async () => {
    const result = await launchImageLibrary({ mediaType: 'photo', quality: 1 });

    if (result.didCancel) {
      console.log('User cancelled image picker');
    } else if (result.errorMessage) {
      console.log('ImagePicker Error: ', result.errorMessage);
    } else if (result.assets && result.assets.length > 0) {
      const source = { uri: result.assets[0].uri };
      uploadImage(source.uri);
    }
  };

  const uploadImage = async (uri) => {
    const uploadUri = uri.startsWith('file://') ? uri : `file://${uri}`;
    const filename = uploadUri.substring(uploadUri.lastIndexOf('/') + 1);
    const storageRef = storage().ref(`profile_pictures/${filename}`);

    try {
      await storageRef.putFile(uploadUri);
      const downloadURL = await storageRef.getDownloadURL();

      if (auth.currentUser) {
        await updateProfile(auth.currentUser, { photoURL: downloadURL });
        console.log('Photo URL updated!');

        // Update Firestore user document
        const userDocRef = doc(db, 'users', auth.currentUser.uid);
        await setDoc(userDocRef, { photoURL: downloadURL }, { merge: true });

        // Update local state and AsyncStorage
        const updatedUserData = { ...currentUser, photoURL: downloadURL };
        setCurrentUser(updatedUserData);
        await saveUserData(updatedUserData);
      }
    } catch (error) {
      console.error(error);
    }
  };

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    );
  }

  if (!currentUser) {
    return (
      <View style={styles.before}>
        <Image
          source={require('../../assets/images/profileImage.png')}
          style={styles.illustration}
        />
        <Text style={styles.title}>LOG YOUR GROWTH</Text>
        <Text style={styles.subtitle}>Navigate Your Volunteer Journey with Ease</Text>
        <TouchableOpacity style={[styles.button, styles.signUpButton]} onPress={() => navigation.navigate('SignUpScreen')}>
          <Text style={styles.signUpButtonText}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.signInButton]} onPress={() => navigation.navigate('SignInScreen')}>
          <Text style={styles.signInButtonText}>Sign In</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <ScrollView
      style={styles.scrollView}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}          
        />
      }
    >
      <View style={styles.container}>
        <View style={styles.topBar}>
          <TouchableOpacity onPress={() => navigation.navigate('AboutUsScreen')}>
            <Image source={require('../../assets/adaptive-icon-cropped.png')} style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('ProfileSettingScreen')}>
            <Image source={require('../../assets/icons/SettingIcon.png')} style={styles.icon} />
          </TouchableOpacity>
        </View>
        
        <View style={styles.profileContainer}>
          <Image
            source={require('../../assets/icons/defaultUserImage.png') }  
            style={styles.profileImage}
          />
          <Text style={styles.profileName}>{currentUser.displayName || 'Someone Awesome'}</Text>

          <Text style={styles.bio}>{currentUser.bio || 'This person is lazy, left no description..'}</Text>
          
          <View style={styles.statsContainer}>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>{currentUser.volunteered || 0}</Text>
              <Text style={styles.statLabel}>Volunteered</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>{currentUser.facilitated || 0}</Text>
              <Text style={styles.statLabel}>Facilitated</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>{currentUser.events || 0}</Text>
              <Text style={styles.statLabel}>Events</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>{currentUser.group || 0}</Text>
              <Text style={styles.statLabel}>Group</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  before:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  scrollView: {
    flex: 1,
    backgroundColor: colors.background,
  },
  container: {
      paddingTop: 60,
      paddingHorizontal: 15,
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  illustration: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
    marginBottom: 20,
    marginTop: 30,
  },
  title:{
    fontSize: 24,
    color: 'black',
    textAlign: 'center',
    paddingHorizontal: 30,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    paddingHorizontal: 30,
    marginBottom: 40,
  },
  button: {
    width: '80%',
    paddingVertical: 12,
    borderRadius: 25,
    marginBottom: 15,
    alignItems: 'center',
    alignSelf: 'center',
  },
  signUpButton: {
    backgroundColor: colors.primary,
  },
  signInButton: {
    backgroundColor: '#ffffff',
    borderWidth: 2,
    borderColor: colors.primary,
  },
  signUpButtonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  signInButtonText: {
    color: colors.primary,
    fontSize: 18,
    fontWeight: 'bold',
  },
  safeArea: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 50,
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 10,
  },
  profileContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderColor: 'blue',
    borderWidth: 2,
  },
  profileName: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#000',
  },
  bio:{
    fontSize: 16,
    marginBottom: 10,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    paddingVertical: 20,
  },
  statItem: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  statLabel: {
    fontSize: 16,
  },
  icon: {
    width: 60,
    height: 60,
    marginBottom: 15,
  },
});

export default ProfileScreen;