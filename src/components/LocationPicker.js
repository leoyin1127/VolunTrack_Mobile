import React, { useState, useEffect, useCallback } from 'react';
import { View, TextInput, FlatList, TouchableOpacity, Text, StyleSheet, Alert } from 'react-native';
import Autocomplete from 'react-native-autocomplete-input';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LocationPicker = () => {
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState('');
  const [autocompleteData, setAutocompleteData] = useState([]);

  // Fetch cities only once
  const fetchCities = useCallback(async () => {
    try {
      const response = await fetch('https://countriesnow.space/api/v0.1/countries');
      const data = await response.json();
      const canada = data.data.find((country) => country.country === 'Canada');
      if (canada?.cities) setCities(canada.cities);
    } catch (error) {
      console.error('Error fetching cities:', error);
    }
  }, []);

  // Load saved city and fetch cities
  useEffect(() => {
    const loadCityAndFetchData = async () => {
      try {
        const storedCity = await AsyncStorage.getItem('@selectedCity');
        if (storedCity) setSelectedCity(storedCity);
      } catch (error) {
        console.error('Failed to load saved city:', error);
      }
      fetchCities();
    };
    loadCityAndFetchData();
  }, [fetchCities]);

  // Handle city search
  const handleCitySearch = (query) => {
    setSelectedCity(query);
    const filtered = query
      ? cities.filter((city) => city.toLowerCase().includes(query.toLowerCase()))
      : [];
    setAutocompleteData(filtered);
  };

  // Handle city selection
  const handleCitySelect = (city) => {
    setSelectedCity(city);
    setAutocompleteData([]);
  };

  // Handle city save with validation
  const handleCitySave = async () => {
    if (!selectedCity) {
      Alert.alert('Error', 'Please select a location before saving.');
      return;
    }
    try {
      await AsyncStorage.setItem('@selectedCity', selectedCity);
      Alert.alert('Success', 'Location saved successfully!');
    } catch (error) {
      console.error('Failed to save city:', error);
    }
  };

  // Reset location and clear AsyncStorage
  const handleReset = async () => {
    setSelectedCity('');
    setAutocompleteData([]);
    await AsyncStorage.removeItem('@selectedCity');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Where</Text>
        <TouchableOpacity style={styles.resetButton} onPress={handleReset}>
          <Ionicons name="reload-outline" size={25} color="#000" />
        </TouchableOpacity>
      </View>
      <Text style={styles.subtitle}>Address, City, Country, etc.</Text>
      <Autocomplete
        data={autocompleteData}
        defaultValue={selectedCity}
        onChangeText={handleCitySearch}
        placeholder="Enter city"
        style={styles.input}
        containerStyle={styles.autocompleteContainer}
        listStyle={styles.listStyle}
        flatListProps={{
          keyExtractor: (_, index) => `city-${index}`,
          renderItem: ({ item }) => (
            <TouchableOpacity
              onPress={() => handleCitySelect(item)}
              style={styles.listItem}
            >
              <Text>{item}</Text>
            </TouchableOpacity>
          ),
        }}
      />
      <TouchableOpacity style={styles.confirmButton} onPress={handleCitySave}>
        <Text style={styles.confirmButtonText}>Save Location</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#FFF',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#D9D9D9',
    marginBottom: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    color: 'black',
  },
  subtitle: {
    fontSize: 14,
    fontWeight: '400',
    color: '#696969',
    marginBottom: 5,
  },
  input: {
    padding: 10,
    height: 40,
  },
  autocompleteContainer: {
    backgroundColor: 'white',
  },
  listStyle: {
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: 'white',
    marginTop: 5,
    maxHeight: 200,
  },
  listItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  confirmButton: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#884EFE',
    borderRadius: 10,
    alignItems: 'center',
  },
  confirmButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF',
  },
});

export default LocationPicker;
