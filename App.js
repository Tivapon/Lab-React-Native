import React from 'react';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ZipCodeScreen from './components/Screen/ZipCodeScreen';
import WeatherScreen from './components/Screen/WeatherScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={ZipCodeScreen}/>
        <Stack.Screen name="Weather" component={WeatherScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}