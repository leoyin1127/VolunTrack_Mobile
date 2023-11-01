import { Image, StyleSheet, View } from 'react-native';

import AboutUsScreen from './src/screens/AboutUsScreen';
import BookmarkedScreen from './src/screens/BookmarkedScreen';
import HomepageScreen from './src/screens/HomepageScreen';
import IndividualMailScreen from './src/screens/IndividualMailScreen';
import MailScreen from './src/screens/MailScreen'; 
import SearchScreen from './src/screens/SearchScreen'; 
import VolunteeringScreen from './src/screens/VolunteeringScreen'; 

import colors from './assets/colors/colors';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions = {{
      style: styles.tabBar,
      activeTintColor: colors.primary,
      inactiveTintColor: colors.secondary,
      headerShown: false, 

      'tabBarShowLabel': false,
      'tabBarStyle': [
        {
          'display': 'flex'
        },
        null
      ]
    }}>
      <Tab.Screen name = 'Homepage' component = {HomepageScreen} options = {{
        tabBarIcon: ({focused}) => (<View style = {{alignItems: 'center', justifyContent: 'center', top: 10}}>
          <Image source = {require('./assets/icons/home.png')} resizeMode = 'contain' style = {{
            width: 32,
            height: 32,
            tintColor: focused ? colors.primary : colors.secondary
          }}/>
        </View>
        )
      }}/>
      <Tab.Screen name = 'Search' component = {SearchScreen} options = {{
        tabBarIcon: ({focused}) => (<View style = {{alignItems: 'center', justifyContent: 'center', top: 10}}>
          <Image source = {require('./assets/icons/loupe.png')} resizeMode = 'contain' style = {{
            width: 32,
            height: 32,
            tintColor: focused ? colors.primary : colors.secondary
          }}/>
        </View>
        )
      }}/>
      <Tab.Screen name = 'Mail' component = {MailScreen} options = {{
        tabBarIcon: ({focused}) => (<View style = {{alignItems: 'center', justifyContent: 'center', top: 10}}>
          <Image source = {require('./assets/icons/email.png')} resizeMode = 'contain' style = {{
            width: 32,
            height: 32,
            tintColor: focused ? colors.primary : colors.secondary
          }}/>
        </View>
        )
      }}/>
      <Tab.Screen name = 'Bookmarked' component = {BookmarkedScreen} options = {{
        tabBarIcon: ({focused}) => (<View style = {{alignItems: 'center', justifyContent: 'center', top: 10}}>
          <Image source = {require('./assets/icons/bookmark.png')} resizeMode = 'contain' style = {{
            width: 32,
            height: 32,
            tintColor: focused ? colors.primary : colors.secondary
          }}/>
        </View>
        )
      }}/>
    </Tab.Navigator>
  )
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = 'TabNavigator' component = {TabNavigator} options = {{headerShown: false}}/>
        <Stack.Screen name = 'AboutUs' component = {AboutUsScreen} options = {{headerShown: false}}/>
        <Stack.Screen name = 'IndividualMail' component = {IndividualMailScreen} options = {{headerShown: false}}/>
        <Stack.Screen name = 'Volunteering' component = {VolunteeringScreen} options = {{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create ({
  tabBar: {
    bordertopLeftRadius: 20,
    bordertopRightRadius: 20,
  }
})

export default App;

