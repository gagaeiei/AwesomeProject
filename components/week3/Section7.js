import React from 'react';
import { Image, Text, View } from 'react-native';

export default function Section7() {
    return (
        <View style={{ padding : 10  ,borderBottomWidth:0.5}}>
             <Text style={{ fontSize: 20 }}>Room Type</Text>
            {/* View ก้อนที่ 1  */}
            <View style={{ flexDirection: "row", padding: 10 }}>
                <Image style={{ width: 60, height: 70, borderRadius: 10 }} source={require("../../assets/week3/room-1.jpg")} />
                <View style={{ paddingLeft: 10 }}>
                    <Text style={{ fontSize: 20 }}>Standard Twin Room</Text>
                    <Text style={{ color: "red",fontSize: 20 }}>$399.99</Text>
                    <Text style={{ color: "blue",fontSize: 10 }}>Hurry Up! This is your last room!</Text>
                </View>
            </View>
            
        </View>    
    );
}