import { NavigationContainer } from "@react-navigation/native";
import { Routes } from "./routs";

export default function HomeScreen() {
  return (
    <NavigationContainer independent={(true)}>
      <Routes/>
    </NavigationContainer>
  );
}