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
      <Text></Text>
      <ScrollView>
        <ResultsList results={filterResultsByRating(5)}
          title="Excellent opportunities! - 5 stars"
        />
        <Text></Text>
        <ResultsList results={filterResultsByRating(4)}
          title="Great opportunities! - 4 stars"
        />
        <Text></Text>
        <ResultsList results={filterResultsByRating(3)}
          title="Good opportunities! - 3 stars"
        />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});

export default MenuScreen;
