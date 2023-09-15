import { View, Text, TouchableOpacity, Image, ImageBackground, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react';

export default function Agradecimento({navigation}){
    
    useEffect(() => {
        localStorage.setItem('carrinho', [])
    }, [])
    
    return(
        <View style={{width: '100%', height: '100%', backgroundColor: 'white'}}>
            <ImageBackground style={{width: 388, height: 320}} source={require('../assets/agradecimento.svg')}>
            
            <View style={{width: '70%', height: 120, display: 'flex', flexDirection: 'row-reverse', justifyContent: 'space-around', alignItems: 'center'}}>
                <Text style={{fontSize: 18, fontWeight: 'bold', textAlign: 'center'}}>Parabéns</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}> 
                    <Image style={{width: 60, height: 60}} source={require('../assets/botão voltar.svg')}></Image>
                </TouchableOpacity>
            </View>
            
            <View style={{height: 220}}></View>

            <Text style={{fontSize: 24, color: '#5635cc', marginLeft: 32, fontWeight: 600}}>
                Compra feita com sucesso!
            </Text>
            <Text style={{fontSize: 16, color: '#969696', marginLeft: 32}}>
                Seu pedido chegará em até 10 dias úteis.
            </Text>
            
            <View style={{marginTop: 220}}>
                <Text style={{textAlign: 'left', fontSize: 12, marginLeft: 32}}>Caso tenha alguma dúvida ou problema, <Text style={{color: '#5F5DEE', fontWeight: 'bold'}}>fale conosco!</Text></Text>
                <View style={{width: '100%', display: 'flex', justifyContent: 'space-evenly', flexDirection: 'row', alignItems: 'center', marginTop: 8}}>
                        <TouchableOpacity style={{borderRadius: 4, backgroundColor: '#5F5DEE', width: 212, justifyContent: 'center', height: 50, width: '85%'}} onPress={() => navigation.navigate('Mapa')}>
                            <Text style={{fontSize: 16, color: 'white', textAlign: 'center', fontWeight: 'bold'}}>Ver mapa</Text>
                        </TouchableOpacity>
                </View>
            </View>
            </ImageBackground>
           
            
        </View>
    )
}
