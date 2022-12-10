import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import BottomNavigator from '../components/BottomNavigator'

const NavigatorScreen = () => {
    return <NavigationContainer>
        <BottomNavigator />
    </NavigationContainer>
}

export default NavigatorScreen