import React, { useState, useEffect } from 'react';

import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/native-stack';
import * as ImagePicker from 'expo-image-picker';

import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Home() {
  const [itens, setItens] = useState(0);
  
  const loadItems = async () => {
    try {
      const storedValue = await AsyncStorage.getItem('itens');
      if (storedValue !== null) {
        setItens(parseInt(storedValue));
      }
    } catch (error) {
      console.error("Erro ao carregar os itens: ", error);
    }
  };

  const incrementItems = async () => {
    const newValue = itens + 1;
    setItens(newValue);
    try {
      await AsyncStorage.setItem('itens', newValue.toString());
    } catch (error) {
      console.error("Erro ao salvar os itens: ", error);
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      loadItems();
    }, [])
  );

  type RootStackParamList = {
    Sobre: undefined;
  };
  const [image, setImage] = useState(null);

  const openCamera = async () => {
    // Solicita permissões da câmera
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      alert('Você precisa conceder permissão para usar a câmera!');
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      allowsEditing: false,
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      navigation.navigate('Lixo', { imgUrlInicial: result.assets[0].uri }); // Defina o parâmetro aqui

    }
  };
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();;
  
  const handleButtonPress = () => {
    incrementItems();
    openCamera();
  };
  return (
    <ScrollView style={[styles.container]} scrollEnabled={false} nestedScrollEnabled={false}>
      <View>
        <View style={[styles.botao_Scan]}>
          <Image style={[styles.logo]} source={require('@/assets/images/logo.png')} />
        </View>
        <View style={[styles.buttons, styles.gap20, styles.top20]}>
          <TouchableOpacity style={[styles.button, styles.azulC]} activeOpacity={0.7} onPress={handleButtonPress}>
            <Image style={[styles.imagem]} source={require('@/assets/images/cameraS.png')} />
            <Text style={[styles.subTitulo]}>Identifique o seu lixo</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.laranjaC]}
            activeOpacity={0.7}
            onPress={() => navigation.navigate('Descartes')}
          >
            <Image style={[styles.imagem]} source={require('@/assets/images/lixo.png')} />
            <Text style={[styles.subTitulo]}>Pontos de Descarte</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.buttons, styles.gap20, styles.top20]}>
          <TouchableOpacity
            style={[styles.button, styles.azul]}
            activeOpacity={0.7}
            onPress={() => navigation.navigate('Biomas')}
          >
            <Image style={[styles.imagem]} source={require('@/assets/images/panta.png')} />
            <Text style={[styles.subSubTitulo]}>Lixo eletrônico e Biomas Brasileiros</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.laranja]}
            activeOpacity={0.7}
            onPress={() => navigation.navigate('Sobre')}
          >
            <Image style={[styles.imagem]} source={require('@/assets/images/sobre.png')} />
            <Text style={[styles.subTitulo]}>Sobre o Projeto</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.buttons]}>
          <Image style={[styles.imagem]} source={require('@/assets/images/logo-etec.png')} />
          <Image style={[styles.imagem2]} source={require('@/assets/images/logo-centro.png')} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F3F3",
    marginTop: 50,
    margin: 20,
    gap: 8
  },
  gap20: {
    gap: 20,
  },
  top20: {
    marginTop: 20,
  },
  azulC: {
    backgroundColor: '#8ecae6',
  },
  azul: {
    backgroundColor: '#219ebc',
  },
  laranjaC: {
    backgroundColor: '#f48c06',
  },
  laranja: {
    backgroundColor: '#e85d04',
  },
  titulo: {
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 27
  },
  subTitulo: {
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 22,
    marginLeft: 10,
    textAlign: 'center',
  },
  subSubTitulo: {
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 18,
    marginLeft: 10,
    textAlign: 'center',
  },

  logo: {
    height: 100,
    width: 204,
  },

  buttons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  botao_Scan: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1E2035',
    borderWidth: 0.5,
    borderColor: '#fff',
    height: 110,
    borderRadius: 10,
    padding: 15,
    gap: 10,
  },

  button: {
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
    width: 150,
    resizeMode: 'contain',
  },
});