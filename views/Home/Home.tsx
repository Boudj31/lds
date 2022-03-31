import React from "react";
import {View, Text, Image, Alert, StyleSheet, ScrollView} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {Separator} from "../../components/Separator";
import {ButtonCustom} from "../../components/Button";
import {useNavigation} from "@react-navigation/native";





interface HomeProps {}


export const Home: React.FunctionComponent<HomeProps> = ({}) => {

    const navigation = useNavigation();
    const goContact = () => {
        navigation.navigate("Contact" as never)
    }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerH1} >LE LABO DU SOURIRE</Text>
           <Image style={{width: 60,height:60}}
             source={{
              uri: "http://www.lelabodusourire.com/wp-content/uploads/2019/06/cropped-02C_LELABODUSOURIRE_LOGO-SOMBRE-01-2.png" }} />
         </View>


       <Text style={styles.headerH2} >Le Labo du Sourire vous souhaite la bienvenue</Text>
       <Separator />
      <Image style={{width: 300,height:300}} 
             source={{
              uri: "http://www.lelabodusourire.com/wp-content/uploads/2019/12/LDS_Livrable-home-2-Blanchiment.jpg" }} />
       <Separator />
       <ButtonCustom  title='Appelez Nous' onPress={() => Alert.alert('0787878787')} />
       <Separator />
       <ButtonCustom title='Envoyez-nous un email' onPress={() => goContact()} />
       <Separator />
       <ButtonCustom title='Google My Buisness' onPress={() => Alert.alert('rachid.dev@gamil.com')} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F2F8FB',
        alignItems: 'center',
        justifyContent: 'center',

    },
    headerH1: {
        fontSize: 34,
        fontWeight: "800",
        color: "#01ABE9",
        marginRight: 8,
        marginBottom: 12,
        fontFamily: 'Jost-Variable'
  
    },
    headerH2: {
      fontSize: 18,
      fontWeight: "bold",
      color: "#343F52",
        fontFamily: 'Jost-Variable'
    },
    header:{
     display: "flex",
     flexDirection: "row",
     justifyContent: "space-between",
     alignItems: 'center',
     marginBottom: 24
    }
  });
  