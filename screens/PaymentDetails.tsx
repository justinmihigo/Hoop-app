import { SafeAreaView, View, Pressable, Text, Switch,StyleSheet, Image, FlatList, ScrollView, TouchableOpacity, TextInput } from "react-native";
import { faAngleLeft, faAngleRight, faAngleUp, faClock, faFilter, faLocationCrosshairs, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { useFonts } from "expo-font";
import ButtonWithProps from "../components/buttonWithProps";
const PaymentDetails: React.FC = () => {
    const[isEnabled, setIsEnabled]= useState(false);
    const toggleSwitch= ()=>{
        setIsEnabled(!isEnabled);
    }
    const navigation = useNavigation();
    const [fontsLoaded] = useFonts({
        'Avenir': require('../assets/avenir_ff/AvenirLTStd-Book.otf'),
        'Avenirbold': require('../assets/avenir_ff/AvenirLTStd-Black.otf'),
        'Avenirroman': require('../assets/avenir_ff/AvenirLTStd-Roman.otf'),
    });
    if (!fontsLoaded) return null;

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <SafeAreaView style={{ flex: 1, marginTop: 20, alignItems: 'center', backgroundColor: '#F4F4FA' }}>

                <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'flex-start', gap: 50, marginLeft: 50, alignItems: "flex-start", marginTop: 50, marginBottom: 30, }}>
                    <Pressable style={styles.back} onPress={() => navigation.goBack()}>
                        <FontAwesomeIcon icon={faAngleLeft} />
                    </Pressable>
                    <Text style={{ fontFamily: 'Avenirroman', fontSize: 22 }}>Payment details</Text>
                </View>


                <View style={{
                    flexDirection: 'row', alignItems: "center", justifyContent: "space-around", width: "100%",
                }}>
                    <View style={{
                        flexDirection: 'row', alignItems: "center", justifyContent: "space-between", height: 60, width: '95%',
                        borderRadius: 20, backgroundColor: "white", paddingHorizontal: 20, marginTop: 10
                    }}>
                        <Text style={{ fontFamily: 'Avenirroman', fontSize: 15 }}>Mobile banking</Text>
                        <FontAwesomeIcon icon={faAngleRight} />
                    </View>
                </View>
                <View style={{
                    alignItems: "center", width: "100%",
                }}>
                    <View style={{ backgroundColor: 'white', borderRadius: 20, paddingVertical: 20, marginVertical: 10 }}>
                        <View style={{
                            flexDirection: 'row', alignItems: "center", justifyContent: "space-between", marginVertical: 10, width: '95%',
                            paddingHorizontal: 20
                        }}>
                            <Text style={{ fontFamily: 'Avenirroman', fontSize: 15 }}>Credit Card</Text>
                            <FontAwesomeIcon icon={faAngleUp} />
                        </View>
                        <View style={{
                            marginVertical: 10, width: '95%',
                            paddingHorizontal: 20,
                        }}>
                            <View style={{ backgroundColor: "#F4F4FA", width: '100%', flexDirection: 'row', justifyContent: "space-between", alignItems: "center", padding: 10, borderRadius: 10 }}>
                                <Image source={require("../assets/mastercard.png")} style={{ width: 30, resizeMode: "contain" }} />
                                <Text style={{ fontFamily: 'Avenir' }}>ABC Bank   **** 6189</Text>
                                <View style={{ width: 20, height: 20, borderRadius: 10, borderWidth: 2, padding: 3, borderColor: "#F43939", alignItems: "center", justifyContent: 'center' }}>
                                    <View style={{ width: 13, height: 13, borderRadius: 6.5, backgroundColor: '#F43939' }}></View>
                                </View>
                            </View>
                        </View>
                        <View style={{
                            width: '95%',
                            paddingHorizontal: 20,
                        }}>
                            <View style={{ backgroundColor: "#F4F4FA", width: '100%', flexDirection: 'row', justifyContent: "space-between", padding: 10, borderRadius: 10 }}>
                                <Image source={require("../assets/visa.png")} style={{ width: 30, resizeMode: "contain" }} />
                                <Text style={{ fontFamily: 'Avenir' }}>ABC Bank   **** 6189</Text>
                                <View style={{ width: 20, height: 20, borderRadius: 10, padding: 3, borderColor: "#F43939", alignItems: "center", justifyContent: 'center' }}>
                                    <View style={{ width: 13, height: 13, borderRadius: 6.5, }}></View>
                                </View>
                            </View>
                            <View style={{ width: '100%', flexDirection: 'row', padding: 10, alignItems: "center", gap: 20, borderRadius: 10, marginTop: 10 }}>
                                <View style={{ width: 25, height: 25, borderRadius: 12.5, padding: 3, backgroundColor: '#F43939', alignItems: "center", justifyContent: 'center' }}>
                                    <Text style={{ fontFamily: 'Avenir', color: 'white' }}>+</Text></View>
                                <Text style={{ fontFamily: 'Avenir' }}>Add new card</Text>
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
                            <Text style={{ fontFamily: 'Avenirroman', fontSize: 15 }}>Google Play</Text>
                            <FontAwesomeIcon icon={faAngleRight} />
                        </View>
                    </View>
                    <View style={{
                        flexDirection: 'row', alignItems: "center", justifyContent: "space-around", width: "100%",
                    }}>
                        <View style={{
                            flexDirection: 'row', alignItems: "center", justifyContent: "space-between", height: 60, width: '95%',
                            borderRadius: 20, backgroundColor: "white", paddingHorizontal: 20, marginTop: 10
                        }}>
                            <Text style={{ fontFamily: 'Avenirroman', fontSize: 15 }}>Debit Card</Text>
                            <FontAwesomeIcon icon={faAngleRight} />
                        </View>
                    </View>
                    <View style={{flexDirection: "row", alignItems: "center", justifyContent: "space-between", width:"85%", marginVertical: 15}}>
                        <Text style={{ fontFamily: 'Avenirroman', fontSize: 15 }}>Send the receipt to my email</Text>
                    <View style={{backgroundColor:"#F43939", borderRadius: 30, width: 55, height:35, alignItems:"center", justifyContent: "center"}}>
                        <Switch trackColor={{true:"#F43939", false:"#F43939"}}
                        thumbColor={isEnabled?"#fff":"#000"}
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                        />
                    </View>
                    </View>
                </View>
                <TouchableOpacity style={{ width: '80%' }} onPress={()=> navigation.navigate('paymentSuccess' as never)}>
                    <ButtonWithProps textColor="white" color="black" title="Pay Now" />
                </TouchableOpacity>
            </SafeAreaView>
        </ScrollView>
    )
}
export default PaymentDetails;

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