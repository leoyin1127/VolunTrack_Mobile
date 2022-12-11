import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';
import {withNavigation} from "react-navigation";
import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";
import {app} from "../../firebaseConfig"

const db = getFirestore(app);

const SearchScreen = ({navigation}) => {


  return (
    <>
      <SearchBar
          placeholder="Search Products ..."
          onChangeText={(val) => { setKeywords(val) }}
          onSubmitEditing={()=>console.log(`User typed ${keywords}`)}
          value={keywords}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
    </>
  );
};

const styles = StyleSheet.create({});

export default withNavigation(SearchScreen);
