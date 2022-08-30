import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import NavigatorScreen from './src/screens/NavigatorScreen';
import HomeScreen from './src/screens/HomeScreen';
import CreateScreen from './src/screens/CreateScreen';
import MenuScreen from './src/screens/MenuScreen';
import MailScreen from './src/screens/MailScreen';
import UserScreen from './src/screens/UserScreen';
import PostScreen from './src/screens/PostScreen';

const navigator = createStackNavigator ({
  Home: HomeScreen,
  Create: CreateScreen,
  Menu: MenuScreen,
  Mail: MailScreen,
  User: UserScreen,
  Post: PostScreen,
  Navigator: NavigatorScreen 
}, {
  initialRouteName: 'Navigator',
  defaultNavigationOptions: {
    header: null
  }
});

export default createAppContainer(navigator)
