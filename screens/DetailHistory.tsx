
import { SafeAreaView, View, Pressable, Text, StyleSheet, Image, FlatList, ScrollView, TouchableOpacity } from "react-native";
import { faAngleLeft, faClock, faFilter, faLocationCrosshairs, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { useFonts } from "expo-font";
import { faClockFour } from "@fortawesome/free-regular-svg-icons";
import ButtonWithProps from "../components/buttonWithProps";
import {LinearGradient} from "expo-linear-gradient"
const DetailHistory: React.FC = () => {
    const navigation = useNavigation();
    const [fontsLoaded] = useFonts({
        'Avenir': require('../assets/avenir_ff/AvenirLTStd-Book.otf'),
        'Avenirbold': require('../assets/avenir_ff/AvenirLTStd-Black.otf'),
        'Avenirroman': require('../assets/avenir_ff/AvenirLTStd-Roman.otf'),
    });
    if (!fontsLoaded) return null;

    return (
        <SafeAreaView style={{ flex: 1, marginTop: 20, alignItems: 'center', backgroundColor:'#F4F4FA' }}>

            <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'flex-start', gap: 50, marginLeft: 50, alignItems: "flex-start", marginTop: 50, marginBottom: 30, }}>
                <Pressable style={styles.back} onPress={() => navigation.goBack()}>
                    <FontAwesomeIcon icon={faAngleLeft} />
                </Pressable>
                <Text style={{ fontFamily: 'Avenirroman', fontSize: 22 }}>Detail History</Text>
            </View>
            <View>
                <View>
                    <Image source={require("../assets/parkingBig.png")} style={{ width: 300, height: 200, resizeMode: 'contain' }} />
                    <View style={{
                        position: 'relative', left: 125, bottom: 40,
                        backgroundColor: "#F43939", padding: 8, borderRadius: 50, width: 50, height: 50, justifyContent: 'center', alignItems: 'center'
                    }}>
                        <FontAwesomeIcon icon={faLocationCrosshairs} size={25} color="white" />
                    </View>
                </View>
                <View style={{ alignItems: 'center', marginTop:-20 }}>
                    <Text style={{ color: "black", fontFamily: 'Avenirroman', fontSize: 25, marginBottom: 5 }}>Graha Mall</Text>
                    <Text style={{ color: "#888", fontFamily: 'Avenirroman', fontSize: 15, letterSpacing: 0.3 }}>123 Dhaka Street</Text>
                </View>
                <View style={{flexDirection:'row', justifyContent:'space-around', marginTop: 20}}>
                    <View style={{ backgroundColor:"#FFF3F3", padding:10, flexDirection:'row', borderRadius: 10}}>
                        <FontAwesomeIcon icon={faLocationDot}  color="#F43939"/>
                        <Text style={{fontFamily:'Avenirbold', color:"#F43939"}}> A-6</Text>
                    </View>
                    <View style={{ backgroundColor:"#FFF3F3", padding:10, flexDirection:'row', borderRadius: 10}}>
                        <FontAwesomeIcon icon={faClockFour} color="#F43939"/>
                        <Text style={{fontFamily:'Avenir', color:"#F43939"}}> 4 hours</Text>
                    </View>
                </View>
            </View>
            <ScrollView style={{width:'80%', height: 200, marginTop:10}} showsVerticalScrollIndicator={false}>
                    <Text style={{ fontFamily: 'Avenirroman', fontSize: 25,marginBottom: 10 }}>Information</Text>
                    <Text style={{ fontFamily: 'Avenir', fontSize: 18 }}>
                    24/7 parking facility with cctv camera, professional security guard, chair disble, floor parking list facilities. You will get hassle parking facilities with 35% discount on first parking...
                    </Text>
            </ScrollView>
            <LinearGradient colors={['rgba(255,255,255,0.8)', 'rgba(255,255,255,0.7)']} start={{x:0, y:0}} end={{x:0, y:1}}
             style={{ position:'relative', bottom: 5,height: 100, width:'100%', alignItems:"center", justifyContent:"center", backgroundColor:'transparent'}}>
            <View>
            <TouchableOpacity style={{width: 200}}>
                <ButtonWithProps textColor="white" color="black" title="Repeat Booking"/>
            </TouchableOpacity>
            </View>
            </LinearGradient>
                
        </SafeAreaView>
    )
}
export default DetailHistory;

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