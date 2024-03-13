import React from "react";
import { Image, Text, View } from "react-native";

export default function TourItem(props) {
    return (
        <View style={{ marginRight: 10 }}>
            <Image style={{ flex: 1, resizeMode: "cover", width: Dimensions.get("screen").width / 2.0, height: 200, borderRadius: 10 }} source={{ uri: item.uri }}>
            </Image>
            <View style={{
                marginTop: -30, height: 30, width: 200, paddingHorizontal: 10, backgroundColor: 'black', opacity: 0.5, borderBottomLeftRadius: 10, borderBottomRightRadius: 10
            }}>
                <Text style={{ fontSize: 20, color: "white" }}> {item.title}</Text>
            </View>
        </View>
    );
}
