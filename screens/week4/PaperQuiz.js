import React from "react";
import { Image, ScrollView, View } from "react-native";
import { Avatar,  Button,  Card,  Divider,  Icon,  IconButton,   MD3Colors} from "react-native-paper";

export default function PaperQuiz() {
  return (
    <ScrollView>
    <Card>
    <Card.Cover source={ require("../../assets/week3/room-6.jpg")} />
  </Card>
  <Card.Title
    title="Hilton San Francisco"
    subtitle="Facilities provided may range from a modest quality mattress in a small room to large suites"
      
      
   
  />
     
    </ScrollView>
  );
}
