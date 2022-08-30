import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';

const SearchBar = ({}) => {
    return (
        <View style = {styles.backgroundStyle}>
            <TextInput
               style = {styles.inputStyle} 
               placeholder = "Search" placeholderTextColor = 'gray'
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

export default SearchBar;