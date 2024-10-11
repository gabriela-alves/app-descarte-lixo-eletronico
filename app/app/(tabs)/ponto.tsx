import React, { useState } from 'react';
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

export default function PontoColeta() {
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

    // State to manage the map's region
    const [region, setRegion] = useState({
        latitude: -23.0978, // Initial latitude
        longitude: -51.3883, // Initial longitude
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
    });

    const locations = [
        {
            name: "Sam’s Club",
            address: "Av. Salim Farah Maluf, 17",
            neighborhood: "Jardim das Rosas",
            coordinate: { latitude: -23.0978, longitude: -51.3883 },
        },
        {
            name: "Magazine Luiza do Prudenshopping",
            address: "Av. Manoel Goulart, 2400",
            neighborhood: "Jardim das Rosas",
            coordinate: { latitude: -23.0974, longitude: -51.3896 },
        },
        {
            name: "Cooperlix",
            address: "Rua Helena Ferrante Borguinhão, S/N",
            neighborhood: "Distrito Industrial",
            coordinate: { latitude: -23.0960, longitude: -51.3870 },
        },
    ];

    const handleLocationPress = (coordinate) => {
        setRegion({
            ...region,
            latitude: coordinate.latitude,
            longitude: coordinate.longitude,
        });
    };

    return (
        <View style={styles.container}>
            <View style={styles.topo}>
                <TouchableOpacity style={styles.sair} activeOpacity={0.5} onPress={() => navigation.navigate('Home')}>
                    <Image source={require('@/assets/images/seta.png')} style={styles.seta} />
                </TouchableOpacity>
                <View>
                    <Text style={styles.titulo}>Pontos de Descarte</Text>
                </View>
            </View>
            <View style={[styles.locais]}>
                {locations.map((location, index) => (
                    <TouchableOpacity activeOpacity={0.5} key={index} style={[styles.local]} onPress={() => handleLocationPress(location.coordinate)}>
                        <Text style={[styles.negrito, styles.enderecoTxt]}>{location.name}</Text>
                        <Text style={[styles.enderecoTxt]}>{location.address}</Text>
                        <Text style={[styles.enderecoTxt]}>{location.neighborhood}</Text>
                    </TouchableOpacity>
                ))}
            </View>
            <View style={[styles.mapa, styles.sombra]}>
                <MapView 
                    style={styles.map} 
                    region={region} // Use the dynamic region state here
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
    negrito:{
        fontWeight: 'bold',
    },
    mapa:{
        height: 300,
        width: 'auto',
        overflow: 'hidden',
        borderRadius: 15,
    },
    map: {
        flex: 1,
        width: '100%',
        height: '100%',
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
        marginBottom: 10,
        paddingBottom: 10,
    },
    sair:{
        marginRight: 10,
    },
    seta:{
        width: 50,
        height: 50,
    },
    locais:{
        marginBottom: 10,
        gap: 10,
    },
    local:{
    },
    enderecoTxt:{
        fontSize: 20,
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