import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import colors from '../../assets/colors/colors';
import SearchSearchBar from '../components/SearchSearchBar';

const SearchScreen = ({navigation}) => {
    return(
        <View>
            <TouchableOpacity onPress = { () => navigation.navigate('AboutUs')}>
                <Image source = {require('../../assets/adaptive-icon-cropped.png')} style = {{
                    width: 60,
                    height: 60,
                    marginTop: 60,
                    marginLeft: 15,
                }}/>
            </TouchableOpacity>
            <Text style = { styles.header }>Search</Text>
            <SearchSearchBar/>
            <StatusBar style = "auto" />
        </View>
    );
}

const styles = StyleSheet.create ({
    header: {
        color: colors.primary,
        fontFamily: 'PingFangSC-Semibold', 
        fontSize: 36, 
        marginVertical: 15,
        marginLeft: 35,
        textAlign: 'left', 
    }, 
})

export default SearchScreen; 