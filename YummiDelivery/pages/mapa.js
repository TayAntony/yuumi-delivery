import { View, Text, TouchableOpacity, Image, ImageBackground, TextInput } from 'react-native'
import React, { useState } from 'react';

export default function Mapa({navigation}){
    return(
        <View style={{width: '100%', height: '100%', backgroundColor: 'white'}}>
            
            
            <View style={{width: '90%', height: 120, display: 'flex', flexDirection: 'row-reverse', justifyContent: 'space-around', alignItems: 'center'}}>
                <Text style={{fontSize: 18, fontWeight: 'bold', textAlign: 'center'}}>Acompanhe seu pedido!</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}> 
                    <Image style={{width: 60, height: 60}} source={require('../assets/botão voltar.svg')}></Image>
                </TouchableOpacity>
            </View>
        </View>
    )
}
