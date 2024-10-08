import React from 'react';
import { 
  View, 
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/native-stack';

export default function Home() {
    type RootStackParamList = {
      Sobre: undefined;
    };
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();;
    return (
        <ScrollView style={[styles.container]} scrollEnabled={false} nestedScrollEnabled={false}>
            <View>
                <View style={[styles.botao_Scan]}>
                    <Text style={[styles.titulo]}>Nome Aplicativo</Text>
                    <Text style={[styles.subTitulo]}>Bem Vindo!</Text>
                </View>
                <View style={[styles.buttons, styles.gap20, styles.top20]}>
                    <TouchableOpacity style={[styles.button, styles.azulC]} activeOpacity={0.7}>
                        <Image style={[styles.imagem]} source={require('@/assets/images/cameraS.png')}/>
                        <Text style={[styles.subTitulo]}>Identifique o seu lixo</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                      style={[styles.button, styles.laranjaC]} 
                      activeOpacity={0.7}
                      onPress={() => navigation.navigate('Coleta')}
                    >
                        <Image style={[styles.imagem]} source={require('@/assets/images/lixo.png')}/>
                        <Text style={[styles.subTitulo]}>Pontos de Descarte</Text>
                    </TouchableOpacity>
                </View>
                <View style={[styles.buttons, styles.gap20, styles.top20]}>
                    <TouchableOpacity 
                      style={[styles.button, styles.azul]} 
                      activeOpacity={0.7}
                      onPress={() => navigation.navigate('Biomas')}
                    >
                        <Image style={[styles.imagem]} source={require('@/assets/images/panta.png')}/>
                        <Text style={[styles.subSubTitulo]}>Lixo eletrônico e Biomas Brasileiros</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                      style={[styles.button, styles.laranja]} 
                      activeOpacity={0.7}
                      onPress={() => navigation.navigate('Sobre')}
                    >
                        <Image style={[styles.imagem]} source={require('@/assets/images/sobre.png')}/>
                        <Text style={[styles.subTitulo]}>Sobre o Projeto</Text>
                    </TouchableOpacity>
                </View>
                <View style={[styles.buttons]}>
                    <Image style={[styles.imagem]} source={require('@/assets/images/logo-etec.png')}/>
                    <Image style={[styles.imagem2]} source={require('@/assets/images/logo-centro.png')}/>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    margin: 30,
  },
  gap20:{
    gap: 20,
  },
  top20:{
    marginTop: 20,
  },
  azulC:{
    backgroundColor: '#8ecae6',
  },
  azul:{
    backgroundColor: '#219ebc',
  },
  laranjaC:{
    backgroundColor: '#f48c06',
  },
  laranja:{
    backgroundColor: '#e85d04',
  },
  titulo:{
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 27
  },
  subTitulo:{
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 22,
    marginLeft: 10,
    textAlign: 'center',
  },
  subSubTitulo:{
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 18,
    marginLeft: 10,
    textAlign: 'center',
  },
  buttons:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  botao_Scan: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    backgroundColor: '#E0E0E0',
    borderWidth: 0.5,
    borderColor: '#fff',
    height: 110,
    borderRadius: 10,
    padding: 15,
    gap: 10,
  },
  
  button:{
    flex: 1,
    height: 230,
    borderRadius: 20,
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  imagem: {
    marginRight: 10,
    height: 149,
    width: 149,
    resizeMode: 'contain', 
  },
  
  imagem2: {
    marginRight: 10,
    height: 150,
    width:150,
    resizeMode:'contain',
   },
});