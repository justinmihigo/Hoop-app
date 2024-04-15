import { KeyboardAvoidingView, SafeAreaView, View, Pressable, Text, StyleSheet, Dimensions, Platform, Image } from "react-native";
import OTPInputView from "@twotalltotems/react-native-otp-input"
import { CountdownCircleTimer } from "react-native-countdown-circle-timer"
import { faFingerprint } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useNavigation } from "@react-navigation/native";
import * as LocalAuthentication from "expo-local-authentication"
import React, { useEffect, useState } from "react";
import { useFonts } from "expo-font";
const PinVerify: React.FC = () => {
    const [isBiometricSupported, setIsBiometricSupported]= useState(false);
    const [isAuthenticated, setIsAuthenticated]= useState(false);
    useEffect(()=>{
        (async()=>{
            const compatible= await LocalAuthentication.hasHardwareAsync();
            setIsBiometricSupported(compatible);
        })();
        
    });
    const onAuthenticate=()=>{
        (async()=>{
            const authenticated= await LocalAuthentication.authenticateAsync({
                promptMessage: "Authentication",
                fallbackLabel: "Use password instead"
            });
            setIsAuthenticated(authenticated.success);
        })();
    }
    const navigation=useNavigation();
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
                <Image source={require("../assets/asset-pin.png")} style={{width:'90%',height: 250, resizeMode:'contain'}}/>
                <View style={{ flexDirection: 'row', gap: 40, alignItems: "flex-start", marginTop: 10, marginBottom: 40, }}>
                    <Text style={{ fontFamily: 'Avenir', fontSize: 25 }}>Enter your passcode</Text>
                </View>
                <View style={{ width: '70%' }}>
                    <Text style={{ textAlign: 'center', fontFamily: 'Avenir', lineHeight: 30, fontSize: 16, color:'#888' }}>
                    For the security of your account, please enter the security code
                    </Text>
                </View>
                <View>
                    <OTPInputView
                        style={{ width: '70%', height: 100, }}
                        pinCount={4}
                        autoFocusOnLoad
                        codeInputFieldStyle={{
                            width: 50,
                            height: 40,
                            borderWidth: 0,
                            color: 'black',
                            fontSize: 25,
                            fontFamily: 'Avenirroman',
                            textAlign: 'center',
                            borderBottomWidth: 2,
                            borderColor: 'black',
                        }}
                        codeInputHighlightStyle={
                            {
                                borderColor: '#999',
                            }
                        }
                        onCodeFilled={(code => navigation.navigate('home' as never))}
                    />

                </View>
                <Pressable style={{marginTop: 30, borderWidth: 2, padding: 10, borderRadius:10, borderStyle:"dashed"}} onPress={onAuthenticate}>
                    <FontAwesomeIcon icon={faFingerprint} size={50}/>
                </Pressable>
                <Text style={{fontFamily:'Avenir', marginTop: 20}}><Text onPress={onAuthenticate} style={{color:'#F43939'}}>Scan</Text> to verify for easy security</Text>
                <View>
                    
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}
export default PinVerify;

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