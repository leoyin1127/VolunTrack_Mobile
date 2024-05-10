import React, { useState, useCallback } from 'react';
import { View, TextInput, Button, StyleSheet, Text, Alert } from 'react-native';
import { auth, db } from '../api/firebaseConfig';
import { signOut } from 'firebase/auth'; // Correctly import signOut from firebase/auth
import { doc, setDoc } from 'firebase/firestore'; // Correctly import doc and setDoc from firebase/firestore
import AsyncStorage from '@react-native-async-storage/async-storage';
import colors from '../../assets/colors/colors';
import { useFocusEffect } from '@react-navigation/native';

const ProfileSettingsScreen = ({ navigation }) => {
  const [profileData, setProfileData] = useState({
    displayName: '',
    bio: '',
  });

  useFocusEffect(
    useCallback(() => {
      const fetchUserData = async () => {
        const storedUserData = await AsyncStorage.getItem('@user_data');
        if (storedUserData) {
          const userData = JSON.parse(storedUserData);
          setProfileData(userData);
        }
      };
      fetchUserData();
    }, [])
  );

  const saveUserProfileName = async () => {
    const userId = auth.currentUser.uid;
    try {
      await setDoc(doc(db, 'users', userId), { displayName: profileData.displayName }, { merge: true });
      Alert.alert('Success', 'Display name saved successfully!');
    } catch (error) {
      console.error('Error saving display name:', error);
      Alert.alert('Error', 'Error saving display name. Please try again.');
    }
  };

  const saveUserProfileBio = async () => {
    const userId = auth.currentUser.uid;
    try {
      await setDoc(doc(db, 'users', userId), { bio: profileData.bio }, { merge: true });
      Alert.alert('Success', 'Bio saved successfully!');
    } catch (error) {
      console.error('Error saving bio:', error);
      Alert.alert('Error', 'Error saving bio. Please try again.');
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      await AsyncStorage.removeItem('@user_data'); // Clear stored user data
      Alert.alert('Sign Out', 'You have signed out!');
      navigation.navigate('Profile'); 
    } catch (error) {
      console.error('Error signing out:', error);
      Alert.alert('Error', 'Failed to sign out.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Profile Settings</Text>
      <TextInput
        style={styles.input}
        placeholder="Display Name"
        value={profileData.displayName}
        onChangeText={(text) => setProfileData({ ...profileData, displayName: text })}
      />
      <Button title="Save Display Name" onPress={saveUserProfileName} />
      <TextInput
        style={styles.input}
        placeholder="Bio"
        multiline
        numberOfLines={2}
        value={profileData.bio}
        onChangeText={(text) => setProfileData({ ...profileData, bio: text })}
      />
      <Button title="Save Bio" onPress={saveUserProfileBio} />
      <Button title="Sign Out" onPress={handleSignOut} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.primary,
    alignSelf: 'flex-start',
    marginBottom: 15,
  },
  input: {
    width: '100%',
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    padding: 10,
  },
});

export default ProfileSettingsScreen;
