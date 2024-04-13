
import { SafeAreaView, View, Pressable, Text, StyleSheet, Image, FlatList, ScrollView, TouchableOpacity } from "react-native";
import { faAngleLeft, faClock, faFilter, faLocationCrosshairs, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { useFonts } from "expo-font";
import { faClockFour } from "@fortawesome/free-regular-svg-icons";
import ButtonWithProps from "../components/buttonWithProps";
import {LinearGradient} from "expo-linear-gradient"
const ChoosePlanPro: React.FC = () => {
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
                <Text style={{ fontFamily: 'Avenirroman', fontSize: 22 }}>Upgrade</Text>
            </View>
            <View>
                <View>
                    <Image source={require("../assets/Group 246.png")} style={{ width: 292, height: 292, resizeMode: 'contain' }} />
                   
                </View>

                <View style={{gap:15}}>

                    <View style={{height:97,width:311,backgroundColor:"#FFFFFF",borderRadius:20}}>
                        <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>

                            <Image style={{marginTop:50,marginLeft:5}}source={require("../assets/Group 204.png")}></Image>
                            
                            <View style={{display:"flex",flexDirection:"column",padding:30,gap:10}}>
                                <Text style={{fontSize:20,fontFamily:"Avenir"}}>Yearly</Text>
                                <Text style={{fontSize:16,fontFamily:"Avenir",color:"#2D2D2D"}}>Pay for a full year</Text>
                            </View>

                            <View  style={{padding:30}}>
                                <Text style={{color:"#F43939",fontFamily:"Avenir",fontSize:20}}>$210/y</Text>
                            </View>

                        </View>

                    </View>

                    <View style={{height:97,width:311,backgroundColor:"#EAEAF3",borderRadius:20}}>
                        <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>

                            <Image style={{marginTop:50,marginLeft:5}}source={require("../assets/Group 204.png")}></Image>
                            
                            <View style={{display:"flex",flexDirection:"column",padding:30,gap:10}}>
                                <Text style={{fontSize:20,fontFamily:"Avenir"}}>Monthly</Text>
                                <Text style={{fontSize:16,fontFamily:"Avenir",color:"#2D2D2D"}}>Pay monthly, cancel anytime</Text>
                            </View>

                            <View  style={{padding:30,marginLeft:-80}}>
                                <Text style={{color:"#F43939",fontFamily:"Avenir",fontSize:20}}>$20/m</Text>
                            </View>

                        </View>

                    </View>
                </View>
               
                
            </View>
            
            
            <View>
            <TouchableOpacity style={{width: 311,marginTop:100,height:54}}>
                <ButtonWithProps textColor="white" color="black" title="Make  Payment"/>
            </TouchableOpacity>
            </View>
        
                
        </SafeAreaView>
    )
}
export default ChoosePlanPro;

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