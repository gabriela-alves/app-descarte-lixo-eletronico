import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SobreNos from "./sobre";
import PontoColeta from "./ponto";
import HomeScreen from './index';
import LixoScreen from "./tela";
import Biomas from "./biomas";

import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export function Routes() {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused, size, color }) => {
                        if (focused) {
                            return <Ionicons size={size} color={color} name="home" />
                        }
                        return <Ionicons size={size} color={color} name="home-outline" />
                    }
                }}
            />
            <Tab.Screen
                name="Lixo"
                component={LixoScreen}
                initialParams={{ imgUrlInicial: '' }} // Adicione seus parâmetros aqui
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused, size, color }) => {
                        if (focused) {
                            return <Ionicons size={size} color={color} name="trash" />;
                        }
                        return <Ionicons size={size} color={color} name="trash-outline" />;
                    },
                }}
            />

            <Tab.Screen
                name="Descartes"
                component={PontoColeta}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused, size, color }) => {
                        if (focused) {
                            return <Ionicons size={size} color={color} name="location" />
                        }
                        return <Ionicons size={size} color={color} name="location-outline" />
                    }
                }}

            />
            <Tab.Screen
                name="Biomas"
                component={Biomas}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused, size, color }) => {
                        if (focused) {
                            return <Ionicons size={size} color={color} name="leaf" />
                        }
                        return <Ionicons size={size} color={color} name="leaf-outline" />
                    }
                }}
            />
            <Tab.Screen
                name="Sobre"
                component={SobreNos}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused, size, color }) => {
                        if (focused) {
                            return <Ionicons size={size} color={color} name="people" />
                        }
                        return <Ionicons size={size} color={color} name="people-outline" />
                    }
                }}
            />
        </Tab.Navigator>
    )
}