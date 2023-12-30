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

    return(
        <ScrollView style={styles.scrollView}>
            <View style={styles.container}>
            <TouchableOpacity onPress = { () => navigation.navigate('AboutUsScreen')}>
                <Image source = {require('../../assets/adaptive-icon-cropped.png')} style = {{
                    width: 60,
                    height: 60,
                    marginTop: 60,
                    marginLeft: 15,
                }}/>
            </TouchableOpacity>
                <Text style={styles.header}>Volunteer Opportunities</Text>
                <SearchSearchBar term={term} onTermChange={setTerm} onTermSubmit={handleSearchSubmit} />
                <View style={styles.pickerContainer}>
                    <RNPickerSelect
                        onValueChange={value => setSelectedCity(value)}
                        items={cities}
                        placeholder={{ label: "City/Location", value: null }}
                    />
                </View>
                <ResultsList 
                    results={filteredResults}
                    navigation={navigation}
                />
                {errorMessage ? <Text>{errorMessage}</Text> : null}
                <StatusBar style="auto" />
            </View>
        </ScrollView>
    );
};
const styles = StyleSheet.create ({
    pickerContainer: {
        width: '90%',
        alignSelf: 'center',
        borderWidth: 1,
        borderColor: colors.primary,
        borderRadius: 10,
        marginTop: 5,
        backgroundColor: '#FFF', 
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
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
    }),


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


export default SearchScreen;
