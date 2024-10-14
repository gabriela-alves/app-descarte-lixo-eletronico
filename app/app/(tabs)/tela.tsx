import React, { useState, useEffect } from 'react';

import{
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView
} from "react-native";
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/native-stack';
import * as ImagePicker from 'expo-image-picker';
import * as ImageManipulator from 'expo-image-manipulator';
import { useRoute } from '@react-navigation/native';
import { api } from '../../assets/services/api';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Index() {
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
    Biomas: undefined;
  };

  const locations = require('../../assets/pontos.json');
  const explicacoes = require('../../assets/explicacao.json');




  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const [image, setImage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [resposta, setResposta] = useState<string | null>(null);
  const route = useRoute();

  const { imgUrlInicial } = route.params; // Aqui você acessa o parâmetro

  const isImageSent = !!imgUrlInicial;

  if (isImageSent) {
    const processImage = async () => {
      // Usando async/await
      const imgManipuled = await ImageManipulator.manipulateAsync(
        imgUrlInicial,
        [{ resize: { width: 180, height: 180 } }],
        {
          compress: 1,
          format: ImageManipulator.SaveFormat.JPEG,
          base64: true,
        }
      );

      setImage(imgManipuled.uri);
      sendAPI(imgManipuled.base64);
    };

    // Chama a função assíncrona
    processImage().catch(error => {
      console.error("Erro ao manipular a imagem:", error);
    });
  }



  const openCamera = async () => {
    // Solicita permissões da câmera
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      alert('Você precisa conceder permissão para usar a câmera!');

      setIsLoading(true);
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      quality: 1,
    });

    if (!result.canceled) {
      const imgManipuled = await ImageManipulator.manipulateAsync(
        result.assets[0].uri,
        [{ resize: { width: 180, height: 180 } }],
        {
          compress: 1,
          format: ImageManipulator.SaveFormat.JPEG,
          base64: true
        }
      );
      setImage(imgManipuled.uri);
      sendAPI(imgManipuled.base64);
      //setImage(imageUri);
      //alert(`Imagem salva em: ${imgManipuled.uri}`);
    } else {
      setIsLoading(false);
    }
  };

  async function sendAPI(imageBase64: string | undefined) {
    setIsLoading(true); // Ativa o carregamento
    try {
      const response = await api.post('/classificar', {
        inputs: [
          {
            data: {
              image: {
                base64: imageBase64,
              },
            },
          },
        ],
      });

      setResposta(response.data.classe);

    } catch (error) {
      console.error('Erro ao enviar a imagem:', error);
    } finally {
      setIsLoading(false); // Desativa o carregamento
    }
  }

  const handleButtonPress = () => {
    incrementItems();
    openCamera();
  };
  return (


    <View style={styles.container}>
      {/* Título */}
      <View style={[styles.topo]}>
        <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.navigate('Home')}>
          <Image source={require('@/assets/images/seta.png')} style={styles.seta} />
        </TouchableOpacity>
        <Text style={[styles.titulo]}>Descarte</Text>
      </View>

      {/* Botão de Escaneamento */}
      <View style={styles.btn}>
        <TouchableOpacity
          style={[styles.botao_Scan, styles.sombra]}
          activeOpacity={0.7}
          onPress={handleButtonPress}
        >
          <View style={styles.caixaTitulo}>
            <Image source={require('@/assets/images/camera.png')} style={styles.imagem_cima} />
            <Text style={styles.subTitulo}>Escaneamento de lixo eletrônico</Text>
          </View>
          <Text style={styles.estilo}>Você já escaneou {itens} itens</Text>
        </TouchableOpacity>
      </View>

      {/* Caixa de Botões Extra */}
      <View style={styles.main}>
        {resposta ? (
          <Text style={styles.explicacao}>Item identificado: {resposta}</Text>
        ) : (
          <Text>Nenhum item fotografado.</Text>
        )}
      </View>


      {/* Caixa explicacao */}
      <View style={styles.main}>
        {resposta && explicacoes[resposta] ? (
          <Text style={styles.explicacaoItem}>{explicacoes[resposta].explicacaoItem}</Text>
        ) : (
          ''
        )}
      </View>

      {/* Título Pontos de Coleta */}
      {resposta && (
        <Text style={styles.titulo}>Pontos de descarte para {resposta}</Text>
      )}

      {/* Botões de Pontos de Coleta */}
      <ScrollView>
        <View style={[styles.coleta, { backgroundColor: '#fff' }]}>
          {/* Example Collection Button */}
          {resposta != null && locations.map((location, index) => (
            <TouchableOpacity
              activeOpacity={0.5}
              key={index}
              style={[styles.botao_coleta, styles.sombra]}
            >
              <Text style={[styles.negrito, styles.enderecoTxt]}>{location.name}</Text>
              <Text style={[styles.enderecoTxt]}>{location.address}</Text>
              <Text style={[styles.enderecoTxt]}>{location.neighborhood}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F3F3",
    justifyContent: 'flex-start',
    marginTop: 50,
    margin: 20,
    gap: 8
  },

  topo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    gap: 10,
  },

  seta: {
    width: 50,
    height: 50,
  },

  btn: {
    marginBottom: 20,
  },
  negrito: {
    fontWeight: 'bold',
  },
  cameraContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: -50
  },
  enderecoTxt: {
    fontSize: 20,
  },
  closeButton: {
    backgroundColor: '#FF6347',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },

  closeButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },

  coleta: {
    flexDirection: 'column',
    width: '100%',
  },

  main: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: -10, // Reduced spacing between buttons
  },

  message: {
    textAlign: 'center',
    paddingBottom: 10,
  },

  titulo: {
    color: 'gray',
    fontWeight: 'bold',
    fontSize: 27
  },

  botao_Scan: {
    flexDirection: 'column',
    alignItems: 'flex-end',
    backgroundColor: '#FFE68B',
    borderWidth: 0.5,
    borderColor: '#fff',
    height: 110,
    borderRadius: 10,
    padding: 15,
    gap: 10,
    marginBottom: -5, // Reduced space below scan button
  },

  botao: {
    backgroundColor: '#FFF',
    borderColor: '#FFF',
    borderWidth: 0.5,
    height: 110,
    borderRadius: 10,
    padding: 15,
    gap: 10,
    width: '48%',
  },

  botao_coleta: {
    backgroundColor: '#FFF',
    borderColor: '#FFF',
    borderWidth: .5,
    borderRadius: 10,
    padding: 15,
    gap: 10,
    width: '100%',
    marginBottom: 10,
  },

  caixaTitulo: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center'
  },

  subTitulo: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
    width: 180
  },
  explicacao: {
    color: 'black',
    fontSize: 20,
    textAlign: 'center',
    width: '100%',
    marginBottom: 10
  },
  explicacaoItem: {
    color: 'black',
    fontSize: 16,
    textAlign: 'justify',
    width: '100%'
  },
  imagem_cima: {
    marginRight: 10,
    height: 45,
    width: 45,
    backgroundColor: 'white',
    borderRadius: 100,
  },

  imagem: {
    marginRight: 10,
    height: 30,
    width: 30,
    resizeMode: 'contain',
    borderRadius: 100,
  },

  estilo: {
    color: 'black',
  },

  sombra: {
    shadowColor: '#333333',
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 0.6,
    shadowRadius: 4,
    elevation: 10
  },

  info: {
    backgroundColor: '#EFA8FF',
  },

  plant: {
    backgroundColor: '#C7FB31',
  },

  coleta_img: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },

  coleta_img_container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },

  coleta_text: {
    fontWeight: 'bold',
    marginLeft: 10,
  },

  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: 64,
  },

  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },

  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },

  camera: {
    flex: 1,
    width: 395
  },
});