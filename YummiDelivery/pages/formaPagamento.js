import { View, Text, TouchableOpacity, Image, ImageBackground, TextInput } from 'react-native'
import { RadioButton } from 'react-native-paper';
import React, { useState} from 'react';

export default function FormaPagamento({navigation}){
    const [selectedOption, setSelectedOption] = useState('');

    const options = [
        {
          label: 'Débito',
          description: '5% de desconto',
        },
        {
          label: 'Crédito',
          description: 'Parcele em até 5x',
        },
        {
          label: 'Boleto',
          description: 'Pague em 3 dias úteis',
        },
      ];

    return(
        <View style={{width: '100%', height: '100%', backgroundColor: 'white'}}>
            <ImageBackground style={{width: 388, height: 320}} source={require('../assets/pagamento.svg')}>
            
            <View style={{width: '70%', height: 120, display: 'flex', flexDirection: 'row-reverse', justifyContent: 'space-between', alignItems: 'center'}}>
                <Text style={{fontSize: 18, fontWeight: 'bold', textAlign: 'center'}}>Forma de pagamento</Text>

                <TouchableOpacity onPress={() => navigation.navigate("Adicionar Endereco")}> 
                    <Image style={{width: 60, height: 60}} source={require('../assets/botão voltar.svg')}>
                    </Image>
                </TouchableOpacity>
            </View>
            
            <View style={{height: 220}}></View>
            
            <View style={{width: '100%', alignItems: 'center'}}>
                <View style={{width: 328, height: "auto", backgroundColor: '#FBFBFB', borderWidth: 2, borderColor: '#ECECEC', borderRadius: 4, alignItems: 'center', paddingVertical: '16px'}}>
                    <View style={{margin: 10}}>
                        <Text style={{fontSize: 16, marginBottom: 12}}>Escolha a melhor forma de pagamento.</Text>

                        <View style={{ marginTop: 24 }}>
                            {options.map((option, index) => (
                            <View key={index} style={{ backgroundColor: index % 2 === 0 ? '#F4F4F4' : '#FBFBFB', flexDirection: 'row', gap: 8, height: 44, alignItems: 'center', justifyContent: 'space-between'}}>
                                <RadioButton
                                value={option.label}
                                status={selectedOption === option.label ? 'checked' : 'unchecked'}
                                onPress={() => setSelectedOption(option.label)}/>
                                <View style={{display: 'flex', flexDirection: 'row', gap:24, justifyContent: 'space-between', width: '75%' }}>
                                    <Text style={{ fontWeight: '700', color: '#5635CC' }}>{option.label}</Text>
                                    <Text style={{ fontWeight: 'normal', color: '#000'}}>{option.description}</Text>
                                </View>
                            </View>))}

                        </View>
                    </View>
                </View>
            </View>        
            <View style={{width: '100%', display: 'flex', justifyContent: 'space-evenly', flexDirection: 'row', alignItems: 'center', marginTop: 24}}>
                    <TouchableOpacity style={{borderRadius: 4, backgroundColor: '#5F5DEE', width: 212, justifyContent: 'center', height: 50, width: '85%'}} onPress={() => navigation.navigate('Agradecimento')}>
                        <Text style={{fontSize: 16, color: 'white', textAlign: 'center', fontWeight: 'bold'}}>Finalizar compra</Text>
                    </TouchableOpacity>
            </View>
            </ImageBackground>
           
            
        </View>
    )
}
