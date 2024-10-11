import { 
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
} from "react-native";
import MapView, { Marker } from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/native-stack';

export default function PontoColeta(){
    const initialRegion = {
        latitude: -23.0978, // Latitude da Etec
        longitude: -51.3883, // Longitude da Etec
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
    };

    type RootStackParamList = {
        Sobre: undefined;
    };
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();;
    return(
        <View style={styles.container}>
            <View style={styles.topo}>
                <TouchableOpacity style={styles.sair} activeOpacity={0.5} onPress={() => navigation.navigate('Lixo')}>
                    <Image source={require('@/assets/images/seta.png')} style={styles.seta}/>
                </TouchableOpacity>
                <View>
                    <Text style={styles.titulo}>Pontos de Coleta</Text>
                    <View>
                        <Text>Etec Prof. Adolpho Arruda Mello</Text>
                        <Text>Rua Ribeiro de Barros, 1770, Centro</Text>
                    </View>
                </View>
            </View>
            <View style={[styles.mapa, styles.sombra]}>
                <MapView 
                    style={styles.map} 
                    initialRegion={initialRegion}
                >
                    {/* Marcador para a Etec */}
                    <Marker 
                        coordinate={{ latitude: -23.0978, longitude: -51.3883 }} 
                        title={"Etec Prof. Adolpho Arruda Mello"} 
                        description={"Rua Ribeiro de Barros, 1770, Centro"} 
                    />
                </MapView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#F3F3F3",
        justifyContent: 'flex-start',
        marginTop: 50,
        margin: 20,
        gap: 8
    },

    mapa:{
        // Definindo altura e largura fixas para garantir um formato retangular
        height: 650, // Ajuste conforme necessário
        width: 'auto', // Largura total do contêiner
        overflow: 'hidden', // Para evitar overflow se necessário
        borderRadius: 15,
    },
    
    map: {
        flex: 1,
        width: '100%', // Largura total do contêiner pai
        height: '100%', // Altura total do contêiner pai
    },

    titulo: {
        color: 'gray',
        fontWeight: 'bold',
        fontSize: 27,
        marginTop: 6,
    },

    topo:{
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: 10, // Adicionando margem para espaçamento
        paddingBottom: 10,
    },

    sair:{
        marginRight: 10,
    },
    
    seta:{
        width: 50,
        height: 50,
    },
    
    sombra: {
        shadowColor: '#333333',
        shadowOffset: {
          width: 6,
          height: 6,
        },
        shadowOpacity: 0.6,
        shadowRadius: 4,
        elevation: 10
    },
});