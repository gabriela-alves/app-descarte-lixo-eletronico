import { 
  View, 
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/native-stack';

export default function Index() {
  type RootStackParamList = {
    Sobre: undefined;
    Biomas: undefined;
  };
  
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      {/* Título */}
      <Text style={styles.titulo}>Descarte</Text>

      {/* Botão de Escaneamento */}
      <View style={styles.btn}>
          <TouchableOpacity 
            style={[styles.botao_Scan, styles.sombra]} 
            activeOpacity={0.7}  
            onPress={() => navigation.navigate('Camera')}
          >
            <View style={styles.caixaTitulo}>
              <Image source={require('@/assets/images/camera.png')} style={styles.imagem_cima}/>
              <Text style={styles.subTitulo}>Escaneamento de lixo eletrônico</Text>
            </View>
            <Text style={styles.estilo}>Você já escaneou 100 itens</Text>
          </TouchableOpacity>
      </View>

      {/* Caixa de Botões Extra */}
      <View style={styles.main}>
        <TouchableOpacity 
          style={[styles.botao, styles.sombra]} 
          activeOpacity={0.7}
          onPress={() => navigation.navigate('Biomas')}
        >
          <Image source={require('@/assets/images/plant.png')} style={[styles.imagem, styles.plant]}/>
          <Text>Lixo eletrônico e Biomas Brasileiros</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.botao, styles.sombra]} 
          activeOpacity={0.7}
          onPress={() => navigation.navigate('Sobre')}
        >
          <Image source={require('@/assets/images/info.png')} style={[styles.imagem, styles.info]}/>
          <Text>Sobre o projeto</Text>
        </TouchableOpacity>
      </View>

      {/* Título Pontos de Coleta */}
      <Text style={styles.titulo}>Pontos de Coleta</Text>

      {/* Botões de Pontos de Coleta */}
      <View style={styles.coleta}>
        {/* Example Collection Button */}
        <TouchableOpacity style={[styles.botao_coleta, styles.sombra]} activeOpacity={0.7}>
          <View style={styles.coleta_img_container}>
            <Image source={require('@/assets/images/localizacao.png')} style={styles.coleta_img}/>
            <Text style={styles.coleta_text}>Presidente Prudente</Text>
          </View>
          <Text>ETEC Arruda Mello</Text>
          <Text>Rua Ribeiro de Barros, 1770, Centro</Text>
        </TouchableOpacity>
      </View>
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

  btn:{
    marginBottom: 20,
  },

  cameraContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: -50
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
     gap:10,
     width:'48%',
   },

   botao_coleta:{
     backgroundColor:'#FFF',
     borderColor:'#FFF',
     borderWidth:.5,
     borderRadius :10 ,
     padding :15 ,
     gap :10 ,
     width :'100%' ,
     marginBottom :10 ,
   },

   caixaTitulo:{
     flex :1 ,
     width:'100%',
     flexDirection:'row',
     alignItems:'center'
   },

   subTitulo:{
     color:'black',
     fontWeight:'bold',
     fontSize :20 ,
     width :180
   },

   imagem_cima:{
     marginRight :10 ,
     height :45 ,
     width :45 ,
     backgroundColor :'white' ,
     borderRadius :100 ,
   },

   imagem:{
     marginRight :10 ,
     height :30 ,
     width :30 ,
     resizeMode :'contain' ,
     borderRadius :100 ,
   },

   estilo:{
     color :'black' ,
   },

   sombra:{
     shadowColor :'#333333' ,
     shadowOffset :{
       width :6 ,
       height :6 ,
     },
     shadowOpacity :0.6 ,
     shadowRadius :4 ,
     elevation :10
   },

   info:{
     backgroundColor :'#EFA8FF' ,
   },

   plant:{
     backgroundColor :'#C7FB31' ,
   },

   coleta_img:{
     width :30 ,
     height :30 ,
     resizeMode :'contain' ,
   },

   coleta_img_container:{
     flexDirection :'row' ,
     alignItems :'center' ,
     marginBottom :5 , 
   },

   coleta_text:{
     fontWeight :'bold' ,
     marginLeft :10 ,
   },
   
   buttonContainer:{
       flex :1 ,
       flexDirection :'row' ,
       backgroundColor :'transparent' ,
       margin :64,
   },
   
   button:{
       flex :1 ,
       alignSelf :'flex-end' ,
       alignItems :'center' ,
   },
   
   text:{
       fontSize :24 ,
       fontWeight :'bold' ,
       color :'white' ,
   },
   
   camera:{
       flex :1 , 
       width :395
   }, 
});