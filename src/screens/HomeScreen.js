import React, {useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';

import SearchBar from '../components/SearchBar';
import CreateButton from '../components/CreateButton';
import useResults from "../hooks/useResults";
import {collection, getDocs, getFirestore, query, where} from "firebase/firestore";
import {app} from "../../firebaseConfig"

const db = getFirestore(app);

const HomeScreen = () => {

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

    return <View>
        <SearchBar
            placeholder="Search Products ..."
            onChangeText={(val) => { setKeywords(val) }}
            onSubmitEditing={()=>console.log(`User typed ${keywords}`)}
            value={keywords}
        />
        <Text style = {styles.topText}>It looks like you haven't added any</Text>
        <Text style = {styles.bottomText}>Volunteering tasks yet...</Text>
        <CreateButton title="Create a New Task!"/>
    </View>
}

const styles =  StyleSheet.create({
    topText: {
        fontSize: 15,
        alignSelf: 'center',
        marginTop: 100,
        color: '#1E2022'
    },
    bottomText: {
        fontSize: 15,
        alignSelf: 'center',
        marginTop: 5,
        marginBottom: 120,
        color: '#1E2022'
    },

});

export default HomeScreen;
