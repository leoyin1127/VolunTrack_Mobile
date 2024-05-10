import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import colors from '../../assets/colors/colors';

const HomepageSettingsScreen = () => {
  const [hours, setHours] = useState('');

  const saveHours = async () => {
    try {
      await AsyncStorage.setItem('userHours', hours);
      alert('Hours updated successfully!');
    } catch (e) {
      alert('Failed to save hours.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Volunteer Hours Goal</Text>
      <TextInput 
        style={styles.input} 
        placeholder="Enter Total Hours"
        value={hours}
        onChangeText={setHours}
        keyboardType="numeric"
      />
      <Button title="Save Hours" onPress={saveHours} />
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

export default HomepageSettingsScreen;
