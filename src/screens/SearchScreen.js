import React, { useState, useEffect } from 'react';
import {
  StatusBar,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import Autocomplete from 'react-native-autocomplete-input';
import colors from '../../assets/colors/colors';
import SearchSearchBar from '../components/SearchSearchBar';
import ResultsList from '../components/ResultsList';
import useSearchApi from '../hooks/useResults'; // Ensure this is the correct path

const SearchScreen = ({ navigation }) => {
    const [term, setTerm] = useState('');
    const [cities, setCities] = useState([]);
    const [autocompleteData, setAutocompleteData] = useState([]);
    const [selectedCity, setSelectedCity] = useState('');
    const [searchApi, results, errorMessage] = useSearchApi();
    const [filteredResults, setFilteredResults] = useState([]);
    const [isFocused, setIsFocused] = useState(false);

    useEffect(() => {
        fetch('https://countriesnow.space/api/v0.1/countries')
        .then((response) => response.json())
        .then((data) => {
            const canada = data.data.find((country) => country.country === 'Canada');
            if (canada && canada.cities) {
                const cityItems = canada.cities.map((city) => ({
                    label: city,
                    value: city,
                }));
                setCities(cityItems);
            }
        })
        .catch((error) => console.error('Error fetching cities:', error));
    }, []);

    useEffect(() => {
        let cityResults = results;
    
        if (selectedCity) {
            cityResults = cityResults.filter(
                (result) => result.location.city === selectedCity
            );
        }
    
        if (term) {
            cityResults = cityResults.filter(
                (result) => result.name.toLowerCase().includes(term.toLowerCase())
            );
        }
    
        setFilteredResults(cityResults);
    }, [selectedCity, term, results]);

    const handleCitySearch = (query) => {
        setSelectedCity(query);
        if (query === '') {
            setAutocompleteData([]);
        } else {
            const filtered = cities.filter((city) =>
                city.label.toLowerCase().includes(query.toLowerCase())
            );
            setAutocompleteData(filtered);
        }
    };

    const handleSearchSubmit = () => {
        searchApi(term, selectedCity); // Assuming searchApi can take both parameters
    };

    // Define dynamic styles within the component function
    const dynamicStyles = StyleSheet.create({
        input: {
            // Styles for the text input
            borderWidth: 0, // No borders
            borderBottomWidth: 1, // Only bottom border
            borderColor: isFocused ? colors.primary : 'lightgray', // Bottom border color
            padding: 10,
            height: 40,
        },
        container: {
            // Styles for the container of the Autocomplete component
            width: '90%',
            alignSelf: 'center',
            backgroundColor: 'transparent', // No background color
        },
        listStyle: {
            // Styles for the list container
            margin: '10',
        },
    });


  return (
    <ScrollView style={staticStyles.scrollView}>
        <View style={staticStyles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('AboutUsScreen')}>
            <Image
                source={require('../../assets/adaptive-icon-cropped.png')}
                style={staticStyles.icon}
            />
            </TouchableOpacity>
            <Text style={staticStyles.header}>Volunteer Opportunities</Text>
            <SearchSearchBar
                term={term}
                onTermChange={setTerm}
                onTermSubmit={handleSearchSubmit}
            />

            <Autocomplete
                data={autocompleteData}
                defaultValue={selectedCity}
                onChangeText={handleCitySearch}
                placeholder="City/Location"
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                style={dynamicStyles.input}
                containerStyle={dynamicStyles.container} // Set the style for the container
                listStyle={dynamicStyles.listStyle} // Set the style for the list part
                flatListProps={{
                    keyExtractor: (item, index) => `item-${index}`,
                    renderItem: ({ item }) => (
                        <TouchableOpacity
                            onPress={() => {
                                setSelectedCity(item.value);
                                setAutocompleteData([]); // Hide the list after selection
                            }}
                        >
                            <Text style={dynamicStyles.itemText}>{item.label}</Text>
                        </TouchableOpacity>
                    ),
                }}
            />

            <ResultsList
                results={filteredResults}
                navigation={navigation}
            />
            {filteredResults.length === 0 && (selectedCity || term) && (
                <Text style={staticStyles.noResultsMessage}>
                    {selectedCity && !term ? 'No results found for the selected city' : null}
                    {term && !selectedCity ? 'No results found for the search term' : null}
                    {term && selectedCity ? 'No results found for the selected city and search term' : null}
                </Text>
            )}

            {errorMessage ? (
                <Text style={staticStyles.errorMessage}>{errorMessage}</Text>
            ) : null}
            <StatusBar style="auto" />
        </View>
    </ScrollView>
  );
};

// Define static styles outside of the component function
const staticStyles = StyleSheet.create({
    scrollView: {
        flex: 1,
        backgroundColor: colors.background,
    },
    container: {
        paddingTop: 60,
        paddingHorizontal: 15,
    },
    icon: {
        width: 60,
        height: 60,
        marginBottom: 15,
    },
    header: {
        color: colors.primary,
        fontFamily: 'PingFangSC-Semibold',
        fontSize: 28,
        marginVertical: 15,
        marginLeft: 15,
        textAlign: 'left',
        fontWeight: 'bold',
    },
    itemText: {
        margin: 10,
    },
    errorMessage: {
        color: 'red',
        textAlign: 'center',
    },
    noResultsMessage: {
        textAlign: 'center',
        color: colors.text, // You might need to adjust this color
        fontSize: 16,
        marginTop: 20,
    },
});

export default SearchScreen;
