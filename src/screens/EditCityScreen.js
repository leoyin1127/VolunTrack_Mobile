import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, Modal, StyleSheet, ActivityIndicator, Alert, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { db, auth } from '../api/firebaseConfig';
import { doc, setDoc } from 'firebase/firestore';
import colors from '../../assets/colors/colors';

const EditCityScreen = ({ route, navigation }) => {
  const { userInfo } = route.params;
  const [loading, setLoading] = useState(true);
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(userInfo.country || '');
  const [cities, setCities] = useState([]);
  const [filteredCities, setFilteredCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState(userInfo.city || '');
  const [countryModalVisible, setCountryModalVisible] = useState(false);
  const [cityModalVisible, setCityModalVisible] = useState(false);
  const [searchCountry, setSearchCountry] = useState('');
  const [searchCity, setSearchCity] = useState('');

  useEffect(() => {
    fetch('https://countriesnow.space/api/v0.1/countries')
      .then(response => response.json())
      .then(data => {
        setCountries(data.data);
        setFilteredCountries(data.data);
        if (selectedCountry) {
          const initialCountry = data.data.find(country => country.country === selectedCountry);
          if (initialCountry) {
            setCities(initialCountry.cities);
            setFilteredCities(initialCountry.cities);
          }
        }
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  const handleSelectCountry = (country) => {
    setSelectedCountry(country.country);
    setCities(country.cities || []);
    setFilteredCities(country.cities || []);
    setCountryModalVisible(false);
  };

  const handleSelectCity = (city) => {
    setSelectedCity(city);
    setCityModalVisible(false);
  };

  const saveCityData = async () => {
    try {
      if (!selectedCity || !selectedCountry) {
        Alert.alert("Error", "Please select both a country and a city.");
        return;
      }
      const userDocRef = doc(db, 'users', auth.currentUser.uid);
      await setDoc(userDocRef, { city: selectedCity, country: selectedCountry }, { merge: true });
      await AsyncStorage.setItem('@user_data', JSON.stringify({ ...userInfo, city: selectedCity, country: selectedCountry }));
      await AsyncStorage.setItem('bannerMessage', 'Profile updated successfully!');
      await AsyncStorage.setItem('bannerType', 'success');
      navigation.navigate('Profile');
    } catch (error) {
      console.error('Error saving city:', error);
      Alert.alert("Error", "Failed to save city.");
    }
  };

  const filterCountries = (text) => {
    setSearchCountry(text);
    const filtered = countries.filter(item => item.country.toLowerCase().includes(text.toLowerCase()));
    setFilteredCountries(filtered);
  };

  const filterCities = (text) => {
    setSearchCity(text);
    const filtered = cities.filter(city => city.toLowerCase().includes(text.toLowerCase()));
    setFilteredCities(filtered);
  };

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setCountryModalVisible(true)} style={styles.button}>
        <Text style={styles.buttonText}>Country: {selectedCountry || 'Select Country'}</Text>
      </TouchableOpacity>
      <Modal visible={countryModalVisible} transparent={true} animationType="slide">
        <View style={styles.modalView}>
          <TextInput
            style={styles.searchBox}
            placeholder="Search country"
            value={searchCountry}
            onChangeText={filterCountries}
          />
          <FlatList
            data={filteredCountries}
            keyExtractor={item => item.iso3}
            renderItem={({ item }) => (
              <TouchableOpacity style={styles.item} onPress={() => handleSelectCountry(item)}>
                <Text style={styles.itemText}>{item.country}</Text>
              </TouchableOpacity>
            )}
          />
          <Button title="Close" onPress={() => setCountryModalVisible(false)} />
        </View>
      </Modal>

      <TouchableOpacity onPress={() => setCityModalVisible(true)} style={styles.button}>
        <Text style={styles.buttonText}>City: {selectedCity || 'Select City'}</Text>
      </TouchableOpacity>
      <Modal visible={cityModalVisible} transparent={true} animationType="slide">
        <View style={styles.modalView}>
          <TextInput
            style={styles.searchBox}
            placeholder="Search city"
            value={searchCity}
            onChangeText={filterCities}
          />
          <FlatList
            data={filteredCities}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity style={styles.item} onPress={() => handleSelectCity(item)}>
                <Text style={styles.itemText}>{item}</Text>
              </TouchableOpacity>
            )}
            ListEmptyComponent={<Text style={styles.itemText}>No cities available</Text>}
          />
          <Button title="Close" onPress={() => setCityModalVisible(false)} />
        </View>
      </Modal>

      <TouchableOpacity style={styles.saveButton} onPress={saveCityData}>
        <Text style={styles.saveButtonText}>
          Save City
        </Text>
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
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    padding: 15,
    marginVertical: 10,
    backgroundColor: colors.primary,
    borderRadius: 10,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    textAlign: 'center',
  },
  modalView: {
    flex: 1,
    marginTop: 100,
    backgroundColor: 'white',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    paddingVertical: 20,
    paddingHorizontal: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  itemText: {
    fontSize: 16
  },
  searchBox: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 10,
    margin: 10,
    borderRadius: 5,
    backgroundColor: 'white'
  },
  saveButton: {
    backgroundColor: colors.secondary, // Ensure secondary color is defined or replace
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
  },
  saveButtonText: {
    fontSize: 18,
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  }
});

export default EditCityScreen;