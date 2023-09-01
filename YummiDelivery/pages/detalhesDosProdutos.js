import { useRoute } from '@react-navigation/native'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, Image, ImageBackground } from 'react-native'

export default function DetalhesDosProdutos({navigation}){
    const [produto, setProduto] = useState([])
    const [quantidade, setQuantidade] = useState(0)
    const [totalProduto, setTotalProduto] = useState(0)
    const route = useRoute()
    const id = route.params.id
    
    function salvar_no_carrinho(produto){
        let item = [{ 'id': produto.id,'nome':produto.nome, 'qtd': quantidade, 'foto': produto.foto, 'preco': produto.preco }]
        
        if (localStorage.getItem('carrinho') != undefined) {
            let itens = JSON.parse(localStorage.getItem('carrinho'))
            itens = itens.concat(item)
            localStorage.setItem('carrinho', JSON.stringify(itens))
        }
        else{
            let itens = item
            localStorage.setItem('carrinho', JSON.stringify(itens))
        }
    }

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/loja/produtos/${id}/`)
        .then((res) => {
            let a = []
            a.push(res.data)
            setProduto(a)
        })
    }, [])
    return(
        <View style={{width: '100%', height: '100%', backgroundColor: 'white'}}>

        {produto.length > 0 ? produto.map((item) => (
            <View key={item.id}>
                <ImageBackground style={{width: '100%', height: 450, marginTop: -20}} source={item.foto}>
                    <View style={{width: '60%', height: 120, display: 'flex', flexDirection: 'row-reverse', justifyContent: 'space-between', alignItems: 'center'}}>
                        <Text style={{fontSize: 18, fontWeight: 'bold', textAlign: 'center'}}>{item.nome}</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Home')}> 
                            <Image style={{width: 60, height: 60}} source={require('../assets/botão voltar.svg')}></Image>
                        </TouchableOpacity>
                    </View>
                
                    <View style={{height: 300, justifyContent: 'flex-end'}}>
                        <View style={{backgroundColor: '#5F5DEE', width: 100, marginBottom: 20, marginLeft: 'auto', borderBottomLeftRadius: 10, borderTopLeftRadius: 10}}>
                            <Text style={{padding: 10, fontSize: 20, fontWeight: 'bold', color: 'white'}}>R$ {item.preco}</Text>
                        </View>
                    </View>

                </ImageBackground>

                <View style={{width: '100%', alignItems: 'center', height: 200}}>
                    <Text style={{textAlign: 'center', alignItems: 'center', width: 328, fontSize: 16}}>{item.descricao}</Text>
                </View>

                <View style={{width: '100%', height: 10, borderTopWidth: 2, borderColor: '#E0E0E0'}}></View>

                <View style={{width: '100%', height: 50}}>
                    <Text style={{width: 150, fontSize: 16, fontWeight: 'bold', marginLeft: 'auto'}}>Total: R$ {parseFloat(totalProduto).toFixed(2)}</Text>
                </View>

                <View style={{width: '100%', display: 'flex', justifyContent: 'space-evenly', flexDirection: 'row', alignItems: 'center'}}>
                    <View style={{display: 'flex', width: 150, flexDirection: 'row', justifyContent: 'space-evenly'}}>
                        <TouchableOpacity onPress={() => (setQuantidade(quantidade + 1), setTotalProduto(totalProduto + parseFloat(item.preco)))}><Image source={require('../assets/icone_mais.png')} style={{width: 32, height: 32, borderRadius: 50, backgroundColor: '#5F5DEE'}}></Image></TouchableOpacity>
                        <Text style={{fontSize: 24, fontWeight: 'bold'}}>{quantidade}</Text>
                        <TouchableOpacity onPress={() => quantidade > 0 ? (setQuantidade(quantidade - 1), setTotalProduto(totalProduto - parseFloat(item.preco))) : null}><Image source={require('../assets/icone_menos.png')} style={{width: 32, height: 32, borderRadius: 50, backgroundColor: '#5F5DEE'}}></Image></TouchableOpacity>
                    </View>

                    <TouchableOpacity onPress={() => salvar_no_carrinho(item)} style={{borderRadius: 4, backgroundColor: '#5F5DEE', width: 212, justifyContent: 'center', height: 50}}>
                        <Text style={{fontSize: 16, color: 'white', textAlign: 'center', fontWeight: 'bold'}}>Adicionar ao carrinho</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )): null}
          
            
        </View>
    )
}
