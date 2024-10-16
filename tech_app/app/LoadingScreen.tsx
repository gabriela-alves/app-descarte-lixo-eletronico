// LoadingScreen.js
import React from 'react';
import { 
    View, 
    StyleSheet, 
    Image, 
} from 'react-native';

const LoadingScreen = () => {
  return (
    <View style={styles.tudo}>
        <View style={styles.container}>
            <Image style={{height: "20%", width: "90%"}} source={require('@/assets/images/logo.png')}/>
        </View>
        <View style={styles.colaboradores}>
            <Image style={styles.images} source={require('@/assets/images/logo-etec.png')}/>
            <Image style={styles.images} source={require('@/assets/images/logo-centro.png')}/>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
    tudo: {
        flex: 1,
    },

    container: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1F2035',
    },

    colaboradores:{
        display: "flex",
        flexDirection: "row",
        padding: 10,
        justifyContent: "space-around",
        backgroundColor: "#fff",
        height: "15%",
    },

    images:{
        height: "100%",
        width: "30%"
    }
});

export default LoadingScreen;