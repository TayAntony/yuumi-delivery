import axios from 'axios'
import { useState } from 'react'
import { View, Text, TouchableOpacity, TextInput, ImageBackground } from 'react-native'

export default function CadastroCliente({navigation}){
    const [nome, setNome] = useState('')
    const [cpf, setCpf] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    function criar_conta(){
        axios.post('http://127.0.0.1:8000/auth/users/', { email: email, password: senha})
        .then((res) => {
            axios.post('http://127.0.0.1:8000/auth/jwt/create/', {email: email, password: senha})
            .then((token_criado_create) => {
                localStorage.setItem('token', JSON.stringify(token_criado_create))
                axios.post('http://127.0.0.1:8000/loja/clientes/', {nome: nome, cpf: cpf, email: email, senha: senha, transportador: false}, {headers: { Authorization: `JWT ${token_criado_create.data.access}`}})
                .then((res_conta_criada_com_sucesso) => {
                    alert('A sua conta foi criada com sucesso!')
                    localStorage.setItem('dados_usuario', JSON.stringify(res_conta_criada_com_sucesso.data))
                    navigation.navigate('Home')
                })
            })
        })
        .catch((error) => {
            if (error.response) {
              // O servidor retornou um status de resposta diferente de 2xx
              console.error(error.response.data.message);
            } 
          });
    }
    
    return(
            <ImageBackground style={{width: '100%', height: '100%', alignItems: 'center'}} source={require('../assets/image 16.svg')}>
                <View style={{height: 330}}></View>

                <View style={{display: 'flex', height: 180, justifyContent: 'space-between'}}>
                    <TextInput onChangeText={(e) => setNome(e)} placeholder='Nome' style={{width: 328, padding: 8, color: '#C9C9C9', borderRadius: 4, borderWidth: 1, borderColor: '#F4F4F4', backgroundColor: '#FBFBFB', fontSize: 16}}></TextInput>
                    <TextInput onChangeText={(e) => setCpf(e)} placeholder='CPF' style={{width: 328, padding: 8, color: '#C9C9C9', borderRadius: 4, borderWidth: 1, borderColor: '#F4F4F4', backgroundColor: '#FBFBFB', fontSize: 16}}></TextInput>
                    <TextInput onChangeText={(e) => setEmail(e)} placeholder='E-mail' style={{width: 328, padding: 8, color: '#C9C9C9', borderRadius: 4, borderWidth: 1, borderColor: '#F4F4F4', backgroundColor: '#FBFBFB', fontSize: 16}}></TextInput>
                    <TextInput onChangeText={(e) => setSenha(e)} placeholder='Senha' style={{width: 328, padding: 8, color: '#C9C9C9', borderRadius: 4, borderWidth: 1, borderColor: '#F4F4F4', backgroundColor: '#FBFBFB', fontSize: 16}}></TextInput>
                </View>
                
                <View style={{width: '80%', height: 50}}></View>
                
                <View style={{height: 165, display: 'flex', justifyContent: 'space-between'}}>
                    <TouchableOpacity onPress={() => criar_conta()} style={{backgroundColor: '#5F5DEE', borderRadius: '4px', shadowColor: '#A1A1A1C2', shadowOffset: {width: 2, height: 2}, shadowRadius: 8, width: 328, height: 56, display: 'flex', justifyContent: 'center'}}>
                        <Text style={{color: 'white', textAlign: 'center', fontSize: 16}}>Cadastrar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('Login Cliente')} style={{backgroundColor: '#FFFFF', borderRadius: '4px', shadowColor: '#A1A1A1C2', shadowOffset: {width: 2, height: 2}, shadowRadius: 8, width: 328, height: 56, display: 'flex', justifyContent: 'center'}}>
                        <Text style={{color: 'white',  textAlign: 'center', fontSize: 16}}>Já possuo conta!</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity onPress={() => navigation.navigate('Login Transportador')}>
                        <Text style={{fontSize: 12, color: '#5F5DEE', fontWeight: 'bold'}}>Sou transportador!</Text>    
                    </TouchableOpacity>
                </View>
            </ImageBackground>
    )
}
