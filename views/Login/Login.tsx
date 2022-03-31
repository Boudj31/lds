import React from "react";
import {View, Text, Alert, StyleSheet, TextInput, ScrollView, Button} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {Separator} from "../../components/Separator";
import {ButtonCustom} from "../../components/Button";



interface LoginProps {}

export const Login: React.FunctionComponent<LoginProps> = ({}) => {
    const [password, onChangePassword] = React.useState("");
    const [email, onChangeEmail] = React.useState("");

    function submit() {
        Alert.alert('Connexion réussi')
        onChangePassword("")
        onChangeEmail("")

    }

    return (
        <SafeAreaView style={styles.container}>
                <View style={styles.container}>
                    <Text style={styles.headerH1} >Espace Connexion</Text>
                    <Text style={styles.headerH2} >Saissisez vos identifiants ci dessous:.</Text>
                    <Separator />
                    <View >
                        <View style={styles.alignElement}>
                            <Text>Email: </Text>
                            <TextInput
                                style={styles.input}
                                placeholder="john@doe.fr"
                                onChangeText={onChangeEmail}
                                value={email}

                            />
                        </View>
                        <View style={styles.alignElement}>
                            <Text style={styles.textLeft}>Mot De Passe: </Text>
                            <TextInput
                                style={styles.input}
                                placeholder="*********"
                                onChangeText={onChangePassword}
                                value={password}
                            />

                        </View>
                        <Button title={"Mot de passe oublié ?"} onPress={Alert.alert("mot de passe rest")} color={"#343F52"}/>
                    </View>
                    <Separator />
                    <ButtonCustom  title='Envoyer !' onPress={()=>submit()} />

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
        fontFamily: 'Jost-Variable'

    },

    headerH1: {
        fontSize: 37,
        fontWeight: "800",
        color: "#01ABE9",
        marginRight: 8,
        marginBottom: 12,
        fontFamily: 'Jost-Variable'

    },
    textLeft: {
        textAlign: 'left'
    },
    headerH2: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#343F52",
        fontFamily: 'Jost-Variable'
    },
    alignElement:{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: 'center',
        marginBottom: 8
    },
    input: {
        height: 40,
        margin: 12,
        width: 300,
        borderWidth: 0,
        color: "#343F52",
        padding: 20,
        borderRadius: 5,
        backgroundColor: "#FFF",
        fontFamily: 'Jost-Variable'
    },

});
