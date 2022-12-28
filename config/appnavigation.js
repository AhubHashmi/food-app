// In App.js in a new project

import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from '../screens/splashscreen';
import Home from '../screens/home';
import Login from '../screens/login';
import SignUp from '../screens/signup';
import Profile from '../screens/profile';
import RegisterVehicle from '../screens/registervehicle';
import Booking from '../screens/booking';
import AddBooking from '../screens/addBooking';
import Vehicle from '../screens/vehicle';

const Stack = createNativeStackNavigator();

function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Splash"
          component={Splash}
        />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="RegisterVehicle" component={RegisterVehicle} />
        <Stack.Screen name="Booking" component={Booking} />
        <Stack.Screen name="AddBooking" component={AddBooking} />
        <Stack.Screen name="Vehicle" component={Vehicle} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;
