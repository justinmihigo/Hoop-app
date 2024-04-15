
import { SafeAreaView, View, Pressable, Text, StyleSheet, Image, FlatList, ScrollView, TouchableOpacity } from "react-native";
import { faAngleLeft, faClock, faFilter, faLocationCrosshairs, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useNavigation, Link} from "@react-navigation/native";
import React from "react";
import { useFonts } from "expo-font";
import { faClockFour } from "@fortawesome/free-regular-svg-icons";
import ButtonWithProps from "../components/buttonWithProps";
import {LinearGradient} from "expo-linear-gradient"
const BookDetail: React.FC = () => {
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
                <Text style={{ fontFamily: 'Avenirroman', fontSize: 22 }}><Link to={"/payment"}>Book Details</Link></Text>
            </View>
            <View style={{gap:30}}>
                <View>
                    <Image source={require("../assets/parkingBig.png")} style={{ width: 300, height: 200, resizeMode: 'contain' }} />
                    <View style={{
                        position: 'relative', left: 125, bottom: 40,
                         padding: 8, borderRadius: 50, width: 50, height: 50, justifyContent: 'center', alignItems: 'center'
                    }}>
                        
                    </View>
                </View>
                <View style={{display:"flex",flexDirection:"row",gap:100}}>
                <View style={{ marginTop:-20 }}>
                    <Text style={{ color: "black", fontFamily: 'Avenirroman', fontSize: 25, marginBottom: 5 }}>Graha Mall</Text>
                    <Text style={{ color: "#888", fontFamily: 'Avenirroman', fontSize: 15, letterSpacing: 0.3 }}>123 Dhaka Street</Text>
                </View>

                <Text style={{color:"#F43939",backgroundColor:"#FFF3F3",height:38,width:72,borderRadius:10,textAlign:"center",justifyContent:"center",padding:5,}}>$10/h</Text>

                </View> 

       <View style={{gap:20,display:"flex",flexDirection:"row"}}>

                <View style={{height:126,width:145,borderRadius:20,backgroundColor:"#FFFFFF",flexDirection:"column",justifyContent:"center",alignItems:"center",gap:10}}>
                    <View style={{backgroundColor:"#FFF3F3",height:26,width:38,borderRadius:5,justifyContent:"center",alignItems:"center"}}>
                    <Image source={require("../assets/Location.png")}></Image>
                    </View>
                    <Text style={{fontSize:18,fontFamily:"Avenir"}}>A-6</Text>
                    <Text style={{fontSize:14,fontFamily:"Avenir"}}>Parking Place</Text>
                   
                </View>

                <View style={{height:126,width:145,borderRadius:20,backgroundColor:"#FFFFFF",flexDirection:"column",justifyContent:"center",alignItems:"center",gap:10}}>
                    <View style={{backgroundColor:"#FFF3F3",height:26,width:38,borderRadius:5,justifyContent:"center",alignItems:"center"}}>
                    <Image source={require("../assets/Location.png")}></Image>
                    </View>
                    <Text style={{fontSize:18,fontFamily:"Avenir"}}>4 h</Text>
                    <Text style={{fontSize:14,fontFamily:"Avenir"}}>Time</Text>
                   
                </View>



        </View>

          <View style={{display:"flex",flexDirection:"row",gap:10 ,backgroundColor:"#FFFFFF",borderRadius:15,justifyContent:"center",alignItems:"center"}}>
                    <View style ={{height:61,width:55}}>
                    <Image style={{position:"relative",marginTop:17}} source ={require("../assets/Activity.png")}></Image>
                    </View>
                    <Text style ={{fontSize:18,fontFamily:"Avenir"}}>Include Insurance</Text>
                    <Text  style ={{fontSize:16,fontFamily:"Avenir"}}>$5/h</Text>

                </View>


                

            </View>

            
            <ScrollView style={{width:'80%', height: 200, marginTop:10}} showsVerticalScrollIndicator={false}>
                   
                
            </ScrollView>
            


            <View>

            

            <View style={{display:"flex",flexDirection:"row",gap:60,alignItems:"center"}}>
                <Text style={{fontSize:24,fontWeight:"bold",marginBottom:45}}>$35,00</Text>
                <TouchableOpacity style={{width: 197,height:54,position:"relative",marginBottom:60}}>
        
                    <ButtonWithProps textColor="white" color="black" title="Pay"/>
                </TouchableOpacity>

            </View>
            </View>
            
                
        </SafeAreaView>
    )
}
export default BookDetail;

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