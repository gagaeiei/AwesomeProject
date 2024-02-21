import React from 'react';
import { Button,  Text, View } from 'react-native';

export default function Section8() {
    return (
        <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 10 }}>
            <View style={{ flexDirection: "column",paddingLeft: 10  }}>
            <Text style={{ fontSize: 15 }}>Price</Text>
            <Text style={{ color: "red",fontSize: 20 }}>$399.99</Text>
            <Text style={{ color: "blue",fontSize: 15 }}>AVG/night</Text>
            </View>
            <View style={{justifyContent:'center'}}>
                <Button title="Book now" color="red" />
            </View>
        </View>
    );
}