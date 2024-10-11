import { 
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
} from "react-native";
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/native-stack';

import React from 'react';

export default function Biomas(){
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
                <Text style={[styles.titulo]}>Biomas</Text>
            </View>
            <View style={[styles.biomas]}>
                <TouchableOpacity style={[styles.bioma, styles.sombra]} activeOpacity={0.7}>
                    <Image source={require('@/assets/images/bioma.png')} style={[styles.imgBioma]}/>
                    <Text style={[styles.subTitulo]}>Amazônia</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.bioma, styles.sombra]} activeOpacity={0.7}>
                    <Image source={require('@/assets/images/bioma.png')} style={[styles.imgBioma]}/>
                    <Text style={[styles.subTitulo]}>Cerrado</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.bioma, styles.sombra]} activeOpacity={0.7}>
                    <Image source={require('@/assets/images/bioma.png')} style={[styles.imgBioma]}/>
                    <Text style={[styles.subTitulo]}>Caatinga</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.bioma, styles.sombra]} activeOpacity={0.7}>
                    <Image source={require('@/assets/images/bioma.png')} style={[styles.imgBioma]}/>
                    <Text style={[styles.subTitulo]}>Mata Atlântica</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.bioma, styles.sombra]} activeOpacity={0.7}>
                    <Image source={require('@/assets/images/bioma.png')} style={[styles.imgBioma]}/>
                    <Text style={[styles.subTitulo]}>Pampa</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.bioma, styles.sombra]} activeOpacity={0.7}>
                    <Image source={require('@/assets/images/bioma.png')} style={[styles.imgBioma]}/>
                    <Text style={[styles.subTitulo]}>Pantanal</Text>
                </TouchableOpacity>
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
        gap: 8
    },

    header: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
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