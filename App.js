import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomTab from './navigations/BottomTab';
import RootStack from './navigations/RootStack';





export default function App() {
  return (
  

    <NavigationContainer>
        <RootStack />
</NavigationContainer>


  );
}