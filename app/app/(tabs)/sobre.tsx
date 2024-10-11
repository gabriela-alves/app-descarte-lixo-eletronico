import { 
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
} from "react-native";
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/native-stack';

export default function SobreNos(){
    type RootStackParamList = {
        Sobre: undefined;
    };
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();;
    return(
        <View style={[styles.container]}>
            <View style={[styles.topo]}>
                <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.navigate('Lixo')}>
                    <Image source={require('@/assets/images/seta.png')} style={styles.seta}/>
                </TouchableOpacity>
                <Text style={[styles.titulo]}>Sobre</Text>
            </View>
            <Text style={[styles.justifiedText]}>Os biomas, como florestas tropicais, savanas, desertos e tundras, desempenham papéis cruciais na regulação do clima, 
                na preservação da biodiversidade e na manutenção dos ciclos naturais. Contudo, a degradação ambiental causada pelo lixo 
                eletrônico tem se tornado uma preocupação crescente. O crescimento acelerado da tecnologia resulta em um ciclo de obsolescência 
                programada, onde dispositivos eletrônicos são descartados rapidamente após o término de sua vida útil. Estima-se que mais de 50 
                milhões de toneladas de lixo eletrônico sejam geradas anualmente no mundo
            </Text>
            <View style={[styles.gap10]}>
                <View style={[styles.integrantes]}>
                    <View>
                        <Text style={[styles.nome]}>William Eduardo Di Martini Minorelli</Text>
                        <Text style={[]}>Programador Junior</Text>
                    </View>
                </View>
                <View style={[styles.integrantes]}>
                    <View>
                        <Text style={[styles.nome]}>Lucas Vinicius Lourenço da Silva</Text>
                        <Text style={[]}>Programador Junior</Text>
                    </View>
                </View>
                <View style={[styles.integrantes]}>
                    <View>
                        <Text style={[styles.nome]}>Kayan dos Santo Bezerra</Text>
                        <Text style={[]}>Programação do Desingn</Text>
                    </View>
                </View>
                <View style={[styles.integrantes]}>
                    <View>
                        <Text style={[styles.nome]}>Murilo Oliveira Cassemiro</Text>
                        <Text style={[]}>Programação do Desingn</Text>
                    </View>
                </View>
                <View style={[styles.integrantes]}>
                    <View>
                        <Text style={[styles.nome]}>Julia Moura Gonçalves</Text>
                        <Text style={[]}>Estagiária</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#F3F3F3",
        justifyContent: 'flex-start',
        marginTop: 50,
        margin: 20,
        gap: 8,
    },

    gap10:{
        gap: 15,
    },

    topo:{
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        gap: 10,
    },

    integrantes:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    nome:{
        fontWeight: 'bold',
        color: 'gray',
        fontSize: 17,
    },
    foto:{
        borderRadius: 800,
        width: 40,
        height: 40,
        marginRight: 10,
    },

    justifiedText: {
        textAlign: 'justify', // Justificando o texto
        fontSize: 16,
        color: '#333',
    },

    seta:{
        width: 50,
        height: 50,
    },

    titulo:{
        color: 'gray',
        fontWeight: 'bold',
        fontSize: 27
    },
});