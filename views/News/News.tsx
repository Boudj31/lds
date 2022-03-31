import React from "react";
import {View, Text, Image, Alert, StyleSheet, ScrollView} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {Separator} from "../../components/Separator";
import {ButtonCustom} from "../../components/Button";
import {useNavigation} from "@react-navigation/native";





interface NewsProps {}


export const News: React.FunctionComponent<NewsProps> = ({}) => {

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
            <View style={styles.container}>
                <Text style={styles.headerH1} >Nos dernières actus</Text>
                <Text style={styles.headerH2} >La nature fait ce qu'elle peut.</Text>
                <Text style={styles.headerH2} >On s'occupe du reste.</Text>
                <Separator />
                <View style={styles.header}>
                    <Image style={{width: 100,height:100}}
                           source={{
                               uri: "http://www.lelabodusourire.com/wp-content/uploads/2019/12/LDS_Livrable-home-2-Blanchiment.jpg" }} />
                    <Text>L'alignement dentaire est une méthode simple pour vous permettre de retrouver plus beau sourire rapidement !</Text>
                </View>

                <View style={styles.header}>
                    <Image style={{width: 100,height:100}}
                           source={{
                               uri: "http://www.lelabodusourire.com/wp-content/uploads/2019/12/LDS_Livrable-home-2-Blanchiment.jpg" }} />
                    <Text>L'alignement dentaire est une méthode simple pour vous permettre de retrouver plus beau sourire rapidement !</Text>
                </View>
                <View style={styles.header}>
                    <Image style={{width: 100,height:100}}
                           source={{
                               uri: "http://www.lelabodusourire.com/wp-content/uploads/2019/12/LDS_Livrable-home-2-Blanchiment.jpg" }} />
                    <Text>L'alignement dentaire est une méthode simple pour vous permettre de retrouver plus beau sourire rapidement !</Text>
                </View>
                <View style={styles.header}>
                    <Image style={{width: 100,height:100}}
                           source={{
                               uri: "http://www.lelabodusourire.com/wp-content/uploads/2019/12/LDS_Livrable-home-2-Blanchiment.jpg" }} />
                    <Text>L'alignement dentaire est une méthode simple pour vous permettre de retrouver plus beau sourire rapidement !</Text>
                </View>
                <View style={styles.header}>
                    <Image style={{width: 100,height:100}}
                           source={{
                               uri: "http://www.lelabodusourire.com/wp-content/uploads/2019/12/LDS_Livrable-home-2-Blanchiment.jpg" }} />
                    <Text>L'alignement dentaire est une méthode simple pour vous permettre de retrouver plus beau sourire rapidement !</Text>
                </View>

                <Separator />
            </View>
            </ScrollView>
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
        maxWidth: "100%",
        justifyContent: "center",
        alignItems: 'center',
        marginBottom: 24
    }
});
