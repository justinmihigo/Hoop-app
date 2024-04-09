import { KeyboardAvoidingView, SafeAreaView, View, Pressable, Text, StyleSheet, Dimensions, Platform } from "react-native";
import OTPInputView from "@twotalltotems/react-native-otp-input"
import { CountdownCircleTimer } from "react-native-countdown-circle-timer"
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { useFonts } from "expo-font";
const OtpScreen: React.FC = () => {
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
                behavior={Platform.OS == "ios" ? 'padding' : "height"}
                style={
                    {
                        width: '100%',
                        height: '100%',
                        backgroundColor: '#EAEAF3',
                        alignItems: 'center',
                    }
                }
            >
                <View style={{ flexDirection: 'row', gap: 40, alignItems: "flex-start", marginTop: 40, marginBottom: 40, }}>
                    <Pressable style={styles.back} onPress={()=> navigation.goBack()}>
                        <FontAwesomeIcon icon={faAngleLeft}/>
                    </Pressable>
                    <Text style={{ fontFamily: 'Avenirroman', fontSize: 25 }}>OTP Verification</Text>
                </View>
                <View style={{ width: '80%' }}>
                    <Text style={{ textAlign: 'center', fontFamily: 'Avenir', lineHeight: 30, fontSize: 17 }}>
                        We have send an OTP on given number +62 8123456789
                    </Text>
                </View>
                <View>
                    <OTPInputView
                        style={{ width: '70%', height: 200, }}
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
                        onCodeFilled={(code => alert(code))}
                    />

                </View>
                <View>
                    <CountdownCircleTimer
                        isPlaying
                        duration={90}
                        colors={['#F43939', '#F7B801', '#A30000', '#A30000']}
                        colorsTime={[90, 60, 30, 0]}
                        size={50}
                        strokeWidth={5}

                    >
                        {({ remainingTime }) => <Text style={{ color: '#F43939' }}>{remainingTime}</Text>}
                    </CountdownCircleTimer>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}
export default OtpScreen;

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