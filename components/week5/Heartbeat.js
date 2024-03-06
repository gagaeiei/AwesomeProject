import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function Heartbeat() {    
    const [count,setCount] = useState(0);

    console.log("STATE: ", count);

    const onPressButton = () => {
        setCount(count + 1)
    }
    return (
        <View>
            <View style={{flexDirection:"row", padding:30, justifyContent:"space-around",marginVertical: 10}}>
                <View style={{flex:1, padding:20, justifyContent:"space-between",alignItems:"center"}}>
                </View>
            <TouchableOpacity onPress={onPressButton }>
                <FontAwesome name="heart" size={50} color="pink" ></FontAwesome>
            </TouchableOpacity>
            <View style={{flex:1, padding:10, justifyContent:"space-between"}}>
            <Text style={{fontSize:30 }}>{count}</Text>
            </View>

            </View>
        </View>
    );
}
