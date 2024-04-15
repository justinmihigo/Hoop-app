import { KeyboardAvoidingView, SafeAreaView, View, Pressable, Text, StyleSheet, Dimensions, Platform, Image, TouchableOpacity } from "react-native";
import OTPInputView from "@twotalltotems/react-native-otp-input"
import { CountdownCircleTimer } from "react-native-countdown-circle-timer"
import { faFingerprint } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useNavigation } from "@react-navigation/native";
import * as LocalAuthentication from "expo-local-authentication"
import React, { useEffect, useState } from "react";
import { useFonts } from "expo-font";
import ButtonWithProps from "../components/buttonWithProps";
import { faCommentDots, faEnvelope } from "@fortawesome/free-regular-svg-icons";
const PaymentSuccess: React.FC = () => {

    const navigation = useNavigation();
    const [fontsLoaded] = useFonts({
        'Avenir': require('../assets/avenir_ff/AvenirLTStd-Book.otf'),
        'Avenirbold': require('../assets/avenir_ff/AvenirLTStd-Black.otf'),
        'Avenirroman': require('../assets/avenir_ff/AvenirLTStd-Roman.otf'),
    });
    if (!fontsLoaded) return null;
    const screenWidth = Dimensions.get("screen").width;
    return (
        <SafeAreaView style={{ flex: 1, marginTop: 20, alignItems: 'center' }}>
            <KeyboardAvoidingView
                style={
                    {
                        width: '100%',
                        height: '100%',
                        backgroundColor: '#EAEAF3',
                        alignItems: 'center',
                    }
                }
            >
                <Image source={require("../assets/paymentsuccess.png")} style={{ width: '90%', height: 250, resizeMode: 'contain', marginVertical: 30 }} />
                <View style={{ flexDirection: 'row', gap: 40, alignItems: "flex-start", marginTop: 10, marginBottom: 20, }}>
                    <Text style={{ fontFamily: 'Avenir', fontSize: 25 }}>Payment Successful</Text>
                </View>
                <View style={{ width: '80%' }}>
                    <Text style={{ textAlign: 'center', fontFamily: 'Avenir', lineHeight: 30, fontSize: 15, color: '#888' }}>
                        Congrats on your reserved parking space
                    </Text>
                </View>

                <Text style={{ fontFamily: 'Avenirbold', marginTop: 20, fontSize: 17 }}>Receipt</Text>
                <View style={{ flexDirection: 'row', gap: 40, marginVertical: 20 }}>
                    <TouchableOpacity style={{ width: 50 }}>
                        <ButtonWithProps icon={faEnvelope} color={"white"} textColor="#F43939"></ButtonWithProps>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ width: 50 }}>
                        <ButtonWithProps icon={faCommentDots} color={"white"} textColor="#F43939"></ButtonWithProps>
                    </TouchableOpacity>
                </View>
                <View style={{width:"100%", justifyContent: "center", alignItems:"center"}}>
                    <TouchableOpacity style={{ width: '80%' }} onPress={()=>navigation.navigate('home' as never)}>
                        <ButtonWithProps title="Back to Home" color={"black"} textColor="#fff"></ButtonWithProps>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}
export default PaymentSuccess;

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
    },
    back: {
        width: 40,
        height: 40,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0, 0, 0.2)',
    }
})