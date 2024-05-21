import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { StatusBar, Image, StyleSheet, ScrollView, Text, TouchableOpacity, View, ActivityIndicator } from 'react-native';
import Autocomplete from 'react-native-autocomplete-input';
import colors from '../../assets/colors/colors';
import SearchSearchBar from '../components/SearchSearchBar';
import ResultsList from '../components/ResultsList';
import useSearchApi from '../hooks/useResults'; 
import { auth, db } from '../api/firebaseConfig';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SearchScreen = ({ navigation }) => {
    const [term, setTerm] = useState(''); 
    const [cities, setCities] = useState([]);
    const [autocompleteData, setAutocompleteData] = useState([]);
    const [showCityList, setShowCityList] = useState(false); // New state for toggling city list
    const [selectedCity, setSelectedCity] = useState('');
    const [searchApi, results, errorMessage] = useSearchApi();
    const [filteredResults, setFilteredResults] = useState([]);
    const [userHobbies, setUserHobbies] = useState([]);
    const [filterByHobbies, setFilterByHobbies] = useState(false);

    const [isLoading, setIsLoading] = useState(false);

    const [isFocused, setIsFocused] = useState(false);
    const initialLoadRef = useRef(true); // Ref to track the initial load

    const [currentUser, setCurrentUser] = useState(null);

    useFocusEffect(
        useCallback(() => {
            const fetchUserData = async () => {
                const storedUserData = await AsyncStorage.getItem('@user_data');
                if (storedUserData) {
                    const userData = JSON.parse(storedUserData);
                    setCurrentUser(userData);
                    setUserHobbies(userData.hobbies);
                } else {
                    // Optionally fetch from Firestore if needed or handle user not found
                }
            };
            fetchUserData();
        }, [])
    );

    useFocusEffect(
        useCallback(() => {
        if (initialLoadRef.current) {
            const performSearch = async () => {
            setIsLoading(true); // Start loading
            await searchApi('volunteer', selectedCity); // Perform the search with the default term
            setIsLoading(false); // End loading
            };

            performSearch();
            initialLoadRef.current = false; // Set to false after initial load
        }
        }, [selectedCity]) // Dependency on selectedCity if you want to filter by city as well
    );
    
    
    const toggleCityList = () => {
        setShowCityList(!showCityList); // Toggle visibility of city list
    };

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

    const normalizeString = (inputString) => {
        return inputString.toLowerCase();
    };
    
    const getCategoriesText = (categories) => {
        if (typeof categories === 'string') {
            return categories;  // If it's already a string, return it as is
        } else if (Array.isArray(categories)) {
            // If it's an array, assume it's an array of objects with a 'title' key
            return categories.map(cat => cat.title).join(', ');
        }
        return '';  // Return an empty string if neither
    };
    
    useEffect(() => {
        let cityResults = results;
    
        if (selectedCity) {
            cityResults = cityResults.filter(
                result => (result.location && result.location.city === selectedCity) || (result.city === selectedCity)
            );
        }
    
        if (term) {
            const lowerCaseTerm = normalizeString(term);
            cityResults = cityResults.filter(
                result => {
                    const name = normalizeString(result.name);
                    const location = result.location ? normalizeString(result.location.city) : '';
                    const city = normalizeString(result.city);
                    return name.includes(lowerCaseTerm) || location.includes(lowerCaseTerm) || city.includes(lowerCaseTerm);
                }
            );
        }
    
        if (userHobbies.length > 0 && filterByHobbies) {
            cityResults = cityResults.filter(result => {
                const categoriesText = getCategoriesText(result.categories);
                const normalizedCategories = normalizeString(categoriesText);
                return userHobbies.some(hobby => normalizedCategories.includes(normalizeString(hobby)));
            });
        }
    
        setFilteredResults(cityResults);
    }, [selectedCity, term, results, userHobbies, filterByHobbies]);
    
    
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

    const handleSearchSubmit = async () => {
        setIsLoading(true); // Start loading
        await searchApi(term, selectedCity); // Perform the search
        setIsLoading(false); // End loading
    };
    

    // Define dynamic styles within the component function
    const dynamicStyles = StyleSheet.create({
        input: {
            // Styles for the text input
            
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
        inputContainer: {
            flexDirection: 'row',
            alignItems: 'center',    
            justifyContent: 'space-between', // Positions items on each end
            borderWidth: 1, // Border for the entire container
            borderColor: colors.primary,
            borderRadius: 10,
            width: '90%',
            alignSelf: 'center',
            marginBottom: 10,
            
        },
        searchInput: {
            flex: 1,
            padding: 10,
        },
        toggleIcon: {
            width: 20,
            height: 20,
            marginRight: 10,
        },
        toggleContainer: {
            flexDirection: 'row',
            justifyContent: 'center',
            paddingVertical: 10,
        },
        toggleButton: {
            backgroundColor: colors.lightGray, // Assume colors.lightGray is defined
            paddingHorizontal: 20,
            paddingVertical: 10,
            borderRadius: 10,
        },
        toggleButtonActive: {
            backgroundColor: colors.primary,
            paddingHorizontal: 20,
            paddingVertical: 10,
            borderRadius: 10,
        },
        toggleButtonText: {
            color: 'black',
            fontWeight: 'bold',
        },
        checkboxContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            alignSelf: 'center',
            marginTop: 10,
            padding: 10,
            backgroundColor: 'white', // Optional: depends on your app's theme
        },
        checkbox: {
            width: 24,
            height: 24,
            marginRight: 10,
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 1,
            borderColor: '#ccc',
            borderRadius: 4,
        },
        checkboxActive: {
            backgroundColor: colors.primary,
        },
        checkboxLabel: {
            fontSize: 16,
            color: '#000',
        },
    });

  return (
    <ScrollView style={staticStyles.scrollView}>
        <View style={staticStyles.container}>
            <View style={staticStyles.topBar}>
                <TouchableOpacity onPress={() => navigation.navigate('AboutUsScreen')}>
                    <Image source={require('../../assets/adaptive-icon-cropped.png')} style={staticStyles.icon} />
                </TouchableOpacity>
                
            </View>
            
            <Text style={staticStyles.header}>Volunteer Opportunities</Text>

            {/* <View style={{marginLeft: 240}}>
                <Image source={require('../../assets/adaptive-icon-cropped.png')} style={{width: 180,
        height: 180,}}/>

            </View> */}
            
            <View style={dynamicStyles.inputContainer}>
                <SearchSearchBar
                    term={term}
                    onTermChange={setTerm}
                    onTermSubmit={handleSearchSubmit}
                    style={dynamicStyles.searchInput}
                />
                <TouchableOpacity onPress={toggleCityList}>
                    <Image
                        source={require('../../assets/icons/More.png')}
                        style={dynamicStyles.toggleIcon}                        
                    />
                </TouchableOpacity>
            </View>   
            {showCityList && (
                <>
                    <Autocomplete
                        data={autocompleteData}
                        defaultValue={selectedCity}
                        onChangeText={handleCitySearch}
                        placeholder="City/Location"
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                        style={dynamicStyles.input}
                        containerStyle={dynamicStyles.container}
                        listStyle={dynamicStyles.listStyle}
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
                    <View style={dynamicStyles.checkboxContainer}>
                        <TouchableOpacity
                            style={[dynamicStyles.checkbox, filterByHobbies ? dynamicStyles.checkboxActive : null]}
                            onPress={() => setFilterByHobbies(!filterByHobbies)}
                        >
                            {filterByHobbies && <Text style={{ color: 'white' }}>✓</Text>}
                        </TouchableOpacity>
                        <Text style={dynamicStyles.checkboxLabel}>
                            {filterByHobbies ? 'Hobby Filter Enabled' : 'Enable Hobby Filter'}
                        </Text>
                    </View>
                </>
            )}
            
            {isLoading ? (
                <ActivityIndicator style={{margin: 30}} size="large" color={colors.primary} />
            ) : (
                <ResultsList results={filteredResults} navigation={navigation} />
            )}
            {!isLoading && filteredResults.length === 0 && (selectedCity || term) && (
                <Text style={staticStyles.noResultsMessage}>
                    {selectedCity && !term ? 'No results found for the selected city.' : null}
                    {term && !selectedCity ? 'No results found for the search term.' : null}
                    {term && selectedCity ? 'No results found for the selected city and search term.' : null}
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
    topBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
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