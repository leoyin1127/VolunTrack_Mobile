import React, { useState, useEffect } from 'react';
import { View, TextInput, FlatList, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Autocomplete from 'react-native-autocomplete-input';
import Ionicons from 'react-native-vector-icons/Ionicons';

const LocationPicer = ({ onLocationSelect }) => {
    const [cities, setCities] = useState([]);
    const [selectedCity, setSelectedCity] = useState('');
    const [autocompleteData, setAutocompleteData] = useState([]);

    useEffect(() => {
        fetch('https://countriesnow.space/api/v0.1/countries')
            .then((response) => response.json())
            .then((data) => {
                const canada = data.data.find((country) => country.country === 'Canada');
                if (canada && canada.cities) {
                    setCities(canada.cities);
                }
            })
            .catch((error) => console.error('Error fetching cities:', error));
    }, []);

    const handleCitySearch = (query) => {
        setSelectedCity(query);
        if (query === '') {
            setAutocompleteData([]);
        } else {
            const filtered = cities.filter((city) =>
                city.toLowerCase().includes(query.toLowerCase())
            );
            setAutocompleteData(filtered);
        }
    };

    const handleReset = () => {
        setSelectedCity('');
        setCities('');
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Where</Text>
                <TouchableOpacity style={styles.resetButton} onPress={handleReset}>
                    <Ionicons name={'reload-outline'} size={25} color={'#000000'} />
                </TouchableOpacity>
            </View>
            <Text style={styles.subtitle}>Address, City, Country, etc. </Text>
            <Autocomplete
                data={autocompleteData}
                defaultValue={selectedCity}
                onChangeText={handleCitySearch}
                placeholder="Enter city"
                style={styles.input}
                containerStyle={styles.autocompleteContainer}
                listStyle={styles.listStyle}
                flatListProps={{
                    keyExtractor: (item, index) => `city-${index}`,
                    renderItem: ({ item }) => (
                        <TouchableOpacity
                            onPress={() => {
                                onLocationSelect(item);
                                setAutocompleteData([]);
                            }}
                            style={styles.listItem}
                        >
                            <Text>{item}</Text>
                        </TouchableOpacity>
                    ),
                }}
            />
            <View style={styles.line} />
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
    line: {
        borderBottomWidth: 0.7,
        borderBottomColor: '#D9D9D9',
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
    },
    listItem: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
});

export default LocationPicer;
