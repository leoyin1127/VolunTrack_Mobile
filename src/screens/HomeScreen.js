import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import SearchBar from '../components/SearchBar';
import CreateButton from '../components/CreateButton';

const HomeScreen = () => {
    return <View>
        <SearchBar />
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
    },
    bottomText: { 
        fontSize: 15,
        alignSelf: 'center',
        marginTop: 5,
        marginBottom: 120,
    },
});

export default HomeScreen;