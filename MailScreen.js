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
      const { status: existingStatus } = await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;

      if (existingStatus !== 'granted') {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }

      if (finalStatus !== 'granted') {
        return;
      }

      const tokenData = await Notifications.getExpoPushTokenAsync();
      const token = tokenData.data;

      console.log('Expo Push Token:', token);
    };

    (async () => {
      await registerForPushNotifications();
    })();
  }, []);

  const messages = [
    { id: 1, text: 'Message 1' },
    { id: 2, text: 'Message 2' },
    { id: 3, text: 'Message 3' },
  ];

  const navigateToIndividualMail = (message) => {
    navigation.navigate('IndividualMail', { message });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('AboutUs')}>
        <Image
          source={require('../../assets/adaptive-icon-cropped.png')}
          style={styles.icon}
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
              <Text style={styles.messageText}>{item.text}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingTop: 20,
    paddingHorizontal: 15,
  },
  icon: {
    width: 60,
    height: 60,
    marginTop: 25,
},
header: {
    color: colors.primary,
    fontFamily: 'PingFangSC-Semibold',
    fontSize: 28,
    marginVertical: 15,
    marginLeft: 15,
    textAlign: 'left',
    fontWeight: 'bold',
  },
  messageItem: {
    marginTop: 20,
    marginBottom: 10,
    padding: 18,
    borderRadius: 15,
    marginHorizontal: 15,
    backgroundColor: 'rgba(173, 200, 216, 0.3)',
  },
  messageText: {
    color: 'rgb(58,59,60)',
    fontSize: 14,
  },
});

export default MailScreen;
