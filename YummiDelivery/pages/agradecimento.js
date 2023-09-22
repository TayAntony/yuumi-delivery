import { View, Text, TouchableOpacity, Image, ImageBackground, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Agradecimento({navigation}){
    const dados_usuario = JSON.parse(localStorage.getItem('dados_usuario'))
    
    useEffect(() => {
        let lista_transportadores = []
        const token = JSON.parse(localStorage.getItem('token'))
        axios.get('http://127.0.0.1:8000/loja/clientes/', { headers: { Authorization: `JWT ${token.data.access}`}})
        .then((res_lista_clientes) => {
            let lista = []
            lista.push(res_lista_clientes.data)
            
            lista.map((cliente) => {
                if (cliente.transportador == true){
                    lista_transportadores.push(cliente.nome)
                }
            })
        })

        let transportador_sorteado = lista_transportadores[Math.floor(Math.random() * lista_transportadores.length)]
        axios.post('http://127.0.0.1:8000/loja/clientes', {nome_do_entregador: transportador_sorteado, cliente: dados_usuario.nome, codigo_rastreio: 10923,}, { headers: { Authorization: `JWT ${token.data.access}`}})
        .then((res) => {
            
        })
        
        localStorage.setItem('carrinho', '[]')
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
