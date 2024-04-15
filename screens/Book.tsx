
import { SafeAreaView, View, Pressable, Text, StyleSheet, Image, FlatList, ScrollView, TouchableOpacity } from "react-native";
import { faAngleLeft, faClock, faFilter, faLocationCrosshairs, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useNavigation, Link } from "@react-navigation/native";
import React from "react";
import { useFonts } from "expo-font";
import { faClockFour } from "@fortawesome/free-regular-svg-icons";
import ButtonWithProps from "../components/buttonWithProps";
import {LinearGradient} from "expo-linear-gradient"
const Book: React.FC = () => {
    const navigation = useNavigation();
    const [fontsLoaded] = useFonts({
        'Avenir': require('../assets/avenir_ff/AvenirLTStd-Book.otf'),
        'Avenirbold': require('../assets/avenir_ff/AvenirLTStd-Black.otf'),
        'Avenirroman': require('../assets/avenir_ff/AvenirLTStd-Roman.otf'),
    });
    if (!fontsLoaded) return null;

    return (
        <SafeAreaView style={{ flex: 1, marginTop: 20, alignItems: 'center', backgroundColor:'#F4F4FA' }}>

            <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'flex-start', gap: 50, marginLeft: 50, alignItems: "flex-start", marginTop: 50, marginBottom: 30}}>
                <Pressable style={styles.back} onPress={() => navigation.goBack()}>
                    <FontAwesomeIcon icon={faAngleLeft} />
                </Pressable>
                <Text style={{ fontFamily: 'Avenirroman', fontSize: 22 ,marginLeft:50}}><Link to={'/bookdetails'}>Booking</Link></Text>
            </View>

            <View style={{padding:30,gap:30}}>

            <View style={{display:"flex",justifyContent:"flex-start",alignItems:"flex-start",padding:10,position:"relative",marginLeft:-190}}>
                <Text style={{fontSize:32,fontFamily:"Avenir",color:"#2D2D2D"}}>Add </Text>
                <Text style={{fontSize:32,fontFamily:"Avenir",color:"#2D2D2D"}}>Insurance?</Text>
               

            </View>



            <View style={{height:325,width:106,backgroundColor:"#FFFFFF",borderRadius:30,marginLeft:-180,display:"flex",flexDirection:"column",padding:2}}>

                <ScrollView showsVerticalScrollIndicator={true} style={{padding:10,gap:25}}>
                    <View style={{gap:10}}>
                        <TouchableOpacity>

                
                    <Image  style={{height:82,width:82}}source={require("../assets/Group 248.png")}/>

                    </TouchableOpacity>
                    <TouchableOpacity >

                    <Image  style={{height:82,width:82}} source={require("../assets/Group 249.png")}/>
                    </TouchableOpacity>
                    <TouchableOpacity>

                    <Image  style={{height:82,width:82}} source={require("../assets/Group 250.png")}/>
                    </TouchableOpacity>
                    <TouchableOpacity>


                    <Image  style={{height:82,width:82}}source={require("../assets/Group 248.png")}/>
                    </TouchableOpacity>
                    <TouchableOpacity>

                    <Image  style={{height:82,width:82}}source={require("../assets/Group 249.png")}/>
                    </TouchableOpacity>
                    <TouchableOpacity>

                    <Image style={{height:82,width:82}}source={require("../assets/Group 250.png")}/>
                    </TouchableOpacity>

                    </View>




                </ScrollView>
                

        

            </View>

            
            

            </View>
            <View>
                    <Image style={{position:"relative",marginLeft:165,marginTop:-470}}source={require("../assets/Group 252.png")}></Image>
                </View>







            
            <ScrollView showsVerticalScrollIndicator>
                   
                
            </ScrollView>

            

        

            <View>

            

            <View style={{display:"flex",flexDirection:"row",gap:60,alignItems:"center"}}>
                <Text style={{fontSize:24,fontWeight:"bold",marginBottom:45}}>$35,00</Text>
                <TouchableOpacity style={{width: 197,height:54,position:"relative",marginBottom:60}}>
                    <ButtonWithProps textColor="white" color="black" title="Book Now"/>
                </TouchableOpacity>

            </View>
            </View>
            
                
        </SafeAreaView>
    )
}
export default Book;

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