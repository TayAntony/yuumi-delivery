import axios from 'axios'
import { LinearGradient } from 'expo-linear-gradient'
import { useState } from 'react'
import { View, Text, TouchableOpacity, TextInput, ImageBackground } from 'react-native'

export default function LoginTransportador({navigation}){
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    function logar(){
        axios.post('http://127.0.0.1:8000/auth/jwt/create', {email: email, password: senha})
        .then((token_criado_create) => {
            alert('Seja bem-vindo/a de volta!')
            axios.get('http://127.0.0.1:8000/loja/clientes/', {headers: { Authorization: `JWT ${token_criado_create.data.access}`}})
            .then((res) => {
                let lista = []
                let dados_usuario = ''
                lista.push(res.data)
                lista[0].map((item) => {
                    if (item.email == email && item.transportador == true){
                        dados_usuario = item
                    }
                })
                
                localStorage.setItem('dados_usuario', JSON.stringify(dados_usuario))
                navigation.navigate("Home Transportador")
            })
        })
    }
    
    return(
            <ImageBackground style={{width: '100%', height: '100%', alignItems: 'center'}} source={require('../assets/image 16.svg')}>
                <View style={{height: 400}}></View>

                <View style={{display: 'flex', height: 90, justifyContent: 'space-between'}}>
                    <TextInput onChangeText={(e) => setEmail(e)} placeholder='E-mail' style={{width: 328, padding: 8, color: '#C9C9C9', borderRadius: 4, borderWidth: 1, borderColor: '#F4F4F4', backgroundColor: '#FBFBFB', fontSize: 16}}></TextInput>
                    <TextInput secureTextEntry={true} onChangeText={(e) => setSenha(e)} placeholder='Senha' style={{width: 328, padding: 8, color: '#C9C9C9', borderRadius: 4, borderWidth: 1, borderColor: '#F4F4F4', backgroundColor: '#FBFBFB', fontSize: 16}}></TextInput>
                </View>
                
                <View style={{width: '80%', height: 50, justifyContent: 'center'}}>
                    <Text style={{fontWeight: 'bold', color: '#5F5DEE', fontSize: 12, marginLeft: 'auto'}}>Esqueci a senha</Text>
                </View>
                
                <View style={{height: 20}}/>
                
                <View style={{height: 80, display: 'flex', justifyContent: 'space-between'}}>
                    <TouchableOpacity style={{backgroundColor: '#5F5DEE', borderRadius: '4px', shadowColor: '#A1A1A1C2', shadowOffset: {width: 2, height: 2}, shadowRadius: 8, width: 328, height: 56, display: 'flex', justifyContent: 'center'}}>
                        <Text onPress={() => logar()} style={{color: 'white', textAlign: 'center', fontSize: 16}}>Logar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('Login Cliente')}>
                        <Text style={{fontSize: 12, color: '#5F5DEE', fontWeight: 'bold'}}>Sou cliente!</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
    )
}
