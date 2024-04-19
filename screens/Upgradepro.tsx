
import { SafeAreaView, View, Pressable, Text, StyleSheet, Image, FlatList, ScrollView, TouchableOpacity } from "react-native";
import { faAngleLeft, faClock, faFilter, faLocationCrosshairs, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { useFonts } from "expo-font";
import { faClockFour } from "@fortawesome/free-regular-svg-icons";
import ButtonWithProps from "../components/buttonWithProps";
import {LinearGradient} from "expo-linear-gradient"
const UpgradePro: React.FC = () => {
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
                     <View style={{width:229,height:108,padding:10}}>
                        <Text style={{fontSize:24,fontFamily:"Avenir"}}>Get all the facilities</Text>
                        <Text style={{fontSize:24,fontFamily:"Avenir"}}> by upgrading your</Text> 
                        <Text style={{fontSize:24,fontFamily:"Avenir"}}>        account</Text>
                    </View> 
                   
                </View>

                <ScrollView horizontal={true}>

            <View style={{display:"flex",flexDirection:"row",gap:15}}>


                <View style={{height:372,width:257,backgroundColor:"#FFFFFF",borderRadius:20}}>
                    <Text style={{textAlign:"center",fontSize:22,fontFamily:"Avenir",color:"#2D2D2D",padding:10}}>Pro</Text>

                    <View style={{padding:15,gap:9}}>

                    <View  style={{display:"flex",flexDirection:"row",padding:10,justifyContent:"flex-start",gap:15}}>
                            <Image source={require("../assets/Tick Square.png")}></Image>
                            <Text style={{fontFamily:"Avenir",fontSize:16}}>All Include</Text>

                        </View>

                    

                        <View style={{display:"flex",flexDirection:"row",padding:10,justifyContent:"flex-start",gap:15}}>
                            <Image source={require("../assets/Tick Square.png")}></Image>
                            <Text style={{fontFamily:"Avenir",fontSize:16}}>Unlimited Feature</Text>

                        </View>


                        <View  style={{display:"flex",flexDirection:"row",padding:10,justifyContent:"flex-start",gap:15}}>
                            <Image source={require("../assets/Tick Square.png")}></Image>
                            <Text style={{fontFamily:"Avenir",fontSize:16}}>All Include</Text>

                        </View>

                        <View  style={{display:"flex",flexDirection:"row",padding:10,justifyContent:"flex-start",gap:15}}>
                            <Image source={require("../assets/Tick Square.png")}></Image>
                            <Text style={{fontFamily:"Avenir",fontSize:16}}>All Include</Text>

                        </View>

                        <View style={{display:"flex",flexDirection:"row",padding:10,justifyContent:"flex-start",gap:15}} >
                            <Image source={require("../assets/Tick Square.png")}></Image>
                            <Text style={{fontFamily:"Avenir",fontSize:16}}>All Include</Text>

                        </View>


                        <View  style={{display:"flex",flexDirection:"row",padding:10,justifyContent:"flex-start",gap:15}}>
                            <Image source={require("../assets/Tick Square.png")}></Image>
                            <Text style={{fontFamily:"Avenir",fontSize:16}}>All Include</Text>

                        </View>

                       

                    </View>


                 

                </View>

                <View style={{height:372,width:257,backgroundColor:"#FFFFFF",borderRadius:20}}>
                    <Text style={{textAlign:"center",fontSize:22,fontFamily:"Avenir",color:"#2D2D2D",padding:10}}>Profile</Text>

                    <View style={{padding:15,gap:9}}>

                    <View  style={{display:"flex",flexDirection:"row",padding:10,justifyContent:"flex-start",gap:15}}>
                            <Image source={require("../assets/Tick Square.png")}></Image>
                            <Text style={{fontFamily:"Avenir",fontSize:16}}>All Include</Text>

                        </View>

                    

                        <View style={{display:"flex",flexDirection:"row",padding:10,justifyContent:"flex-start",gap:15}}>
                            <Image source={require("../assets/Tick Square.png")}></Image>
                            <Text style={{fontFamily:"Avenir",fontSize:16}}>Unlimited Feature</Text>

                        </View>


                        <View  style={{display:"flex",flexDirection:"row",padding:10,justifyContent:"flex-start",gap:15}}>
                            <Image source={require("../assets/Tick Square.png")}></Image>
                            <Text style={{fontFamily:"Avenir",fontSize:16}}>All Include</Text>

                        </View>

                        <View  style={{display:"flex",flexDirection:"row",padding:10,justifyContent:"flex-start",gap:15}}>
                            <Image source={require("../assets/Tick Square.png")}></Image>
                            <Text style={{fontFamily:"Avenir",fontSize:16}}>All Include</Text>

                        </View>

                        <View style={{display:"flex",flexDirection:"row",padding:10,justifyContent:"flex-start",gap:15}} >
                            <Image source={require("../assets/Tick Square.png")}></Image>
                            <Text style={{fontFamily:"Avenir",fontSize:16}}>All Include</Text>

                        </View>


                        <View  style={{display:"flex",flexDirection:"row",padding:10,justifyContent:"flex-start",gap:15}}>
                            <Image source={require("../assets/Tick Square.png")}></Image>
                            <Text style={{fontFamily:"Avenir",fontSize:16}}>All Include</Text>

                        </View>

                       

                    </View>


                 

                </View>
                

                <View style={{height:372,width:257,backgroundColor:"#FFFFFF",borderRadius:20}}>
                    <Text style={{textAlign:"center",fontSize:22,fontFamily:"Avenir",color:"#2D2D2D",padding:10}}>Try</Text>

                    <View style={{padding:15,gap:9}}>

                    <View  style={{display:"flex",flexDirection:"row",padding:10,justifyContent:"flex-start",gap:15}}>
                            <Image source={require("../assets/Tick Square.png")}></Image>
                            <Text style={{fontFamily:"Avenir",fontSize:16}}>All Include</Text>

                        </View>

                    

                        <View style={{display:"flex",flexDirection:"row",padding:10,justifyContent:"flex-start",gap:15}}>
                            <Image source={require("../assets/Tick Square.png")}></Image>
                            <Text style={{fontFamily:"Avenir",fontSize:16}}>Unlimited Feature</Text>

                        </View>


                        <View  style={{display:"flex",flexDirection:"row",padding:10,justifyContent:"flex-start",gap:15}}>
                            <Image source={require("../assets/Tick Square.png")}></Image>
                            <Text style={{fontFamily:"Avenir",fontSize:16}}>All Include</Text>

                        </View>

                        <View  style={{display:"flex",flexDirection:"row",padding:10,justifyContent:"flex-start",gap:15}}>
                            <Image source={require("../assets/Tick Square.png")}></Image>
                            <Text style={{fontFamily:"Avenir",fontSize:16}}>All Include</Text>

                        </View>

                        <View style={{display:"flex",flexDirection:"row",padding:10,justifyContent:"flex-start",gap:15}} >
                            <Image source={require("../assets/Tick Square.png")}></Image>
                            <Text style={{fontFamily:"Avenir",fontSize:16}}>All Include</Text>

                        </View>


                        <View  style={{display:"flex",flexDirection:"row",padding:10,justifyContent:"flex-start",gap:15}}>
                            <Image source={require("../assets/Tick Square.png")}></Image>
                            <Text style={{fontFamily:"Avenir",fontSize:16}}>All Include</Text>

                        </View>

                       

                    </View>


                 

                </View>
                

                <View style={{height:372,width:257,backgroundColor:"#FFFFFF",borderRadius:20}}>
                    <Text style={{textAlign:"center",fontSize:22,fontFamily:"Avenir",color:"#2D2D2D",padding:10}}>Details</Text>

                    <View style={{padding:15,gap:9}}>

                    <View  style={{display:"flex",flexDirection:"row",padding:10,justifyContent:"flex-start",gap:15}}>
                            <Image source={require("../assets/Tick Square.png")}></Image>
                            <Text style={{fontFamily:"Avenir",fontSize:16}}>All Include</Text>

                        </View>

                    

                        <View style={{display:"flex",flexDirection:"row",padding:10,justifyContent:"flex-start",gap:15}}>
                            <Image source={require("../assets/Tick Square.png")}></Image>
                            <Text style={{fontFamily:"Avenir",fontSize:16}}>Unlimited Feature</Text>

                        </View>


                        <View  style={{display:"flex",flexDirection:"row",padding:10,justifyContent:"flex-start",gap:15}}>
                            <Image source={require("../assets/Tick Square.png")}></Image>
                            <Text style={{fontFamily:"Avenir",fontSize:16}}>All Include</Text>

                        </View>

                        <View  style={{display:"flex",flexDirection:"row",padding:10,justifyContent:"flex-start",gap:15}}>
                            <Image source={require("../assets/Tick Square.png")}></Image>
                            <Text style={{fontFamily:"Avenir",fontSize:16}}>All Include</Text>

                        </View>

                        <View style={{display:"flex",flexDirection:"row",padding:10,justifyContent:"flex-start",gap:15}} >
                            <Image source={require("../assets/Tick Square.png")}></Image>
                            <Text style={{fontFamily:"Avenir",fontSize:16}}>All Include</Text>

                        </View>


                        <View  style={{display:"flex",flexDirection:"row",padding:10,justifyContent:"flex-start",gap:15}}>
                            <Image source={require("../assets/Tick Square.png")}></Image>
                            <Text style={{fontFamily:"Avenir",fontSize:16}}>All Include</Text>

                        </View>

                       

                    </View>


                 

                </View>
                
                
            </View>
            </ScrollView>
               
                
            
            
            
            <View>
            <TouchableOpacity onPress={()=>navigation.navigate("choosePlanPro"as never)}style={{width: 311,marginTop:-150,height:54}}>
                <ButtonWithProps textColor="white" color="#130F26" title="Choose a Plan"/>
            </TouchableOpacity>
            </View>
        
                
        </SafeAreaView>
    )
}
export default UpgradePro;

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