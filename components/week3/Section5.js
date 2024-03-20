import React from "react";
import {  View} from "react-native";
import MyIcon from "./MyIcon";

export default function Section5() {
  return (
    <View style={{ margin : 1 , padding : 10,borderBottomWidth:0.5 }}>
      
      <View style={{ flexDirection : "row", marginTop : 10 }}>
        <MyIcon title="wifi" name="wifi" size={30} color="orange" />
        <MyIcon title="coffee" name="coffee" size={30} color="orange" />
        <MyIcon title="bath" name="bath" size={30} color="orange" />
        <MyIcon title="car" name="car" size={30} color="orange" />
        <MyIcon title="paw" name="paw" size={30} color="orange" />
      </View>
    </View>
  );
}
