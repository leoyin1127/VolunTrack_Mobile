import React, { useState, useCallback } from 'react';
import { View, TextInput, Button, StyleSheet, Text, Alert, TouchableOpacity } from 'react-native';
import { auth, db } from '../api/firebaseConfig';
import { signOut } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
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

  const saveProfileData = async () => {
    const userId = auth.currentUser.uid;
    try {
      await setDoc(doc(db, 'users', userId), {
        displayName: profileData.displayName,
        bio: profileData.bio
      }, { merge: true });
      Alert.alert('Success', 'Profile updated successfully!');
      navigation.navigate('Profile');
    } catch (error) {
      console.error('Error saving profile data:', error);
      Alert.alert('Error', 'Failed to update profile. Please try again.');
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
      <Text style={styles.label}>User Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Display Name"
        value={profileData.displayName}
        onChangeText={(text) => setProfileData({ ...profileData, displayName: text })}
      />
      <Text style={styles.label}>Bio</Text>
      <TextInput
        style={styles.input}
        placeholder="Bio"
        multiline
        numberOfLines={2}
        value={profileData.bio}
        onChangeText={(text) => setProfileData({ ...profileData, bio: text })}
      />
      <TouchableOpacity style={styles.button} onPress={saveProfileData}>
        <Text style={styles.buttonText}>Save Changes</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleSignOut}>
        <Text style={styles.buttonText}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  sectionTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: colors.primary,
    alignSelf: 'flex-start',
    marginBottom: 15,
  },
  input: {
    width: '100%',
    marginBottom: 25,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    padding: 10,
  },
  button: {
    backgroundColor: colors.primary,
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
  },
  label: {
    fontSize: 18,
    marginBottom: 6,
    color: colors.text,
  },
});

export default ProfileSettingsScreen;
