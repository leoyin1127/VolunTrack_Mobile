import React, { useState, useEffect, useCallback, useRef } from 'react';
import { StatusBar, ScrollView, Text, TouchableOpacity, View, Image, StyleSheet, ActivityIndicator, RefreshControl } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import useSearchApi from '../hooks/useResults'; 

import colors from '../../assets/colors/colors';
import HomepageSearchBar from '../components/HomepageSearchBar';
import Categories from '../components/Categories';
import ResultsList from '../components/ResultsList';
import Ionicons from 'react-native-vector-icons/Ionicons';

const HomepageScreen = ({ navigation }) => {
    const [term, setTerm] = useState(''); 
    const [selectedCity, setSelectedCity] = useState('');
    const [searchApi, results, errorMessage] = useSearchApi();
    const [filteredResults, setFilteredResults] = useState([]);
    const [userHobbies, setUserHobbies] = useState([]);
    const [filterByHobbies, setFilterByHobbies] = useState(true);

    const [isLoading, setIsLoading] = useState(false);

    const initialLoadRef = useRef(true); // Ref to track the initial load

    const [currentUser, setCurrentUser] = useState(null);

    const [refreshing, setRefreshing] = useState(false);

    const refreshResults = useCallback(() => {
        setRefreshing(true);
        searchApi(term, selectedCity).then(() => {
            setRefreshing(false); // Stop the refreshing indicator
        });
    }, [term, selectedCity, searchApi]);

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
                    const name = result.name ? normalizeString(result.name) : '';
                    const location = result.location && result.location.city ? normalizeString(result.location.city) : '';
                    const city = result.city ? normalizeString(result.city) : '';
                    return name.includes(lowerCaseTerm) || location.includes(lowerCaseTerm) || city.includes(lowerCaseTerm);
                }
            );
        }
    
        if (userHobbies.length > 0 && filterByHobbies) {
            cityResults = cityResults.filter(result => {
                const categoriesText = result.categories ? getCategoriesText(result.categories) : '';
                const normalizedCategories = normalizeString(categoriesText);
                return userHobbies.some(hobby => normalizedCategories.includes(normalizeString(hobby)));
            });
        }
    
        setFilteredResults(cityResults);
    }, [selectedCity, term, results, userHobbies, filterByHobbies]);

    const handleSearchSubmit = async () => {
        await searchApi(term, selectedCity); // Perform the search
    };
    
    return (
        <ScrollView
            style={styles.scrollView}
            refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={refreshResults}
                />
            }
        >
            <View style={styles.topBar}>
                <TouchableOpacity onPress={() => navigation.navigate('AboutUsScreen')} style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ fontSize: 20, fontWeight: '500', marginRight: 5 }}>Volunteer</Text>
                    <Image source={require('../../assets/adaptive-icon-cropped.png')} style={styles.icon} />
                </TouchableOpacity>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 5 }}>
                    <TouchableOpacity>
                        <Ionicons             
                            name={'search-outline'} 
                            size={30}
                            color={'#000000'} 
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginLeft: 5}} onPress={() => navigation.navigate('HomepageSettingScreen')}>
                        <Ionicons             
                            name={'options-outline'} 
                            size={30}
                            color={'#000000'} 
                        />
                    </TouchableOpacity>
                </View>
            </View>
            <HomepageSearchBar
                term={term}
                onTermChange={setTerm}
                onTermSubmit={handleSearchSubmit}
            />
            <Categories />
            <Text style={styles.text}>Recommended Jobs</Text>
            {isLoading ? (
                <ActivityIndicator style={{margin: 30}} size="large" color={colors.primary} />
            ) : (
                <ResultsList results={filteredResults} navigation={navigation} />
            )}
            {!isLoading && filteredResults.length === 0 && (
                <Text style={styles.noResultsMessage}>
                    No results found.
                </Text>
            )}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: colors.background,
        paddingHorizontal: 10,
    },
    text: {
        fontSize: 20,
        marginLeft: 15,
        marginTop: 10,
        color: '#000000',
        fontWeight: 'bold',
    },
    topBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 15,
        marginLeft: 20,
        marginRight: 10,
    },
    icon: {
        width: 40,
        height: 40,
    },
    noResultsMessage: {
        textAlign: 'center',
        color: colors.text,
        fontSize: 16,
        marginTop: 20,
    },
});

export default HomepageScreen;