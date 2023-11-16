import { View, Text, TouchableOpacity, Image, ImageBackground, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Mapa({navigation}){
    // useEffect(() => {
    //     axios.get('http://nominatim.openstreetmap.org/reverse?', {lat: latitude, lon: longitude, addressdetails: 1, 'accept-language': 'pt-BR', zoom: 18})
    //     .then((res) => {
    //         console.log(res.data)
    //     })
    // })

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
