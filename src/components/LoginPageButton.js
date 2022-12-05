import React from 'react';
import { View, Button, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { withNavigation} from 'react-navigation';

const CreateButton = ({ title, navigation }) => (
    <TouchableOpacity 
        onPress = { () => navigation.navigate('Login')}
        style = {styles.buttonContainer}
      >
      <Text style={styles.buttonText}> {title} </Text>
    </TouchableOpacity>
  );
  
  const styles = StyleSheet.create({
    buttonContainer: {
      elevation: 8,
      backgroundColor: "#C9D6DF",
      borderRadius: 4,
      paddingVertical: 3,
      paddingHorizontal: 1,
      alignSelf: 'flex-start',
      marginVertical: 80
    },

    buttonText: {
      fontSize: 10,
      color: "#000000",
      marginVertical: 10,
      marginHorizontal: 30,
      alignSelf: "center",
    }
  });

  export default withNavigation(CreateButton);