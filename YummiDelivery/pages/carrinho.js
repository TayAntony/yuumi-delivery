import { useIsFocused } from '@react-navigation/native'
import { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, Image, ImageBackground } from 'react-native'

export default function Carrinho({navigation}){
    const [lista, setLista] = useState([])
    const [total, setTotal] = useState(0)

    const estaNaTela = useIsFocused()

    function remover_carrinho(idProduto){
        alert("O item foi removido com sucesso!")
        if (localStorage.getItem('carrinho') != undefined) {
            let itens = JSON.parse(localStorage.getItem('carrinho'))
            let newItens = []
            itens.map((item) => {
              if (item.id == idProduto) {
                item.qtd -= item.qtd
              }
              if (item.qtd > 0) {
                newItens.push(item)
              }
            })
            localStorage.setItem('carrinho', JSON.stringify(newItens))
            navigation.navigate('Carrinho')
        }
    }

    useEffect(() => {
        let calcular_total = 0
        let pedidos = []

        try{
            pedidos.push(JSON.parse(localStorage.getItem('carrinho')))
            setLista(pedidos[0])
            
            if (pedidos[0] != null){
              pedidos[0].map((item) => {
                  calcular_total = calcular_total + parseFloat(item.preco) * parseFloat(item.qtd)
              })
            }
            
          setTotal(calcular_total)
        }
        
        catch{
            setLista([])
        }
      

    }, [estaNaTela])
    return(
        <View style={{width: '100%', height: '100%', backgroundColor: 'white'}}>
            <View style={{width: '65%', height: 120, display: 'flex', flexDirection: 'row-reverse', justifyContent: 'space-between', alignItems: 'center'}}>
                <Text style={{fontSize: 18, fontWeight: 'bold', textAlign: 'center'}}>Seu carrinho</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}> 
                    <Image style={{width: 60, height: 60}} source={require('../assets/botão voltar.svg')}></Image>
                </TouchableOpacity>
            </View>

            {lista.length > 0 ? lista.map((item) => (    
                <View key={item.id} style={{width: '100%', alignItems: 'center', height: 100}}>
                    <View style={{borderRadius: 4, borderWidth: 1, borderColor: '#F4F4F4', width: 326, height: 80, display: 'flex', flexDirection: 'row'}}>
                        <Image style={{width: 80, height: 80}} source={(item.foto)}></Image>
                        
                        <View style={{display: 'flex', justifyContent: 'space-around', height: 82}}>
                            <View style={{display: 'flex', flexDirection: 'row', width: 225, justifyContent: 'space-between', marginLeft: 5}}>
                                <Text style={{fontSize: 16, fontWeight: 500}}>{item.nome}</Text>
                                <Text style={{fontSize: 16, fontWeight: 400}}>{item.qtd}x</Text>
                            </View>
                            
                            <View style={{display: 'flex', flexDirection: 'row', width: 225, justifyContent: 'space-between', marginLeft: 5  }}>
                                <Text style={{fontSize: 14, fontWeight: 400}}>Total R$ {item.preco * item.qtd}</Text>
                                <TouchableOpacity onPress={() => remover_carrinho(item.id)}><Image source={require('../assets/icone_lata_de_descarte.svg')} style={{width: 24, height: 24}}></Image></TouchableOpacity>
                            </View>
                        </View>
                    
                    </View>
                </View>
            )): (
                <View style={{width: '100%', alignItems: 'center'}}>
                    <Text style={{fontSize: 24, fontWeight: 'bold'}}>Seu carrinho está vazio!</Text>
                    <Image style={{width: 250, height: 250}} source={require('../assets/gato_do_carrinho_vazio.svg')}></Image>
                </View>
            )}
           
            
            <View style={{height: 200}}></View>
           <View style={{width: '100%', height: 10, borderTopWidth: 2, borderColor: '#E0E0E0'}}></View>

           <View style={{width: '100%', height: 50}}>
                <Text style={{width: 150, fontSize: 16, fontWeight: 'bold', marginLeft: 'auto'}}>Total: R$ {parseFloat(total).toFixed(2)}</Text>
           </View>

           <View style={{width: '100%', display: 'flex', justifyContent: 'space-evenly', flexDirection: 'row', alignItems: 'center'}}>
                <TouchableOpacity style={{borderRadius: 4, backgroundColor: '#5F5DEE', width: 212, justifyContent: 'center', height: 50}}>
                    <Text onPress={() => navigation.navigate('Adicionar Endereco')} style={{fontSize: 16, color: 'white', textAlign: 'center', fontWeight: 'bold'}}>Comprar</Text>
                </TouchableOpacity>
           </View>
            
        </View>
    )
}
