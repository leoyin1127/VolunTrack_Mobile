import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const MenuScreen = ({route}) => {
    let searchTerm = route.params;
    const [shouldSearch, setShouldSearch] = useState(true);
    const [term, setTerm] = useState(searchTerm);
    const [searchApi, results, errorMessage] = useResults();
    const filterResultsByRating = rating => {
        return results.filter(result => {
            return result.rating === rating;
        });
    };

    if(searchTerm) {
        searchApi(searchTerm);
        setShouldSearch(false);
    }

    return (
        <>
            <SearchBar
                term={term}
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <Text></Text>
            <ScrollView>
                <ResultsList results={filterResultsByRating(5)}
                             title="Excellent oppurtunities! - 5 stars"
                />
                <Text></Text>
                <ResultsList results={filterResultsByRating(4)}
                             title="Great oppurtunities! - 4 stars"
                />
                <Text></Text>
                <ResultsList results={filterResultsByRating(3)}
                             title="Good oppurtunities! - 3 stars"
                />
            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({});

export default MenuScreen;
