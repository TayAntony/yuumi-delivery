import { View, Text, TouchableOpacity } from 'react-native'
import { Image } from 'react-native'

export default function TelaInicial({navigation}){
    return(
        <View style={{backgroundColor: 'white', width: '100%', alignItems: 'center', height: '100%'}}>
            <View style={{height: 530, justifyContent: 'center'}}>
                <Image style={{width: 173, height: 234}} source={require('../assets/logo com nome.svg')}></Image>
            </View>
            
            <View style={{height: 165, display: 'flex', justifyContent: 'space-between'}}>
                <TouchableOpacity onPress={() => navigation.navigate('Login Cliente')} style={{backgroundColor: '#5F5DEE', borderRadius: '4px', shadowColor: '#A1A1A1C2', shadowOffset: {width: 2, height: 2}, shadowRadius: 8, width: 328, height: 56, display: 'flex', justifyContent: 'center'}}>
                    <Text style={{color: 'white', textAlign: 'center', fontSize: 16}}>Sou cliente</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Login Transportador')} style={{backgroundColor: '#FFFFF', borderRadius: '4px', shadowColor: '#A1A1A1C2', shadowOffset: {width: 2, height: 2}, shadowRadius: 8, width: 328, height: 56, display: 'flex', justifyContent: 'center'}}>
                    <Text style={{color: '#5F5DEE',  textAlign: 'center', fontSize: 16}}>Sou transportador</Text>
                </TouchableOpacity>

                <Text style={{textAlign: 'center', fontSize: 12}}>Ao se registrar você concorda com os <Text style={{color: '#5F5DEE', fontWeight: 'bold'}}>termos de uso.</Text></Text>
            </View>
            
        </View>
    )
}
