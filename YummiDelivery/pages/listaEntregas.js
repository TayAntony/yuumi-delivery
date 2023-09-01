import { View, Text, TouchableOpacity, TextInput, Image } from 'react-native'

export default function ListaEntregas({navigation}){
    return(
        <View style={{width: '100%', height: '100%', backgroundColor: 'white'}}>
            <View style={{width: '65%', height: 120, display: 'flex', flexDirection: 'row-reverse', justifyContent: 'space-between', alignItems: 'center'}}>
                <Text style={{fontSize: 18, fontWeight: 'bold', textAlign: 'center'}}>Últimos pedidos</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Home Transportador')}> 
                    <Image style={{width: 60, height: 60}} source={require('../assets/botão voltar.svg')}></Image>
                </TouchableOpacity>
            </View>

            
            <View style={{marginHorizontal: 24}}>
                <View style={{borderRadius: 4, borderWidth: 1, borderColor: '#F4F4F4', width: 326, height: 80, display: 'flex', flexDirection: 'row',  shadowColor: 'rgba(0, 0, 0, 0.16)', shadowOffset: { width: 1, height: 1 }, shadowOpacity: 1, shadowRadius: 1, elevation:1, marginVertical: 8 }}>
                    <Image style={{width: 80, height: 80}} source={require('../assets/restaurante1.png')}></Image>
                    
                        <View style={{display: 'flex', justifyContent: 'space-around', height: 82, }}>
                            <View style={{display: 'flex', flexDirection: 'row', width: 225, justifyContent: 'space-between', marginLeft: 5}}>
                                <Text style={{fontSize: 16, fontWeight: 500}}>CÓDIGO DE RASTREIO</Text>
                            </View>
                            
                            <View style={{display: 'flex', flexDirection: 'row', width: 225, justifyContent: 'space-between', marginLeft: 5  }}>
                                <Text style={{fontSize: 14, fontWeight: 400}}>Status do pedido: </Text>
                                <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 8}}>
                                    <View style={{backgroundColor:  "#7DF056", width: 10, height: 10, borderRadius: "50%"}}>
                                    </View>
                                    <Text>
                                        Entregue
                                    </Text>
                                </View>
                                
                            </View>
                        </View>
                    
                </View>
                <View style={{borderRadius: 4, borderWidth: 1, borderColor: '#F4F4F4', width: 326, height: 80, display: 'flex', flexDirection: 'row',  shadowColor: 'rgba(0, 0, 0, 0.16)', shadowOffset: { width: 1, height: 1 }, shadowOpacity: 1, shadowRadius: 1, elevation:1, marginVertical: 8 }}>
                    <Image style={{width: 80, height: 80}} source={require('../assets/restaurante1.png')}></Image>
                    
                        <View style={{display: 'flex', justifyContent: 'space-around', height: 82, }}>
                            <View style={{display: 'flex', flexDirection: 'row', width: 225, justifyContent: 'space-between', marginLeft: 5}}>
                                <Text style={{fontSize: 16, fontWeight: 500}}>CÓDIGO DE RASTREIO</Text>
                            </View>
                            
                            <View style={{display: 'flex', flexDirection: 'row', width: 225, justifyContent: 'space-between', marginLeft: 5  }}>
                                <Text style={{fontSize: 14, fontWeight: 400}}>Status do pedido: </Text>
                                <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 8}}>
                                    <View style={{backgroundColor:  "#7DF056", width: 10, height: 10, borderRadius: "50%"}}>
                                    </View>
                                    <Text>
                                        Entregue
                                    </Text>
                                </View>
                                
                            </View>
                        </View>
                    
                </View>
            </View>
            
        </View>

    )
}
