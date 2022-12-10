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
  const [term, setTerm] = useState('');
  const [errorMessage] = useResults();
  const [results, setResults] = useResults();
    const [keywords, setKeywords] = React.useState('')

  async function search(term){
      const listingsCol = collection(db, 'listings')
      const QTitle = query(listingsCol, where("title", "==", term));
      const QDescription = query(listingsCol, where("description", "==", term));

      const QTitleSnapshot = await getDocs(QTitle);
      const QDescriptionSnapshot = await getDocs(QDescription);

      const q = QTitleSnapshot.concat(QDescriptionSnapshot)

      setResults(q)

      console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa\naaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")

      navigation.navigate("Results")
  }

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
