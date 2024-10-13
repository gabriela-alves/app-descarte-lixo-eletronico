import React, { useState } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, Animated, StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/native-stack';

export default function Biomas() {
    type RootStackParamList = {
        Sobre: undefined;
    };
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

    const lixo = [
        {
            bioma: "Lixo Eletrônico",
            sobre: "Lixo eletrônico, também conhecido como resíduo computacional, é composto por equipamentos que funcionam através de energia elétrica, pilhas ou baterias. Esses equipamentos apresentam em sua composição substâncias tóxicas que podem prejudicar o meio ambiente se forem descartados incorretamente.",
            title: "Classificação Do Lixo Eletrônico",
            subTitle: "O lixo eletrônico é classificado em categorias, conforme as características dos resíduos.",
            classificao: 
            {
                verde: 
                {
                    linha: "Linha Verde",
                    equipamentos: "Equipamentos de informática e telefonia.",
                    exemplos: "Exemplo: telefones, celulares, notebook, teclado, mouses, entre outros.",
                },
                marrom: 
                {
                    linha: "Linha Marrom",
                    equipamentos: "Equipamentos de áudio e vídeo.",
                    exemplos: "Exemplo: TV, som, vídeo game, aparelhos de DVD, entre outros.",
                },
                azul: 
                {
                    linha: "Linha Azul",
                    equipamentos: "Pequenos eletrodomésticos e ferramentas elétricas.",
                    exemplos: "Exemplo: liquidificador, batedeira, furadeira, torradeira, entre outros.",
                },
                branca: 
                {
                    linha: "Linha Branca",
                    equipamentos: "Grandes eletrodomésticos.",
                    exemplos: "Exemplo: fogão, geladeira, máquina de lavar roupa, micro-ondas, entre outros.",
                },
            },
        },
    ];

    const biomas = [
        {
            bioma: "Amazônia",
            sobre: "É o maior bioma brasileiro, ocupa 49% do território nacional. Além de possuir a maior floresta tropical e bacia hidrográfica do mundo, a Floresta Amazônica e a Bacia Amazônica, respectivamente.",
            fauna: "principais representantes são as onças-pintadas, boto-cor-de-rosa, arara-azul, capivara, tatus e cobras.",
            flora: "aproximadamente 30 mil espécies de plantas, destaca-se as mais conhecidas como vitória régia.",
            hidrografia: "detém 20% de água doce do planeta, sendo o rio Amazonas o principal.",
            clima: "quente e úmido",
            vegetacao: "divide-se em três, sendo mata de terra firme que são mais altas e não são inundadas; mata de várzea são áreas inundadas em alguns períodos do ano; mata de Igapó que são inundadas praticamente o ano todo.",
            solo: "arenoso e com camadas de matéria orgânica proveniente da deposição da vegetação, além disso. 14% do território é considerado fértil.",
        },
        {
            bioma: "Cerrado",
            sobre: "Segundo maior bioma brasileiro, ocupando 24% do território nacional. É conhecido com a Savana brasileira e apresenta diversas vegetações em virtude do contato com outros biomas. Após a transferência da capital federal do Rio de Janeiro para Brasília, a cobertura vegetal natural deu abertura para a pecuária e agricultura.",
            fauna: "principais representantes são os tucanos, tamanduá-bandeira, lobo-guará, onça-parda e veado-campeiro.",
            flora: "aproximadamente 10 mil espécies de vegetais, sendo muitas delas, usadas para fins medicinais e alimentação.",
            hidrografia: "abriga as nascentes de grandes rios, além de conter 9 das 12 bacias hidrográficas brasileiras.",
            clima: "tropical sazonal, com duas estações bem marcantes sendo inverno seco e verões chuvosos.",
            vegetacao: "vegetações com árvores de troncos tortuosos que podem alcançar até 20 metros de altura, arbustos, cactos e orquídeas. A vegetação apresenta tonalidades de verde, amarelo e tons amarronzados devido à alta incidência solar.",
            solo: "porosos e permeáveis, onde apresentam colorações avermelhadas para solos ácidos e pobres e colorações mais escura para solos argilosos.",
        },
        {
            bioma: "Mata Atlântica",
            sobre: "Ocupa 13% do território nacional, por estar localizado na região litorânea é o bioma mais ameaçado do Brasil, apenas 27% de duas florestas originais ainda são preservadas.",
            fauna: "principais representantes ão micos, tamanduás, tucanos, jaguatirica, rãs e bichos-preguiça.",
            flora: "aproximadamente 20 mil espécies de plantas, sendo 8 mil existentes apenas nessa região.",
            hidrografia: "são sete bacias que se alimentam dos rios São Francisco, Paraíba do Sul, Paraná e afluentes. Abastece cerca de 110 milhões de brasileiros.",
            clima: "tropical úmido",
            vegetacao: "vegetações ombrófilas (folhas largas e que mantém folhagem o ano todo), além de árvores de médio e grande porte que podem alcançar até 60 metros de altura.",
            solo: "rasos, ácidos e extremamente úmido, o que os torna propícios a deslizamentos nas partes mais altas.",
        },
        {
            bioma: "Caatinga",
            sobre: "Ocupa 10% do território brasileiro e é considerado o bioma mais seco. Seu nome tem origem indígena que significa 'Floresta Branca' que remete a característica da vegetação na época de seca.",
            fauna: "principais representantes são os jacaré-do-papo-amarelo, jiboia, ararinha-azul, cágado e soldadinho-do-araripe.",
            flora: "a flora varia de acordo com as características locais oriundos da chuva e particularidade do solo, mas as espécies mais conhecidas são o mandacaru, juazeiro, umbu, entre outras.",
            hidrografia: "abriga rios intermitentes, ou seja, que secam durante um período do ano e poucos rios perenes como o São Francisco.",
            clima: "semiárido, com período de chuva e de seca",
            vegetacao: "árvores baixas e tortuosas, paisagem composta por arbustos e cactos que se adaptam a ambientes com pouca disponibilidade de água e clima seco.",
            solo: "arenoso, pedregoso, rasos e moderadamente profundos. São pouco férteis e de matéria orgânica, mas abundante em minerais.",
        },
        {
            bioma: "Pampa",
            sobre: "Ocupa 2% do território nacional e o seu nome tem origem indígena, que significa 'terra plana'",
            fauna: "principais representantes são os perdizes, ema, pica-pau, joão-de-barro e preá.",
            flora: "aproximadamente 3 mil espécies de predominância gramíneas, como capim-forquilha, grama-tapete, babosa-do-campo, etc.",
            hidrografia: "tem duas bacias hidrográficas navegáveis e com grande potencial hidrelétrico. Os principais rios são o Rio Uruguai, Rio Santa Maria, Rio da Prata, Rio Jacuí, Rio Ibicuí e Rio Vacacaí.",
            clima: "temperado do tipo subtropical frio e apresenta as quatro estações bem difinidas.",
            vegetacao: "vegetação campestres como gramíneas que podem ser caracterizados por campos com e sem arbustos.",
            solo: "pouco fertéis, devido a prática agrícola e pecuária, grande parte do bioma foi devastada tornando o solo arenoso.",
        },
        {
            bioma: "Pantanal",
            sobre: "Ocupa aproximadamente 2% território nacional e contém a maior planície inundada contínua do planeta.",
            fauna: "apresenta uma característica incomum, pois abrigam espécies ameaças de outros biomas, além disso, abriga-se as suas próprias espécies, seus principais representantes são tuiuiú, cervo-do-pantana, arara-azul, jacaré-do-pantanal entre outros.",
            flora: "cerca de 2 mil espécies de plantas, muitas servem para fins medicinais.",
            hidrografia: "é composta pela bacia hidrográfica do Rio Paraguai e rios que o alimenta. Em épocas de cheia, boa parte da planície pantaneira alaga.",
            clima: "tropical, apresentando períodos de cheia e seca.",
            vegetacao: "composta por matas, campos inundáveis (brejo) e savanas, ao longo do curso dos rios, apresenta-se mata auxiliares mais densas, ademais, varia conforme o relevo.",
            solo: "baixa impermeabilidade, pouco fértil e apresenta excesso de água.",
        },
    ];

    const [bottomValue] = useState(new Animated.Value(-550));
    const [bottomValue2] = useState(new Animated.Value(-750));

    const [selectedBioma, setSelectedBioma] = useState({
        bioma: '',
        sobre: '',
        fauna: '',
        flora: '',
        hidrografia: '',
        clima: '',
        vegetacao: '',
        solo: ''
    });

    function clickAperece() {
        Animated.timing(bottomValue, {
            toValue: 0,
            duration: 300,
            useNativeDriver: false
        }).start();
    }
    function clickDesaperece() {
        Animated.timing(bottomValue, {
            toValue: -550,
            duration: 300,
            useNativeDriver: false
        }).start();
    }

    function clickAperece2(){
        Animated.timing(bottomValue2, {
            toValue: 0,
            duration: 300,
            useNativeDriver: false
        }).start();
    }
    function clickDesaperece2() {
        Animated.timing(bottomValue2, {
            toValue: -750,
            duration: 300,
            useNativeDriver: false
        }).start();
    }

    function mudaTexto(params: number) {
        setSelectedBioma(biomas[params]); // Update state with selected bioma details
    }

    const TipoLixo = ({ cor, linha, equipamentos, exemplos }) => (
        <View style={styles.classificacao}>
            <Image source={cor} style={styles.lixeira} />
            <View style={styles.tipoLixoContainer}>
                <Text style={styles.texto}>{linha}</Text>
                <Text style={styles.texto}>{equipamentos}</Text>
                <Text style={styles.texto}>{exemplos}</Text>
            </View>
        </View>
    );

    return (
        <View style={[styles.container]}>
            <View style={[styles.topo]}>
                <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.navigate('Home')}>
                    <Image source={require('@/assets/images/seta.png')} style={styles.seta} />
                </TouchableOpacity>
                <Text style={[styles.titulo]}>Biomas</Text>
            </View>
            <View style={[styles.biomas]}>
                <TouchableOpacity 
                    style={[styles.bioma, styles.sombra]} 
                    activeOpacity={0.7} 
                    onPress={() => {
                        clickAperece2();
                    }}
                >
                    <Image source={require('@/assets/images/lixeiraC.png')} style={[styles.imgBioma]} />
                    <Text style={[styles.subTitulo]}>{lixo[0].bioma}</Text>
                </TouchableOpacity>
            </View>
            <View style={[styles.biomas]}>
                {biomas.map((biomaData, index) => (
                    <TouchableOpacity 
                        key={index} 
                        style={[styles.bioma, styles.sombra]} 
                        activeOpacity={0.7} 
                        onPress={() => {
                            clickAperece();
                            mudaTexto(index);
                        }}
                    >
                        <Image source={require('@/assets/images/bioma.png')} style={[styles.imgBioma]} />
                        <Text style={[styles.subTitulo]}>{biomaData.bioma}</Text>
                    </TouchableOpacity>
                ))}
            </View>
            <Animated.View style={[styles.caixaInfo, styles.sombra, { bottom: bottomValue2 }]}>
                <TouchableOpacity style={[styles.fechar]} onPress={clickDesaperece2}>
                    <Text style={[styles.colorFechar]}>Fechar</Text>
                </TouchableOpacity>
                <Text style={[styles.color]}>{lixo[0].bioma}</Text>
                <ScrollView style={[styles.info]}>
                    <Text style={[styles.color]}>{lixo[0].sobre}</Text>
                    <View style={styles.gap}>
                        <Text style={styles.color}>{lixo[0].title}</Text>
                        <Text style={styles.color}>{lixo[0].subTitle}</Text>

                        <TipoLixo 
                            cor={require('@/assets/images/verde.png')}
                            linha={lixo[0].classificao.verde.linha}
                            equipamentos={lixo[0].classificao.verde.equipamentos}
                            exemplos={lixo[0].classificao.verde.exemplos}
                        />

                        <TipoLixo 
                            cor={require('@/assets/images/marrom.png')}
                            linha={lixo[0].classificao.marrom.linha}
                            equipamentos={lixo[0].classificao.marrom.equipamentos}
                            exemplos={lixo[0].classificao.marrom.exemplos}
                        />

                        <TipoLixo 
                            cor={require('@/assets/images/azul.png')}
                            linha={lixo[0].classificao.azul.linha}
                            equipamentos={lixo[0].classificao.azul.equipamentos}
                            exemplos={lixo[0].classificao.azul.exemplos}
                        />

                        <TipoLixo 
                            cor={require('@/assets/images/branco.png')}
                            linha={lixo[0].classificao.branca.linha}
                            equipamentos={lixo[0].classificao.branca.equipamentos}
                            exemplos={lixo[0].classificao.branca.exemplos}
                        />
                    </View>
                </ScrollView>
            </Animated.View>
            <Animated.View style={[styles.caixaInfo, styles.sombra, { bottom: bottomValue }]}>
                <TouchableOpacity style={[styles.fechar]} onPress={clickDesaperece}>
                    <Text style={[styles.colorFechar]}>Fechar</Text>
                </TouchableOpacity>
                <Text style={[styles.color]}>{selectedBioma.bioma}</Text>
                <View>
                    <Text style={[styles.color]}>{selectedBioma.sobre}</Text>
                    <View>
                        <Text style={[styles.color, styles.negrito]}>Características:</Text>
                        <Text style={[styles.color]}><Text style={[styles.negrito]}>Fauna:</Text> {selectedBioma.fauna}</Text>
                        <Text style={[styles.color]}><Text style={[styles.negrito]}>Flora:</Text> {selectedBioma.flora}</Text>
                        <Text style={[styles.color]}><Text style={[styles.negrito]}>Hidrografia:</Text> {selectedBioma.hidrografia}</Text>
                        <Text style={[styles.color]}><Text style={[styles.negrito]}>Clima:</Text> {selectedBioma.clima}</Text>
                        <Text style={[styles.color]}><Text style={[styles.negrito]}>Vegetação:</Text> {selectedBioma.vegetacao}</Text>
                        <Text style={[styles.color]}><Text style={[styles.negrito]}>Solo:</Text> {selectedBioma.solo}</Text>
                    </View>
                </View>
            </Animated.View>
        </View>
    );
}

const styles = StyleSheet.create({
    info: {
        flex: 1,
        padding: 20,
        maxHeight: "100%",
    },
    gap: {
        marginVertical: 10,
    },
    texto: {
        color: '#333',
    },

    container:{
        flex: 1,
        backgroundColor: "#F3F3F3",
        justifyContent: 'flex-start',
        marginTop: 50,
        marginStart: 20,
        marginLeft: 20,
        marginRight: 20,
        gap: 8,
    },

    header: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },    

    negrito:{
        fontWeight: 'bold',
    },
    colorFechar:{
        color: 'black',
    },
    color:{
        color: '#ffffff',
    },

    titulo:{
        color: 'gray',
        fontWeight: 'bold',
        fontSize: 27
    },

    subTitulo: {
        color: 'gray',
        fontWeight: 'bold',
        fontSize: 25,
        width: 180
    },

    topo:{
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        gap: 10,
    },

    biomas:{
        flexDirection: 'column',
        gap: 10,
    },
    bioma:{
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 5,
        gap: 10,
    },
    imgBioma:{
        width: 50,
        height: 50,
        backgroundColor: '#BCE954',
        borderRadius: 100,
    },

    seta:{
        width: 50,
        height: 50,
    },

    caixaInfo:{
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#023047',
        position: 'absolute',
        width: '100%',
        maxHeight: "60%",
        padding: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        gap: 10,
    },
    fechar:{
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 2,
    },

    classificacao: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    lixeira: {
        width: 50,
        height: 50,
        marginRight: 10,
    },
    tipoLixoContainer: {
        flex: 1,
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 1,
    },

    sombra:{
        shadowColor: '#333333',
        shadowOffset: {
          width: 6,
          height: 6,
        },
        shadowOpacity: 0.6,
        shadowRadius: 4,
        elevation: 10,
    },
});