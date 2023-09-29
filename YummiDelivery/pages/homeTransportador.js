import axios from 'axios'
import { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, TextInput, Image } from 'react-native'

export default function HomeTransportador({navigation}){
    const dados_usuario = JSON.parse(localStorage.getItem('dados_usuario'))
    
    const [pedidos, setPedidos] = useState([])
    const token = JSON.parse(localStorage.getItem('token'))
    
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/loja/pedidos/', { headers: { Authorization: `JWT ${token.data.access}`}})
        .then((res_lista_pedidos) => {     
            let lista = []
            lista = res_lista_pedidos.data
    
            let lista_pedidos_entregador_atual = []
            
            lista.map((pedido) => {
                if (pedido.nome_do_entregador == dados_usuario.nome){
                    lista_pedidos_entregador_atual.push(pedido)
                }           
            })
    
            setPedidos(lista_pedidos_entregador_atual)
        })    
    }, [])
   
    return(
        <View style={{width: '100%', height: '100%', backgroundColor: 'white'}}>
            <View style={{height: 200, backgroundColor: '#D8CEFB', paddingHorizontal: 24}}>
                <View style={{height: 80, justifyContent: 'space-between', width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                    <Image source={require('../assets/logo branca.svg')}style={{width: 48, height: 48}}></Image>
                    <Text style={{fontSize: 20, fontWeight: 'bold'}}>Olá, <Text style={{color: '#5635CC'}}>{dados_usuario.nome}!</Text></Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Página Inicial')}> 
                        <Image style={{width: 24, height: 24}} source={require('../assets/logout.png')}></Image>
                    </TouchableOpacity> 
                </View>

                <View style={{alignItems: 'center'}}>
                    <Text style={{fontSize: 16, color: '#969696', fontWeight: '600', textAlign: 'center'}}>Acompanhe seus envios e confirme suas entregas!</Text>
                    
                </View>
            </View>

            
            <View style={{marginHorizontal: 24}}>
                <Text style={{fontSize: 24, marginVertical: 16}}>Entregas da semana!</Text>
            {pedidos.length > 0 ? pedidos.map((item) => 
             <View style={{borderRadius: 4, borderWidth: 1, borderColor: '#F4F4F4', width: 326, height: 80, display: 'flex', flexDirection: 'row',  shadowColor: 'rgba(0, 0, 0, 0.16)', shadowOffset: { width: 1, height: 1 }, shadowOpacity: 1, shadowRadius: 1, elevation:1, marginVertical: 8 }}>
                <Image style={{width: 80, height: 80}} source={require('../assets/restaurante1.png')}></Image>
                
                    <View style={{display: 'flex', justifyContent: 'space-around', height: 82, }}>
                        <View style={{display: 'flex', flexDirection: 'row', width: 225, justifyContent: 'space-between', marginLeft: 5}}>
                            <Text style={{fontSize: 16, fontWeight: 500}}>{item.codigo_rastreio}</Text>
                        </View>
                        
                        <View style={{display: 'flex', flexDirection: 'row', width: 225, justifyContent: 'space-between', marginLeft: 5  }}>
                            <Text style={{fontSize: 14, fontWeight: 400}}>Status do pedido: </Text>
                            <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 8}}>
                                <View style={item.status_pedido == 'T' ? {backgroundColor: '#FCFE9A',  width: 10, height: 10, borderRadius: "50%"} : {backgroundColor: 'green',  width: 10, height: 10, borderRadius: "50%"}}>
                                </View>
                                <Text>
                                {item.status_pedido == 'T' ? 'Transporte' : 'Entregue'}
                                </Text>
                            </View>
                            
                        </View>
                    </View>
             </View>
            ): null}
               
                

                <TouchableOpacity onPress={() => navigation.navigate('Lista de Entregas')}> 
                        <Image style={{width: 24, height: 24}} source={require('../assets/logout.png')}></Image>
                    </TouchableOpacity> 
                
            </View>
            
        </View>

    )
}
