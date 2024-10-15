import { 
    View,
    Text,
    Image,
    TouchableOpacity,
    ScrollView,
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
                <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.navigate('Home')}>
                    <Image source={require('@/assets/images/seta.png')} style={styles.seta}/>
                </TouchableOpacity>
                <Text style={[styles.titulo]}>Sobre</Text>
            </View>
            <Text style={[styles.justifiedText]}>Esse projeto foi desenvolvido pelos alunos do 1º, 2º e 3º ano do ensino médio integrado ao 
                técnico Informática para Internet da ETEC Prof.º Adolpho Arruda Mello, sob orientação das professoras Gabriela Alves do Nascimento 
                Silva e Thamires Caetano de Amorin.
            </Text>
            <ScrollView style={[styles.gap10]}>
                    <View style={[styles.integrantes, {marginBottom: 10}]}>
                    <Image source={require('@/assets/images/gabi.jpg')} style={[styles.foto]}/>
                    <View>
                        <Text style={[styles.nome]}>Gabriela Alves do Nascimento Silva</Text>
                        <Text style={[]}>Professora Orientadora</Text>
                    </View>
                </View>
                <View style={[styles.integrantes, {marginBottom: 10}]}>
                    <Image source={require('@/assets/images/thamires.jpg')} style={[styles.foto]}/>
                    <View>
                        <Text style={[styles.nome]}>Thamires Caetano de Amorin</Text>
                        <Text style={[]}>Professora Orientadora</Text>
                    </View>
                </View>
                <View style={[styles.integrantes, {marginBottom: 10}]}>
                    <Image source={require('@/assets/images/amanda.jpg')} style={[styles.foto]}/>
                    <View>
                        <Text style={[styles.nome]}>Amanda Carvalho Dionisio</Text>
                        <Text style={[]}>3° Ano Informática</Text>
                    </View>
                </View>
                <View style={[styles.integrantes, {marginBottom: 10}]}>
                    <Image source={require('@/assets/images/carlos.jpg')} style={[styles.foto]}/>
                    <View>
                        <Text style={[styles.nome]}>Carlos Daniel Verdeiro</Text>
                        <Text style={[]}>3° Ano Informática</Text>
                    </View>
                </View>
                <View style={[styles.integrantes, {marginBottom: 10}]}>
                    <Image source={require('@/assets/images/jovana.jpg')} style={[styles.foto]}/>
                    <View>
                        <Text style={[styles.nome]}>Jovana Carvalho Dionisio</Text>
                        <Text style={[]}>3° Ano Informática</Text>
                    </View>
                </View>
                <View style={[styles.integrantes, {marginBottom: 10}]}>
                    <Image source={require('@/assets/images/wellinton.jpg')} style={[styles.foto]}/>
                    <View>
                        <Text style={[styles.nome]}>Wellington Aparecido Gutierres Silva</Text>
                        <Text style={[]}>3° Ano Informática</Text>
                    </View>
                </View>
                <View style={[styles.integrantes, {marginBottom: 10}]}>
                    <Image source={require('@/assets/images/kayan.jpg')} style={[styles.foto]}/>
                    <View>
                        <Text style={[styles.nome]}>Kayan dos Santo Bezerra</Text>
                        <Text style={[]}>2° Ano Informática</Text>
                    </View>
                </View>
                <View style={[styles.integrantes, {marginBottom: 10}]}>
                    <Image source={require('@/assets/images/lucas.jpg')} style={[styles.foto]}/>
                    <View>
                        <Text style={[styles.nome]}>Lucas Vinicius Lourenço da Silva</Text>
                        <Text style={[]}>2° Ano Informática</Text>
                    </View>
                </View>
                <View style={[styles.integrantes, {marginBottom: 10}]}>
                    <Image source={require('@/assets/images/murilo.jpg')} style={[styles.foto]}/>
                    <View>
                        <Text style={[styles.nome]}>Murilo Oliveira Cassemiro</Text>
                        <Text style={[]}>2° Ano Informática</Text>
                    </View>
                </View>
                <View style={[styles.integrantes, {marginBottom: 10}]}>
                    <Image source={require('@/assets/images/william.jpg')} style={[styles.foto]}/>
                    <View>
                        <Text style={[styles.nome]}>William Eduardo Di Martini Minorelli</Text>
                        <Text style={[]}>2° Ano Informática</Text>
                    </View>
                </View>
                <View style={[styles.integrantes, {marginBottom: 10}]}>
                    <Image source={require('@/assets/images/gustavo.jpg')} style={[styles.foto]}/>
                    <View>
                        <Text style={[styles.nome]}>Gustavo Moreira Camilo</Text>
                        <Text style={[]}>1° Ano Informática</Text>
                    </View>
                </View>
                <View style={[styles.integrantes, {marginBottom: 10}]}>
                    <Image source={require('@/assets/images/julia.jpg')} style={[styles.foto]}/>
                    <View>
                        <Text style={[styles.nome]}>Julia Moura Gonçalves</Text>
                        <Text style={[]}>1° Ano Informática</Text>
                    </View>
                </View>
                <View style={[styles.integrantes, {marginBottom: 10}]}>
                    <Image source={require('@/assets/images/julio.jpg')} style={[styles.foto]}/>
                    <View>
                        <Text style={[styles.nome]}>Julio Arcanjo Sanvezzo Gomes</Text>
                        <Text style={[]}>1° Ano Informática</Text>
                    </View>
                </View>
                <View style={[styles.integrantes, {marginBottom: 10}]}>
                    <Image source={require('@/assets/images/lucasM.jpg')} style={[styles.foto]}/>
                    <View>
                        <Text style={[styles.nome]}>Lucas Magalhães</Text>
                        <Text style={[]}>1° Ano Informática</Text>
                    </View>
                </View>
                <View style={[styles.integrantes]}>
                    <Image source={require('@/assets/images/tayna.jpg')} style={[styles.foto]}/>
                    <View>
                        <Text style={[styles.nome]}>Tayná Silva França</Text>
                        <Text style={[]}>1° Ano Informática</Text>
                    </View>
                </View>
            </ScrollView>
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
        height: 'auto',
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
        marginBottom: 10,
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