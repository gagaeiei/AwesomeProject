import React, { useState } from "react";
import { Button, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Bmi() {    
        const [weight , setWeight] = useState('70');
        const [height , setHeight] = useState('170');
        const [bmi , setBmi] = useState('0');
        const [description,setDescription] = useState("");

        console.log("STATE : ", weight, height, bmi);
        
        const onPressButton = () => {
            console.log("Calculate button is pressed!!!");
            let output = (weight/ (height/100 * height/100));
            setBmi(output.toFixed(2));
            console.log(bmi)
            console.log(output)
        let description ="bmi";
            if (bmi<18.5)
                description = "Underweight - eat a bagel!";
            else if (bmi>=18.5 && bmi<=24.99)
                description = "Normal - keep it up!";
            else if (bmi>=25 && bmi<=29.99)
                description ="Overweight - execrise more!";
            else if (bmi>=30 && bmi<=39.99)
                description ="Obese - get off the couch!";
            else 
                description ="Morbidly Obese - take action!";
            setDescription(description);
        };





    return (
        <View>
            {/* แถวที่ 1 */}
            <View style={{ padding:20,marginVertical:10, backgroundColor:'white', borderRadius:10, height:150, justifyContent: 'space-around', marginTop:20 }}>
                <Text>Weight (kg.)</Text>
                <TextInput 
                style={{fontSize:20}} 
                keyboardType="numeric" 
                placeholder="Input your weight" 
                value={ weight } 
                onChangeText={ (text) => setWeight(text) }
                />
            </View>
            {/* แถวที่ 2 */}
            <View style={{ padding:20,marginVertical:10, backgroundColor:'white', borderRadius:10, height:150, justifyContent: 'space-around', marginTop:20 }}>
                <Text>Height (cm.)</Text>
                <TextInput 
                style={{fontSize:20}} 
                keyboardType="numeric" 
                placeholder="Input your height"
                value={ height } 
                onChangeText={ (text) => setHeight(text) }
                 />
                 
            </View>
            {/* แถวที่ 3 */}
            <View style={{flexDirection : "row" , marginVertical:10}}>

                <View style={{flex:1, padding:10, backgroundColor:"white", borderRadius:10, height:100, justifyContent:"center", alignItems:"center", marginRight:10}}>
                    <Text>{bmi}</Text>
                </View>
                <View style={{flex:1, padding:10, backgroundColor:"white", borderRadius:10, height:100, justifyContent:"center", alignItems:"center", marginLeft:10}}>
                    <Text > {description}</Text>
                </View>
            </View>
            {/* แถวที่ 4 */}
            <TouchableOpacity onPress={onPressButton}>
                <View style={{padding: 20, backgroundColor: "black", borderRadius: 40 }}>
                <Text style={{ fontSize: 30, textAlign: "center", color: 'white' }}>
            Calculate
        </Text>
                </View>
            </TouchableOpacity>
                 
                  
        </View>
        
    );
}

            
                
           