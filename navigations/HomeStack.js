import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/week6/Home';
import Ex02 from '../screens/week2/Ex02';
import Ex01 from '../screens/week2/Ex01';


const Stack = createStackNavigator();

export default function HomeStack() {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
                name="Home"
                component={Home}
                options={{ title: "Home" , headerShown: false}}
            />

          <Stack.Screen
            name="Ex01"
            component={Ex01}
            options={{ title: "Exercise 1" }}
          />      
          <Stack.Screen
            name="Ex02"
            component={Ex02}
            options={{ title: "Exercise 2" }}
          />
        </Stack.Navigator>
      );
    
}