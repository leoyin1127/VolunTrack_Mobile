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

    const [isLoading, setIsLoading] = useState(false);

    const initialLoadRef = useRef(true);

    const [currentUser, setCurrentUser] = useState(null);

    const [refreshing, setRefreshing] = useState(false);

    const [selectedStartDate, setSelectedStartDate] = useState(null);
    const [selectedEndDate, setSelectedEndDate] = useState(null);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const hasActiveFilters = term || selectedCity || selectedStartDate || selectedEndDate || selectedCategories.length > 0;

    const formatDate = (date) => date ? new Date(date).toLocaleDateString() : '';

    const filterText = () => {
        const filters = [];
        if (selectedCity) filters.push(`City: ${selectedCity}`);
        if (selectedStartDate && selectedEndDate) {
            filters.push(`Date: ${formatDate(selectedStartDate)} - ${formatDate(selectedEndDate)}`);
        }
        if (selectedCategories.length > 0) {
            filters.push(`Categories: ${selectedCategories.join(', ')}`);
        }
        return filters.join(' | ');
    };

    const refreshResults = useCallback(() => {
        setRefreshing(true);
        searchApi(term, selectedCity).then(() => {
            setRefreshing(false);
        });
    }, [term, selectedCity, searchApi]);

    useFocusEffect(
        useCallback(() => {
            const fetchUserData = async () => {
                const storedUserData = await AsyncStorage.getItem('@user_data');
                if (storedUserData) {
                    const userData = JSON.parse(storedUserData);
                    setCurrentUser(userData);
                } else {
                }
            };
            fetchUserData();
        }, [])
    );

    useFocusEffect(
        useCallback(() => {
            if (initialLoadRef.current) {
                const performSearch = async () => {
                    setIsLoading(true);
                    await searchApi('volunteer', selectedCity);
                    setIsLoading(false);
                };
                performSearch();
                initialLoadRef.current = false;
            }
        }, [selectedCity])
    );

    useFocusEffect(
        useCallback(() => {
            const loadFilters = async () => {
                const interestsFilter = await AsyncStorage.getItem('@selectedInterests');
                const startDateFilter = await AsyncStorage.getItem('@selectedStartDate');
                const endDateFilter = await AsyncStorage.getItem('@selectedEndDate');
                const cityFilter = await AsyncStorage.getItem('@selectedCity');
            
                setSelectedCity(cityFilter || '');
                setSelectedStartDate(startDateFilter || null);
                setSelectedEndDate(endDateFilter || null);
                setSelectedCategories(interestsFilter ? JSON.parse(interestsFilter) : []);

                refreshResults();
            };            
            loadFilters();
        }, [])
      );

    useEffect(() => {
        refreshResults();
    }, [selectedCity, selectedStartDate, selectedEndDate, selectedCategories]);
            

    const normalizeString = (inputString) => inputString.toLowerCase();

    const getCategoriesText = (categories) => {
        if (typeof categories === 'string') return categories;
        if (Array.isArray(categories)) {
            return categories.map(cat => cat.title).join(', ');
        }
        return '';
    };

    useEffect(() => {
        let updatedResults = results;

        if (selectedCity) {
            updatedResults = updatedResults.filter(
                result => (result.location?.city === selectedCity || result.city === selectedCity)
            );
        }

        if (term) {
            const lowerCaseTerm = normalizeString(term);
            updatedResults = updatedResults.filter(result => {
                const name = result.name ? normalizeString(result.name) : '';
                const location = result.location?.city ? normalizeString(result.location.city) : '';
                const city = result.city ? normalizeString(result.city) : '';
                return name.includes(lowerCaseTerm) || location.includes(lowerCaseTerm) || city.includes(lowerCaseTerm);
            });
        }

        if (selectedStartDate && selectedEndDate) {
            updatedResults = updatedResults.filter(result => {
                const eventDate = new Date(result.date);
                const start = new Date(selectedStartDate);
                const end = new Date(selectedEndDate);
                return eventDate >= start && eventDate <= end;
            });
        }

        if (selectedCategories.length > 0) {
            updatedResults = updatedResults.filter(result => {
                const categoriesText = getCategoriesText(result.categories);
                return selectedCategories.some(cat => categoriesText.includes(cat));
            });
        }

        setFilteredResults(updatedResults);
        console.log(selectedCity, selectedStartDate, selectedEndDate, selectedCategories)
    }, [selectedCity, term, results, selectedCategories, selectedStartDate, selectedEndDate]);

    const handleSearchSubmit = async () => {
        await searchApi(term, selectedCity);
    };

    const openSettings = () => {
        navigation.navigate('HomepageSettingScreen');
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
                        <Ionicons name={'search-outline'} size={30} color={'#000000'} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ marginLeft: 5 }} onPress={openSettings}>
                        <Ionicons name={'options-outline'} size={30} color={'#000000'} />
                    </TouchableOpacity>
                </View>
            </View>
            <HomepageSearchBar
                term={term}
                onTermChange={setTerm}
                onTermSubmit={handleSearchSubmit}
            />
            {!hasActiveFilters && <Categories />}
            <Text style={styles.text}>{hasActiveFilters ? 'Filtered Results' : 'Recommended Jobs'}</Text>
            {(hasActiveFilters && !term) && (
                <Text style={styles.filterSummary}>{filterText()}</Text>
            )}            
            {isLoading ? (
                <ActivityIndicator style={{ margin: 30 }} size="large" color={colors.primary} />
            ) : (
                <ResultsList results={filteredResults} navigation={navigation} />
            )}
            {!isLoading && filteredResults.length === 0 && (
                <Text style={styles.noResultsMessage}>No results found.</Text>
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
    filterSummary: {
        marginLeft: 15,
        marginTop: 5,
        color: '#555',
        fontSize: 14,
        fontStyle: 'italic',
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
