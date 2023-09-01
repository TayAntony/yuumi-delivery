import { View, Text, TouchableOpacity, Image, ImageBackground, TextInput } from 'react-native'
import { RadioButton } from 'react-native-paper';
import React, { useState } from 'react';
import axios from 'axios';

export default function AdicionarEndereco({navigation}){
    const [selectedOption, setSelectedOption] = useState('');
    const [prazoPac, setPrazoPac] = useState('?')
    const [valorPac, setValorPac] = useState('?')
    const [prazoSedex, setPrazoSedex] = useState('?')
    const [valorSedex, setValorSedex] = useState('?')
    const [cep, setCep] = useState('')

    function calcular_frete(){
        axios.get(`https://www.cepcerto.com/ws/json-frete/13036210/${cep}/500`)
        .then((res) => {
            console.log(res.data)
            setPrazoPac(res.data.prazopac)
            setValorPac(res.data.valorpac)
            setPrazoSedex(res.data.prazosedex)
            setValorSedex(res.data.valorSedex)
        })
    }

    const [options, setOptions] = useState( [
        {
          label: 'PAC',
          description: `Até ${prazoPac} dias úteis!`,
          price: `R$ ${valorPac}`,
        },
        {
          label: 'Sedex',
          description: `Até ${prazoSedex} dias úteis`,
          price: `R$ ${valorSedex}`,
        },
      ]);

    return(
        <View style={{width: '100%', height: '100%', backgroundColor: 'white'}}>
            <ImageBackground style={{width: 388, height: 320}} source={require('../assets/icone_mapa.svg')}>
            
            <View style={{width: '70%', height: 120, display: 'flex', flexDirection: 'row-reverse', justifyContent: 'space-between', alignItems: 'center'}}>
                <Text style={{fontSize: 18, fontWeight: 'bold', textAlign: 'center'}}>Adicionar Endereço</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Carrinho')}> 
                    <Image style={{width: 60, height: 60}} source={require('../assets/botão voltar.svg')}></Image>
                </TouchableOpacity>
            </View>
            
            <View style={{height: 220}}></View>
            
            <View style={{width: '100%', alignItems: 'center'}}>
                <View style={{width: 328, height: "auto", backgroundColor: '#FBFBFB', borderWidth: 2, borderColor: '#ECECEC', borderRadius: 4, alignItems: 'center', paddingVertical: '16px'}}>
                    <View style={{margin: 10}}>
                        <Text style={{fontSize: 16, marginBottom: 12}}>Calcule o frete e o prazo de entrega estimados para a sua região. </Text>
                        <View style={{display: 'flex', flexDirection: 'row',justifyContent: 'space-between'}}>
                            <TextInput onChangeText={(e) => setCep(e)} style={{paddingLeft: 8, backgroundColor: '#F4F4F4'}} placeholder='Digite seu CEP...'></TextInput>
                            <TouchableOpacity onPress={() => calcular_frete()} style={{backgroundColor: 'white', width: 120, height: 40, justifyContent: 'center', shadowColor: '#A1A1A1C2', shadowOffset: {width: 2, height: 2}, shadowRadius: 8, borderRadius: 4}}><Text style={{fontSize: 16, textAlign: 'center', color: '#5F5DEE', fontWeight: 'bold', }}>Calcular</Text></TouchableOpacity>
                        </View>

                        <View style={{ marginTop: 24 }}>
                            {options.map((option, index) => (
                            <View key={index} style={{ backgroundColor: index % 2 === 0 ? '#F4F4F4' : '#FBFBFB', flexDirection: 'row', gap: 8, height: 44, alignItems: 'center', justifyContent: 'center' }}>
                                <RadioButton
                                value={option.label}
                                status={selectedOption === option.label ? 'checked' : 'unchecked'}
                                onPress={() => setSelectedOption(option.label)}
                                style={{justifyContent: 'left'}}/>
                                <Text style={{ fontWeight: '700', color: '#5635CC' }}>{option.label}</Text>

                                <Text style={{ fontWeight: 'normal', color: '#000' }}>{option.description}</Text>

                                <Text style={{ fontWeight: '700', color: '#5F5DEE' }}>{option.price}</Text>
                            </View>))}
                        </View>
                    </View>
                </View>
            </View>        
            <View style={{width: '100%', display: 'flex', justifyContent: 'space-evenly', flexDirection: 'row', alignItems: 'center', marginTop: 24}}>
                    <TouchableOpacity style={{borderRadius: 4, backgroundColor: '#5F5DEE', width: 212, justifyContent: 'center', height: 50, width: '85%'}} onPress={() => navigation.navigate('Forma de Pagamento')}>
                        <Text style={{fontSize: 16, color: 'white', textAlign: 'center', fontWeight: 'bold'}}>Pagamento</Text>
                    </TouchableOpacity>
            </View>
            </ImageBackground>
           
            
        </View>
    )
}
