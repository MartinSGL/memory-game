import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import EasyScreen from '../screens/EasyScreen';
import HomeScreen from '../screens/HomeScreen';
import MediumScreen from '../screens/MediumScreen';
import HardScreen from '../screens/HardScreen';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="home" options={{title:'Memory Game'}} component={HomeScreen} />
        <Stack.Screen name="easy" component={EasyScreen} />
        <Stack.Screen name="medium" component={MediumScreen} />
        <Stack.Screen name="hard" component={HardScreen} />
    </Stack.Navigator>
  )
}

export default StackNavigator