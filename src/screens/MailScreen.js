import { Notifications } from 'expo';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import colors from '../../assets/colors/colors';
import MailSearchBar from '../components/MailSearchBar';
import { usePushNotification } from '../services/pushnotification';

const MailScreen = ({ navigation }) => {
usePushNotification();

useEffect(() => {
    const registerForPushNotifications = async () => {
      // Check if the app has permission to receive push notifications
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;

      // If permission has not been granted, ask for it
    if (existingStatus !== 'granted') {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
    }
   // If permission is still not granted, exit
if (finalStatus !== 'granted') {
    return;
}

  // Get the device's push token
const tokenData = await Notifications.getExpoPushTokenAsync();
const token = tokenData.data;

console.log('Expo Push Token:', token);
};

// Immediately Invoked Function Expression (IIFE) to handle async code
(async () => {
await registerForPushNotifications();
})();
}, []);

// Sample messages data
const messages = [
{ id: 1, text: 'Message 1' },
{ id: 2, text: 'Message 2' },
{ id: 3, text: 'Message 3' },
];
const navigateToIndividualMail = (message) => {
    navigation.navigate('IndividualMail', { message });
};

return (
    <View>
    <TouchableOpacity onPress={() => navigation.navigate('AboutUs')}>
        <Image
        source={require('../../assets/adaptive-icon-cropped.png')}
        style={{
            width: 60,
            height: 60,
            marginTop: 60,
            marginLeft: 15,
        }}
        />
    </TouchableOpacity>
    <Text style={styles.header}>Mail</Text>
    <MailSearchBar />
    <FlatList
        data={messages}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
        <TouchableOpacity onPress={() => navigateToIndividualMail(item)}>
            <View style={styles.messageItem}>
        <Text>{item.text}</Text>
            </View>
        </TouchableOpacity>
        )}
    />
    <StatusBar style="auto" />
    </View>
    ) ;
};

const styles = StyleSheet.create({
header: {
    color: colors.primary,
    fontFamily: 'PingFangSC-Semibold',
    fontSize: 36,
    marginVertical: 15,
    marginLeft: 35,
    textAlign: 'left',
},
messageItem: {
    marginBottom: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 10,
},
});

export default MailScreen;