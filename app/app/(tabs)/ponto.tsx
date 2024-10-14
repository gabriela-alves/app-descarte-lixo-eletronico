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

    // State to manage the map's region and selected location
    const [region, setRegion] = useState({
        latitude: -22.115024466102977,
        longitude: -51.41310266221828,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
    });

    const [selectedLocation, setSelectedLocation] = useState({
        name: '',
        address: '',
        neighborhood: '',
        coordinate: { latitude: -22.115024466102977, longitude: -51.41310266221828 },
    });

    const locations = [
        {
            name: "Sam’s Club",
            address: "Av. Salim Farah Maluf, 17",
            neighborhood: "Jardim das Rosas",
            coordinate: { latitude: -22.115024466102977, longitude: -51.41310266221828 },
        },
        {
            name: "Magazine Luiza do Prudenshopping",
            address: "Av. Manoel Goulart, 2400",
            neighborhood: "Jardim das Rosas",
            coordinate: { latitude: -22.11610104880266, longitude: -51.4074458045471 },
        },
        {
            name: "Cooperlix",
            address: "Rua Helena Ferrante Borguinhão, S/N",
            neighborhood: "Distrito Industrial",
            coordinate: { latitude: -24.019343281813157, longitude: -46.46699119099168 },
        },
    ];

    const handleLocationPress = (location) => {
        setRegion({
            ...region,
            latitude: location.coordinate.latitude,
            longitude: location.coordinate.longitude,
        });
        setSelectedLocation(location);
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
                    <TouchableOpacity 
                        activeOpacity={0.5} 
                        key={index} 
                        style={[styles.local, styles.sombra]} 
                        onPress={() => handleLocationPress(location)}
                    >
                        <Text style={[styles.negrito, styles.enderecoTxt]}>{location.name}</Text>
                        <Text style={[styles.enderecoTxt]}>{location.address}</Text>
                        <Text style={[styles.enderecoTxt]}>{location.neighborhood}</Text>
                    </TouchableOpacity>
                ))}
            </View>
            <View style={[styles.mapa, styles.sombra]}>
                <MapView 
                    style={styles.map} 
                    region={region}
                >
                    {/* Marker for the selected location */}
                    <Marker 
                        coordinate={selectedLocation.coordinate} 
                        title={selectedLocation.name} 
                        description={`${selectedLocation.address}, ${selectedLocation.neighborhood}`} 
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
        marginHorizontal: 20,
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
        backgroundColor: "#e9ecef",
        padding: 10,
        borderRadius: 10,
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