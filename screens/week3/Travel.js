import React from 'react';
import { ScrollView, Text,View } from 'react-native';
import Signup from '../../components/Section5.js/Signup';
import Card from '../../components/Section5.js/Card';
import Hotel from '../../components/Section5.js/Hotel';
import MyIcon from '../../components/Section5.js/MyIcon';
import Menu from '../../components/Section5.js/Menu';



export default function Travel() {
    return (
        <ScrollView>
            <View style={{ flex: 1, paddingTop : 50  }}>
                <Menu />
                <Card />
                <Hotel />
                <Signup />
               

               
                
                
            </View>
        </ScrollView>
    );
}
