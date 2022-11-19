import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const MenuScreen = () => {
  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage] = useResults();

  const filterResultsByRating = rating => {
    return results.filter(result => {
      return result.rating === rating;
    });
  };

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
        <ResultsList results={filterResultsByRating(5)}
          title="Excellent oppurtunities!"
        />
        <ResultsList results={filterResultsByRating(4)} 
          title="Great oppurtunities!" />

        <ResultsList results={filterResultsByRating(3)}
          title="Good oppurtunities!"
        />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});

export default MenuScreen;
