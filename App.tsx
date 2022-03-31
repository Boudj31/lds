import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import { Home } from './views/Home/Home';
import {Contact} from "./views/Contact";
import { useFonts } from 'expo-font';
import {RootNavigator} from "./navigation/RootNavigator";
import {NavigationContainer} from "@react-navigation/native";
import {TabBar} from "./navigation/TabBar";


export default function App() {
    let [fontsLoaded] = useFonts({
        "Jost-Variable": require("./assets/fonts/Jost-VariableFont_wght.ttf"),
        "Jost-Italic": require("./assets/fonts/Jost-Italic-VariableFont_wght.ttf"),
    });


    if (!fontsLoaded) {
        return (
            <View style={styles.container}>
                <Text>Chargement...</Text>
            </View>
        );
    }

        return (
            <NavigationContainer >
                    <TabBar />
                    <StatusBar style="auto"/>
            </NavigationContainer>

        );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F8FB',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Jost-Variable'

  },
  headerH1: {
    fontSize: 30,
    fontWeight: "800",
    color: "#01ABE9",
    marginRight: 8

  },
  headerH2: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#343F52",
  },
  header:{
   display: "flex",
   flexDirection: "column",
   justifyContent: "flex-start",
   alignItems: 'center',
   marginBottom: 24
  }
});
