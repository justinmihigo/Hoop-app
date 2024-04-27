import { View, Text, StyleSheet, SafeAreaView, ImageBackground, TextInput, TouchableOpacity, KeyboardAvoidingView, Alert } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import AppwriteService, { AppwriteDb } from "../src/appwrite/service";
import { error, success, successToast } from '../src/appwrite/alert';
import { ID } from 'appwrite';
import { AlertNotificationRoot, Dialog, ALERT_TYPE } from 'react-native-alert-notification';
export default function SignupSCreen() {
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigator = useNavigation()
    const navigation = useNavigation();
    useLayoutEffect(() => {
        navigator.setOptions({
            headerShown: false
        })
    }, [])
    const handleSignup = () => {
        if (!validateEmail()) {
            error("Enter a valid email address");
            // Dialog.show({
            //     type: ALERT_TYPE.DANGER,
            //     title: 'Error',
            //     textBody: "Enter a valid email address",
            //     button: 'OK',
            // });
        } else if (password !== confirmPassword) {
            console.log("password do not match")
            error(`password do not match`);
        }
        else if (email == '' || password == '') {
            error("all fields are required");
        }
        else {
            AppwriteService.createAccount({ email, password, phoneNumber })
                .then((res) => {
                    if (res) {
                        // successToast("success");
                        Alert.alert("Success", "account created succesfuly");

                        new AppwriteDb().createDocument({ userId: res.$id, email, password, phoneNumber })
                            .then((res) => {
                                console.log(res);
                                success("account created succesfuly");
                            }).catch((err) => {
                                console.log(err);
                                error("error creating account");
                            })

                        setTimeout(() => navigation.navigate("loginbyemail" as never));

                    }
                }).catch(e => {
                    Alert.alert("Error", e.message)
                    error("Error creating account");
                    return;
                });
        }
    }

    // Function to validate email format
    const validateEmail = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }


    const [fontLoaded] = useFonts({
        'Avenir': require('../assets/avenir_ff/AvenirLTStd-Book.otf'),
        'Avenirbold': require('../assets/avenir_ff/AvenirLTStd-Black.otf'),
        'Avenirroman': require('../assets/avenir_ff/AvenirLTStd-Roman.otf'),
    })
    if (!fontLoaded) return null;
    return (
        <SafeAreaView style={styles.parent}>

            <ImageBackground source={require("../assets/Group243.png")} style={styles.header}>
                <View style={{ padding: 20 }}>
                    <Text style={styles.headerText}>Let’s start!!</Text>
                </View>
            </ImageBackground>
            <View style={styles.content}>
                <View style={styles.container}>

                    <TextInput placeholder='Email' value={email} style={styles.input} onChangeText={setEmail} />
                    <TextInput placeholder='Password' value={password} style={styles.input} onChangeText={setPassword} secureTextEntry />
                    <TextInput placeholder='Password Authentication' value={confirmPassword} style={styles.input} onChangeText={setConfirmPassword} secureTextEntry />
                    <TextInput placeholder='Phone number' value={phoneNumber} style={styles.input} onChangeText={setPhoneNumber} />

                </View>
                <View style={styles.actions}>
                    <AlertNotificationRoot>
                        <TouchableOpacity style={styles.btn} onPress={handleSignup}>
                            <Text style={styles.inner}>Register</Text>
                        </TouchableOpacity>
                    </AlertNotificationRoot>
                </View>
                <View style={{ marginTop: 10 }}>
                    <Text style={styles.acts}>Have any account ? <Text style={{ color: "red", fontFamily: 'Avenir' }} onPress={() => navigator.navigate("login" as never)}>sign in</Text></Text>
                </View>
            </View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    parent: {
        flex: 1,
        backgroundColor: '#130F26',
        alignItems: 'center',
        flexDirection: "column"
    },

    header: {
        flex: 1,
        // backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: "flex-start",
        flexDirection: "row",
        width: "100%",
        // padding: 20,


    },

    headerText: {
        fontSize: 32,
        fontFamily: 'Avenirroman',
        color: "white",
        // fontFamily:"Avenir"

    },
    content: {
        flex: 2,
        backgroundColor: '#F4F4FA',
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: "column",

        width: "100%",
        borderTopRightRadius: 38,
        borderTopLeftRadius: 38,
        padding: 20
    },

    container: {
        width: "100%",
        gap: 10

    },
    input: {
        width: "100%",
        padding: 20,
        borderRadius: 15,
        backgroundColor: "white",
        fontFamily: 'Avenir',
        height: 60,
        fontSize: 18


    },

    btn: {
        backgroundColor: "#130F26",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        padding: 13,
        borderRadius: 15,
        height: 60,

    },

    inner: {
        color: "white",
        fontFamily: 'Avenir',
        fontSize: 20
    },

    actions: {
        width: "100%",
        flexDirection: "column",
    },

    acts: {
        textAlign: "center",
        marginTop: 20,
        color: "#2D2D2D80",
        fontFamily: 'Avenir'
    }

})

// font-family: Avenir;
// font-size: 32px;
// font-weight: 500;
// line-height: 43.71px;
// text-align: left;
