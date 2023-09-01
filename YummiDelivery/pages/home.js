import { View, Text, TouchableOpacity, TextInput, Image } from 'react-native'

export default function Home({navigation}){
    const dados_usuario = JSON.parse(localStorage.getItem('dados_usuario'))
    return(
        <View style={{width: '100%', height: '100%', backgroundColor: 'white'}}>
            <View style={{height: 200, backgroundColor: '#EFEBFD'}}>
                <View style={{height: 80, justifyContent: 'space-evenly', width: '80%', display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                    <Image source={require('../assets/logo branca.svg')}style={{width: 48, height: 48}}></Image>
                    <Text style={{fontSize: 20, fontWeight: 'bold'}}>Olá! <Text style={{color: '#5635CC'}}>{dados_usuario.nome}</Text></Text>
                </View>

                <View style={{alignItems: 'center'}}>
                    <Text style={{fontSize: 17, color: '#969696', fontWeight: '600', textAlign: 'center'}}>Encontre aqui os melhores restaurantes!</Text>
                    
                    <View style={{flexDirection: 'row', height: 70, alignItems: 'center'}}>
                        <TextInput placeholder='Pesquise aqui...' style={{backgroundColor: '#FFFF', borderRadius: '4px', shadowColor: '#A1A1A1C2', shadowOffset: {width: 2, height: 2}, shadowRadius: 8, width: 328, height: 40, display: 'flex', justifyContent: 'center', fontSize: 16, padding: 16}}></TextInput>
                        <Image style={{width: 24, height: 24}} source={require('../assets/Frame.svg')}></Image>
                    </View>
                </View>
            </View>

            <View style={{height: 500, padding: 20}}>
                <View>
                    <Text style={{fontSize: 24}}>Restaurantes de hoje!</Text>
                    <View style={{display: 'flex', justifyContent: 'space-between', flexDirection: 'row', height: 80 , alignItems: 'center'}}>
                        <Image style={{width: 56, height: 56, borderRadius: 56}} source={require('../assets/Ellipse 12.svg')}></Image>
                        <Image style={{width: 56, height: 56, borderRadius: 56}} source={require('../assets/Ellipse 13.svg')}></Image>
                        <Image style={{width: 56, height: 56, borderRadius: 56}} source={require('../assets/Ellipse 14.svg')}></Image>
                        <Image style={{width: 56, height: 56, borderRadius: 56}} source={require('../assets/Ellipse 15.svg')}></Image>
                        <Image style={{width: 56, height: 56, borderRadius: 56}} source={require('../assets/Ellipse 16.svg')}></Image>
                    </View>
                </View>

                <View style={{height: '100%', justifyContent: 'center'}}>
                    <Text style={{fontSize: 24}}>Produtos em destaque</Text>
                    
                    <View style={{display: 'flex', justifyContent: 'space-between', flexDirection: 'row', height: 140, alignItems: 'center'}}>
                        <TouchableOpacity onPress={() => navigation.navigate('Detalhe do Produto', {id: 1})}><Image style={{width: 104, height: 104, borderRadius: 4, shadowColor: '#00000029', shadowOffset: {width: 2, height: 2}, shadowRadius: 2}} source={require('../assets/rectangle 51.svg')}></Image></TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('Detalhe do Produto', {id: 2})}><Image style={{width: 104, height: 104, borderRadius: 4, shadowColor: '#00000029', shadowOffset: {width: 2, height: 2}, shadowRadius: 2}} source={require('../assets/rectangle 52.svg')}></Image></TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('Detalhe do Produto', {id: 3})}><Image style={{width: 104, height: 104, borderRadius: 4, shadowColor: '#00000029', shadowOffset: {width: 2, height: 2}, shadowRadius: 2}} source={require('../assets/rectangle 53.svg')}></Image></TouchableOpacity>
                    </View>

                    <View style={{display: 'flex', justifyContent: 'space-between', flexDirection: 'row', height: 140, alignItems: 'center'}}>
                        <TouchableOpacity onPress={() => navigation.navigate('Detalhe do Produto', {id: 4})}><Image style={{width: 104, height: 104, borderRadius: 4, shadowColor: '#00000029', shadowOffset: {width: 2, height: 2}, shadowRadius: 2}} source={require('../assets/rectangle 5.svg')}></Image></TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('Detalhe do Produto', {id: 5})}><Image style={{width: 104, height: 104, borderRadius: 4, shadowColor: '#00000029', shadowOffset: {width: 2, height: 2}, shadowRadius: 2}} source={require('../assets/rectangle 6.svg')}></Image></TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('Detalhe do Produto', {id: 6})}><Image style={{width: 104, height: 104, borderRadius: 4, shadowColor: '#00000029', shadowOffset: {width: 2, height: 2}, shadowRadius: 2}} source={require('../assets/rectangle 7.svg')}></Image></TouchableOpacity>
                    </View>

                    <View style={{display: 'flex', justifyContent: 'space-between', flexDirection: 'row', height: 140, alignItems: 'center'}}>
                        <TouchableOpacity onPress={() => navigation.navigate('Detalhe do Produto', {id: 7})}><Image style={{width: 104, height: 104, borderRadius: 4, shadowColor: '#00000029', shadowOffset: {width: 2, height: 2}, shadowRadius: 2}} source={require('../assets/rectangle 48.svg')}></Image></TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('Detalhe do Produto', {id: 8})}><Image style={{width: 104, height: 104, borderRadius: 4, shadowColor: '#00000029', shadowOffset: {width: 2, height: 2}, shadowRadius: 2}} source={require('../assets/rectangle 54.svg')}></Image></TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('Detalhe do Produto', {id: 9})}><Image style={{width: 104, height: 104, borderRadius: 4, shadowColor: '#00000029', shadowOffset: {width: 2, height: 2}, shadowRadius: 2}} source={require('../assets/rectangle 49.svg')}></Image></TouchableOpacity>
                    </View>
                </View>
                
            </View>
            
        </View>
    )
}
