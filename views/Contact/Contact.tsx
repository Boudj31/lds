import React from "react";
import {View, Text, Alert, StyleSheet, TextInput, ScrollView} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {Separator} from "../../components/Separator";
import {ButtonCustom} from "../../components/Button";





interface ContactProps {}

export const Contact: React.FunctionComponent<ContactProps> = ({}) => {
    const [name, onChangeName] = React.useState("");
    const [email, onChangeEmail] = React.useState("");
    const [phone, onChangePhone] = React.useState("");
    const [entreprise, onChangeEntreprise] = React.useState("");
    const [subject, onChangeSubject] = React.useState("");
    const [message, onChangeMessage] = React.useState("");

    function submit() {
        Alert.alert('Votre message à bien été envoyé ! Merci ' + name)
        onChangeName("")
        onChangeEmail("")
        onChangePhone("")
        onChangeEntreprise("")
        onChangeSubject("")
        onChangeMessage("")
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
            <View style={styles.container}>
                    <Text style={styles.headerH1} >Contactez-nous</Text>
                <Text style={styles.headerH2} >Nous vous répondrons dans les plus brefs delais.</Text>
                <Separator />
                <View >
                    <View style={styles.alignElement}>
                       <Text>Nom*: </Text>
                       <TextInput
                          style={styles.input}
                          placeholder="Johnny Doe"
                          onChangeText={onChangeName}
                          value={name}
                        />
                    </View>
                    <View style={styles.alignElement}>
                    <Text style={styles.textLeft}>Email*: </Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Johnny Doe"
                        onChangeText={onChangeEmail}
                        value={email}
                    />
                    </View>
                    <View style={styles.alignElement}>
                    <Text>Numero de Téléphone: </Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Johnny Doe"
                        onChangeText={onChangePhone}
                        value={phone}
                        keyboardType="numeric"
                    />
                    </View>
                    <View style={styles.alignElement}>
                        <Text>Entreprise*: </Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Johnny Doe"
                            onChangeText={onChangeEntreprise}
                            value={entreprise}
                        />
                    </View>
                    <View style={styles.alignElement}>
                        <Text>Sujet*: </Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Johnny Doe"
                            onChangeText={onChangeSubject}
                            value={subject}
                        />
                    </View>
                    <View style={styles.alignElement}>
                        <Text>Message*: </Text>
                        <TextInput
                            multiline={true}
                            numberOfLines={10}
                            style={styles.textarea}
                            placeholder="Bonjour...."
                            onChangeText={onChangeMessage}
                            value={message}
                        />
                    </View>
                </View>
                <Separator />
                <ButtonCustom  title='Envoyer !' onPress={()=>submit()} />

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
            fontFamily: 'Jost-Variable'

        },
        family: {
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
        textarea: {
            height: 150,
            margin: 5,
            width: 300,
            textAlignVertical: 'top',
            borderWidth: 0,
            color: "#343F52",
            padding: 20,
            borderRadius: 5,
            backgroundColor: "#FFF",
            fontFamily: 'Jost-Variable'
        },
    });
