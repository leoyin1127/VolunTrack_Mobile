import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import {withNavigation} from "react-navigation";
import {collection, getDocs, getFirestore, query, where} from "firebase/firestore";
import useResults from "../hooks/useResults";
import {app} from "../../firebaseConfig"

const db = getFirestore(app);

const SearchBar = (navigation) => {


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
        <View style = {styles.backgroundStyle}>
            <TextInput
               style = {styles.inputStyle}
               placeholder = "Search" placeholderTextColor = 'gray'
               onSubmitEditing ={(text)=>search(text)}
            />
            <EvilIcons name = "search" style = {styles.iconStyle} />
        </View>
    );
};

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: '#DCDCDC',
        height: 50,
        borderRadius: 10,
        marginVertical: 60,
        marginHorizontal: 40,
        flexDirection: 'row',
        marginBottom: 10
    },

    inputStyle: {
        flex: 1,
        fontSize: 16,
        marginHorizontal: 15
    },
    iconStyle: {
        fontSize: 25,
        alignSelf: 'center',
        marginHorizontal: 10
    }
});

export default withNavigation(SearchBar);
