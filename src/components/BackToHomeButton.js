import React from 'react';
import { View, Button, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { withNavigation} from 'react-navigation';

const CreateButton = ({ title, navigation }) => (
    <TouchableOpacity
        onPress = { () => navigation.navigate('Navigator')}
        style = {styles.buttonContainer}
    >
        <Text style={styles.buttonText}> {title} </Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    buttonContainer: {
        elevation: 8,
        backgroundColor: "#C9D6DF",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
        alignSelf: 'center',
        marginVertical: 40
    },

    buttonText: {
        fontSize: 18,
        color: "#000000",
        marginVertical: 10,
        marginHorizontal: 30,
        alignSelf: "center",
    }
});

export default withNavigation(CreateButton);