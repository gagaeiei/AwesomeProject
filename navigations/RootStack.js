import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import BottomTab from "./BottomTab";
import PokemonTab from "./PokemonTab";
import Travel from "../screens/week3/Travel";
import Resort from "../screens/week3/Resort";

const Stack = createStackNavigator();

export default function RootStack() {
  return (
    <Stack.Navigator initialRouteName="BottomTab">
      <Stack.Screen name="BottomTab" component={BottomTab} options={{ headerShown: false }} />
      <Stack.Screen name="PokemonTab" component={PokemonTab} options={{ title : "Pokemon World" }}  />
      <Stack.Screen name="Travel" component={Resort} options={{ title : "Travel" }}  />
    </Stack.Navigator>
  );
}
