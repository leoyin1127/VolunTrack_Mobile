import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const CreateScreen = ({navigation}) => {
    return <View style = {styles.container}>
        <Text>Create Screen!</Text>
        <Button
          title = "Click Here!"
          onPress = {() => alert('Swipe right to return!')}
      />
    </View>
}

const styles =  StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export default CreateScreen