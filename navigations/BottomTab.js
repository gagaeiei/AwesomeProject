import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ant from '../screens/week7/Ant';
import { FontAwesome } from '@expo/vector-icons';
import Bird from '../screens/week7/Bird';
import Cat from '../screens/week7/Cat';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import HomeStack from './HomeStack';

const Tab = createBottomTabNavigator();

export default function BottomTab() {
    return (
        <Tab.Navigator screenOptions={{ tabBarActiveTintColor: 'tomato', tabBarInactiveTintColor: 'gray' }}>
          <Tab.Screen
            name="HomeStack"
            component={HomeStack}
            options={{
              tabBarLabel: "หน้าหลัก",
              tabBarIcon: ({ color, size }) => ( <FontAwesome name="home" color={color} size={size} /> ),
              headerShown : false,
            }}
          />
          <Tab.Screen
            name="Ant"
            component={Ant}
            options={{
              tabBarLabel: "มด",
              tabBarIcon: ({ color, size }) => ( <FontAwesome name="bug" color={color} size={size} /> ),
            }}
          />
          <Tab.Screen
            name="Bird"
            component={Bird}
            options={{
              tabBarLabel: "นก",
              tabBarIcon: ({ color, size }) => ( <MaterialCommunityIcons name="bird" size={24} color="black" /> ),
            }}
          />
          <Tab.Screen
            name="Cat"
            component={Cat}
            options={{
              tabBarLabel: "แมว",
              tabBarIcon: ({ color, size }) => ( <FontAwesome6 name="cat" size={24} color="black" /> ),
            }}
          />
        </Tab.Navigator>
      );
    

}
