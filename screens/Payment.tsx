import { SafeAreaView, View, Pressable, Text, StyleSheet, Image, FlatList, ScrollView, TouchableOpacity, TextInput } from "react-native";
import { faAngleLeft, faClock, faFilter, faLocationCrosshairs, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { useFonts } from "expo-font";
import { faClockFour } from "@fortawesome/free-regular-svg-icons";
import ButtonWithProps from "../components/buttonWithProps";
import { LinearGradient } from "expo-linear-gradient"
const Payment: React.FC = () => {
    const navigation = useNavigation();
    const [fontsLoaded] = useFonts({
        'Avenir': require('../assets/avenir_ff/AvenirLTStd-Book.otf'),
        'Avenirbold': require('../assets/avenir_ff/AvenirLTStd-Black.otf'),
        'Avenirroman': require('../assets/avenir_ff/AvenirLTStd-Roman.otf'),
    });
    if (!fontsLoaded) return null;

    return (
        <ScrollView>
        <SafeAreaView style={{ flex: 1, marginTop: 20, alignItems: 'center', backgroundColor: '#F4F4FA' }}>

            <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'flex-start', gap: 100, marginLeft: 50, alignItems: "flex-start", marginTop: 50, marginBottom: 30, }}>
                <Pressable style={styles.back} onPress={() => navigation.goBack()}>
                    <FontAwesomeIcon icon={faAngleLeft} />
                </Pressable>
                <Text style={{ fontFamily: 'Avenirroman', fontSize: 22 }}>Payment</Text>
            </View>

            <View style={{ backgroundColor: 'white', paddingHorizontal: 20, borderRadius: 20 }}>
                <View>
                    <Image source={require("../assets/paymentphoto.png")} style={{ width: 300, height: 200, resizeMode: 'contain' }} />

                </View>
                <View style={{ alignItems: 'center', marginTop: -20 }}>
                    <Text style={{ color: "black", fontFamily: 'Avenirroman', fontSize: 25, marginBottom: 5 }}>Graha Mall</Text>
                    <Text style={{ color: "#888", fontFamily: 'Avenirroman', fontSize: 15, letterSpacing: 0.3 }}>123 Dhaka Street</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 20, paddingBottom: 20 }}>
                    <View style={{ backgroundColor: "#FFF3F3", padding: 10, flexDirection: 'row', borderRadius: 10 }}>
                        <FontAwesomeIcon icon={faLocationDot} color="#F43939" />
                        <Text style={{ fontFamily: 'Avenirbold', color: "#F43939" }}> A-6</Text>
                    </View>
                    <View style={{ backgroundColor: "#FFF3F3", padding: 10, flexDirection: 'row', borderRadius: 10 }}>
                        <FontAwesomeIcon icon={faClockFour} color="#F43939" />
                        <Text style={{ fontFamily: 'Avenirbold', color: "#F43939" }}> 4 hours</Text>
                    </View>
                </View>
            </View>
            <View style={{
                flexDirection: 'row', alignItems: "center", justifyContent: "space-around", width: "100%",
            }}>
                <View style={{
                    flexDirection: 'row', alignItems: "center", justifyContent: "space-between", height: 60, width: '95%',
                    borderRadius: 20, backgroundColor: "white", paddingHorizontal: 20, marginTop: 10
                }}>
                    <TextInput style={{ fontFamily: 'Avenir', width: '80%' }} placeholder="Input voucher code" />
                    <Text style={{ fontFamily: 'Avenirbold', color: "#F43939" }}>Use</Text>
                </View>
            </View>
            <View style={{
                alignItems: "center", width: "100%",
            }}>
                <View style={{ backgroundColor: 'white', borderRadius: 20, paddingVertical: 20, marginVertical: 10}}>
                    <View style={{
                        flexDirection: 'row', alignItems: "center", justifyContent: "space-between", marginVertical: 10, width: '95%',
                        paddingHorizontal: 20
                    }}>
                        <Text style={{ fontFamily: 'Avenir' }}>Sub total</Text>
                        <Text style={{ fontFamily: 'Avenir' }}>$30,00</Text>
                    </View>
                    <View style={{
                        flexDirection: 'row', alignItems: "center", justifyContent: "space-between", width: '95%',
                        paddingHorizontal: 20,
                    }}>
                        <Text style={{ fontFamily: 'Avenir' }}>Insurance</Text>
                        <Text style={{ fontFamily: 'Avenir' }}>$5,00</Text>
                    </View>
                    <View style={{ borderBottomWidth: 1, borderColor: '#bbb', width: '80%', marginVertical: 10 }}></View>
                    <View style={{
                        flexDirection: 'row', alignItems: "center", justifyContent: "space-between", width: '95%',
                        paddingHorizontal: 20,
                    }}>
                        <Text style={{ fontFamily: 'Avenirbold' }}>Total</Text>
                        <Text style={{ fontFamily: 'Avenirbold' }}>$35,00</Text>
                    </View>
                </View>
            </View>
            <TouchableOpacity style={{ width:'80%' }} onPress={()=>navigation.navigate('paymentDetails' as never)}>
                <ButtonWithProps textColor="white" color="black" title="Pay Now" />
            </TouchableOpacity>
        </SafeAreaView>
        </ScrollView>
    )
}
export default Payment;

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
    },
    back: {
        width: 35,
        height: 35,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#EAEAF3',
    }
})