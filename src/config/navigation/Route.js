import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';


import colors from '../../themes/colors';
import HomeTabNav from './HomeTabNav';
import Home from '../../screens/home/Home';
import Profile from '../../screens/profile/Profile';
import Chat from '../../screens/chat/Chat';
import Menu from '../../screens/menu/Menu';


const Stack = createNativeStackNavigator();

const Route = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={HomeTabNav}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{headerShown: false}}

        />
            <Stack.Screen
          name="Chat"
          component={Chat}
          options={{headerShown: false}}

        />
            <Stack.Screen
          name="Menu"
          component={Menu}
          options={{headerShown: false}}

        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Route;