import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import SearchBar from '../components/SearchBar';
import CreateButton from '../components/CreateButton';

const HomeScreen = ({navigation}) => {
    return <View>
<<<<<<< HEAD
        <SearchBar
            term={term}
            onTermChange={setTerm}
            onTermSubmit={() => {
                navigation.navigate('Menu');
            }}
        />
=======
        <SearchBar />
>>>>>>> parent of a0ab1e2 (fix)
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
        color: '#1E2022',
        fontFamily: "HelveticaNeue"
    },
    bottomText: { 
        fontSize: 15,
        alignSelf: 'center',
        marginTop: 5,
        marginBottom: 120,
        color: '#1E2022',
        fontFamily: "HelveticaNeue"
    },
   
});

<<<<<<< HEAD
export default withNavigation(HomeScreen);
=======
export default HomeScreen;
>>>>>>> parent of a0ab1e2 (fix)
