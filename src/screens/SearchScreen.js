<<<<<<< Updated upstream
import React, { useState, useEffect } from 'react';
import { StatusBar, Image, StyleSheet, Text, TouchableOpacity, View, FlatList, } from 'react-native';
import colors from '../../assets/colors/colors';
import SearchSearchBar from '../components/SearchSearchBar';
import useSearchApi from '../hooks/useResults'; // Adjust the path as necessary

const SearchScreen = ({ navigation }) => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useSearchApi();
    useEffect(() => {
        console.log('Current search results:', results);
    }, [results]);
    
    const renderResultItem = ({ item }) => {
        return (
            <View style={styles.resultItem}>
                <Text style={styles.resultText}>{item.name}</Text>
                {/* Add more details as needed */}
            </View>
        );
    };

    return (
        console.log('Data passed to FlatList:', results),
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('AboutUs')}>
                <Image
                    source={require('../../assets/adaptive-icon-cropped.png')}
                    style={styles.logo}
                />
            </TouchableOpacity>
            <Text style={styles.header}>Search</Text>
            <SearchSearchBar
                term={term}
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)}
            />
            
            <FlatList
                data={results}
                renderItem={renderResultItem}
                keyExtractor={item => item.id}
                ListEmptyComponent={<Text>No results found.</Text>}
            />
            {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        // Style for your container
    },
    header: {
        color: colors.primary,
        fontFamily: 'PingFangSC-Semibold',
        fontSize: 36,
        marginVertical: 15,
        marginLeft: 35,
        textAlign: 'left',
    },
    resultItem: {
        // Styles for each search result item
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    resultText: {
        // Styles for text in each search result item
    },
    logo: {
        width: 60,
        height: 60,
        marginTop: 60,
        marginLeft: 15,
    },
    errorText: {
        color: 'red',
        textAlign: 'center',
        margin: 10,
    },
    // ... any other styles you need
});

export default SearchScreen;
=======
import React, { useState, useEffect  } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';


import colors from '../../assets/colors/colors';
import SearchSearchBar from '../components/SearchSearchBar';
import ResultsList from '../components/ResultsList'; 
import { mockResults } from '../hooks/mockResults';


const SearchScreen = ({navigation}) => {
    const [cities, setCities] = useState([]);
    const [selectedCity, setSelectedCity] = useState(null);
    const [filteredResults, setFilteredResults] = useState(mockResults);

    useEffect(() => {
        // Fetch cities from the CountriesNow API
        fetch('https://countriesnow.space/api/v0.1/countries')
            .then((response) => response.json())
            .then((data) => {
                // Find Canada in the list of countries and get its cities
                const canada = data.data.find(country => country.country === 'Canada');
                if (canada && canada.cities) {
                    const cityItems = canada.cities.map((city) => ({
                        label: city,
                        value: city,
                    }));
                    setCities(cityItems);
                }
            })
            .catch((error) => {
                console.error('Error fetching cities:', error);
                // Handle the error appropriately in your app
            });
    }, []);

    useEffect(() => {
        if (selectedCity) {
<<<<<<< Updated upstream
            const results = mockResults.filter(result => result.city === selectedCity);
=======
            const cityResults = results.filter(result => {
                const city = result.location ? result.location.city : '';
                return city === selectedCity;
            });
            setFilteredResults(cityResults);
        } else {
>>>>>>> Stashed changes
            setFilteredResults(results);
        } else {
            setFilteredResults(mockResults);
        }
    }, [selectedCity]);

    return(
        <ScrollView style={styles.scrollContainer}>
            <View style={styles.container}>
            <TouchableOpacity onPress = { () => navigation.navigate('AboutUsScreen')}>
                <Image source = {require('../../assets/adaptive-icon-cropped.png')} style = {{
                    width: 60,
                    height: 60,
                    marginTop: 60,
                }}/>
            </TouchableOpacity>
            <Text style = { styles.header }>Volunteer Opportunities</Text>
            <SearchSearchBar/>
            <View style={styles.pickerContainer}>
                <RNPickerSelect
                onValueChange={(value) => setSelectedCity(value)}
                items={cities}
                placeholder={{ label: "City/Location", value: null }}/>
            </View>
            <ResultsList 
                results={filteredResults}
                navigation={navigation}
            />
            
            <StatusBar style = "auto" />
            </View>
        </ScrollView>
    );
}



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
            height: 5,
        },
        shadowOpacity: 0.5, // Increase shadow opacity for a darker shadow
        shadowRadius: 5, // Increase shadow radius for a fuller shadow
        elevation: 5,
    },
    scrollView: {
        flex: 1, // Ensure ScrollView fills the screen
        backgroundColor: colors.background,
    },
    container: {
        paddingTop: 50, 
        paddingHorizontal: 15,
        marginTop: 10,
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
})
>>>>>>> Stashed changes

