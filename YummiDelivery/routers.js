import { NavigationContainer } from "@react-navigation/native";
import TelaInicial from "./pages/telaInicial";
import LoginCliente from "./pages/loginCliente";
import CadastroCliente from "./pages/cadastroCliente";
import LoginTransportador from "./pages/loginTransportador";
import Home from "./pages/home";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import DetalhesDosProdutos from "./pages/detalhesDosProdutos";
import Carrinho from "./pages/carrinho";
import AdicionarEndereco from "./pages/adicionarEndereco";
import FormaPagamento from "./pages/formaPagamento";
import Agradecimento from "./pages/agradecimento";
import Mapa from "./pages/mapa";
import HomeTransportador from "./pages/homeTransportador";
import MapaTransportador from "./pages/mapaTransportador";
import ListaEntregas from "./pages/listaEntregas";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function HomeTabs() {
    return (
      <Tab.Navigator initialRouteName="Home" screenOptions={{headerShown: false, tabBarStyle: {backgroundColor: '#D8CEFB', borderTopStartRadius: 8, borderTopEndRadius: 8, height: 64,}}}>
            <Tab.Screen options={{tabBarLabelStyle: {fontSize: 12, fontWeight: 'bold', color: 'black'}, tabBarIcon: () => { return (<View><Image source={require('./assets/mapa.png')} style={{width: 40, height: 40}}></Image></View>)}}} name="Mapa" component={Mapa}/>

            <Tab.Screen options={{tabBarLabelStyle: {fontSize: 12, fontWeight: 'bold', color: 'black'}, tabBarIcon: () => { return (<View><Image source={require('./assets/pedidos.png')} style={{width: 40, height: 40}}></Image></View>)}}} name="Pedidos" component={Home}/>

            <Tab.Screen options={{tabBarLabelStyle: {fontSize: 12, fontWeight: 'bold', color: 'black', marginBottom: 10}, tabBarIcon: () => { return (<View><Image source={require('./assets/home ativo.png')} style={{width: 70, height: 70, marginBottom: 20}}></Image></View>)}}} name="Home" component={Home}/>

            <Tab.Screen options={{tabBarLabelStyle: {fontSize: 12, fontWeight: 'bold', color: 'black'}, tabBarIcon: () => { return (<View><Image source={require('./assets/carrinho.png')} style={{width: 40, height: 40}}></Image></View>)}}} name="Carrinho" component={Carrinho}/>

            <Tab.Screen options={{tabBarLabelStyle: {fontSize: 12, fontWeight: 'bold', color: 'black'}, tabBarIcon: () => { return (<View><Image source={require('./assets/perfil.png')} style={{width: 40, height: 40}}></Image></View>)}}} name="Perfil" component={Home}/>
      </Tab.Navigator>
    );
  }
  

export default function Routers({navigation}){
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false, tabBarStyle: {backgroundColor: '#D8CEFB', borderTopStartRadius: 8, borderTopEndRadius: 8, height: 64}}}>
            <Stack.Screen name="Página Inicial" component={TelaInicial}/>
            <Stack.Screen name="Home Transportador" component={HomeTransportador}/>
            <Stack.Screen name="Agradecimento" component={Agradecimento}/>
            <Stack.Screen name="Login Cliente" component={LoginCliente}/>
            <Stack.Screen name="Forma de Pagamento" component={FormaPagamento}/>
            <Stack.Screen name="Adicionar Endereco" component={AdicionarEndereco}/>
            <Tab.Screen name="Home" component={HomeTabs}/>
            <Stack.Screen name="Carrinho" component={Carrinho}/>
            <Stack.Screen name="Detalhe do Produto" component={DetalhesDosProdutos}/>
            <Stack.Screen name="Cadastro Cliente" component={CadastroCliente}/>
            <Stack.Screen name="Login Transportador" component={LoginTransportador}/>
            <Stack.Screen name="Mapa" component={Mapa}/>
            <Stack.Screen name="Mapa Transportador" component={MapaTransportador}/>
            <Stack.Screen name="Lista de Entregas" component={ListaEntregas}/>
            </Stack.Navigator>

        </NavigationContainer>
    )
}