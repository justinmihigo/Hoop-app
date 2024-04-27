import { SafeAreaView, View, Pressable, Text, StyleSheet, Image, ScrollView, Dimensions, Platform } from "react-native";
import { faAngleLeft} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useNavigation } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import MapView, { Marker } from "react-native-maps"
import * as Location from "expo-location"
import { useFonts } from "expo-font";
const ShowMaps: React.FC = () => {
    const[mapRegion, setMapRegion]= useState({
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    }) as any;
    const userLocation= async()=>{
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status!== 'granted') {
            alert('Permission to access location was denied');
            return;
        }
        let location= await Location.getCurrentPositionAsync();
        setMapRegion({
            latitude:location.coords.latitude,
            longitude:location.coords.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        })

    }
    useEffect(() =>{
        userLocation();
    }, []);
    const navigation = useNavigation();
    const screenHeight = Dimensions.get("screen").height;
    const distance = screenHeight - 50;
    const [fontsLoaded] = useFonts({
        'Avenir': require('../assets/avenir_ff/AvenirLTStd-Book.otf'),
        'Avenirbold': require('../assets/avenir_ff/AvenirLTStd-Black.otf'),
        'Avenirroman': require('../assets/avenir_ff/AvenirLTStd-Roman.otf'),
    });
    if (!fontsLoaded) return null;
    const other = StyleSheet.create({
        position: {
            position: 'relative',
            bottom: distance
        }
    })
    if (Platform.OS==='web'){
        return(
            <View><Text>Map content</Text></View>
        )
    }
    else{
    return (
        <SafeAreaView style={{ flex: 1 ,backgroundColor:"#F5F5F5"}}>
            <View>
                <MapView style={{ width: '100%', height: '100%',borderBottomEndRadius:40}} region={mapRegion} >
                    
                    <Marker coordinate={mapRegion} title="location"/>
                </MapView>
                
            </View>

            <View style={{ flexDirection: 'row', width: '100%',
             justifyContent: 'flex-start', gap: 100, marginLeft: 50,
              alignItems: "flex-start", marginTop: 50, marginBottom: 30, }}>
                
                <Pressable style={[styles.back, other.position]} onPress={() => navigation.goBack()}>
                    <FontAwesomeIcon icon={faAngleLeft} />
                </Pressable>
               
            </View>
            <View style={{ position: 'relative', bottom: 450, alignItems: 'center' }}>


                <View style={{ width: 311, height: 215, backgroundColor: 'white', borderRadius:20 }}>

                    <View style={{display:"flex",flexDirection:"row",justifyContent:"space-around",padding:10}}>
                        <View style={{display:"flex",flexDirection:"column"}}>
                            <Text style={{fontSize:24,fontFamily:"Avenir",color:"#2D2D2D"}}>Parking Spots</Text>
                            <Text style={{fontSize:14,color:"#2D2D2D",fontFamily:"Avenir"}}>123 Dhaka Street</Text>
                        </View>
                        

                        <View style={{backgroundColor:"#FFF3F3",height:32,width:47,borderRadius:24,justifyContent:"center",alignItems:"center"}}>

                        <Text style={{color:"red",fontSize:14,fontFamily:"Avenir"}}>$6</Text>

                        </View>


                    </View>

                    <ScrollView horizontal={true}>
                    <View style={{display:"flex",flexDirection:"row",gap:10,padding:15}}>

                        <View>
                            <Image style={{height:92,width:120}} source={require("../assets/Rectangle 76 (1).png")}></Image>
                        </View>

                        <View>
                            <Image style={{height:92,width:120}} source={require("../assets/Rectangle 76 (1).png")}></Image>
                        </View>

                        <View>
                            <Image style={{height:92,width:120}} source={require("../assets/Rectangle 76 (1).png")}></Image>
                        </View>

                        <View>
                            <Image style={{height:92,width:120}} source={require("../assets/Rectangle 76 (1).png")}></Image>
                        </View>
                        



                    </View>

                   
                </ScrollView>



                    
                
                   
                </View>

               
                


            </View>




            <View style={{ position: 'relative', bottom: 450, alignItems: 'center' }}>


                <View style={{ width: "100%", height: 150, backgroundColor: '#F5F5F5', borderRadius:20 }}>

                    <View style={{display:"flex",flexDirection:"row",padding:30,gap:10,marginTop:25}}>
                        <Image source={require("../assets/yooo.png")}></Image>
                        <Text style={{color:"#2D2D2D",fontFamily:"Avenir",fontSize:16}}>Parking address...</Text>
                    </View>

                  
                   
                </View>

               
                


            </View>



        </SafeAreaView>
    )
}
}
export default ShowMaps;

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
// export default function ShowMaps() {
//   return (
//     <View style={styles.container}>
//       <MapView style={styles.map} />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   map: {
//     width: '100%',
//     height: '100%',
//   },
// });