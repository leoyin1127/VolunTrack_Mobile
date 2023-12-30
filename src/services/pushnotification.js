import Constants from 'expo-constants'; // Import Constants from 'expo-constants'
import * as Notifications from 'expo-notifications';
import { useEffect } from 'react';

const usePushNotification = () => {
  useEffect(() => {
    const registerForPushNotifications = async () => {
      try {
        const { status: existingStatus } = await Notifications.getPermissionsAsync();

        if (existingStatus !== 'granted') {
          const { status } = await Notifications.requestPermissionsAsync();
          if (status !== 'granted') {
            console.log('Failed to get push token for push notification!');
            return;
          }
        }

        const projectId = Constants.expoConfig.extra.projectId;

        const expoPushToken = await Notifications.getExpoPushTokenAsync({
          projectId: '00ab2240-c3a4-4974-87cf-2d41f65b9b0e'
        });
        const token = expoPushToken.data;
        console.log('Expo Push Token:', token);

        await Notifications.scheduleNotificationAsync({
          content: {
            title: 'Test Notification',
            body: 'This is a test notification.',
          },
          trigger: null,
        });
      } catch (error) {
        console.error('Error getting or scheduling push notification:', error);
      }
    };

    registerForPushNotifications();
  }, []);
};

export { usePushNotification };
