import { SafeAreaView, View, Pressable, Text, StyleSheet, Image, FlatList, ScrollView, TouchableOpacity, Dimensions } from "react-native";
import { faAngleLeft, faCircleExclamation, faClock, faFilter, faLocationCrosshairs, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useNavigation } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import MapView, { Marker } from "react-native-maps"
import * as Location from "expo-location"
import { useFonts } from "expo-font";
import ButtonWithProps from "../components/buttonWithProps";
import { faClockFour } from "@fortawesome/free-regular-svg-icons";
const TrackingParking: React.FC = () => {
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

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View>
                <MapView style={{ width: '100%', height: '100%' }} region={mapRegion} >
                    <Marker coordinate={mapRegion} title="location"/>
                </MapView>
            </View>

            <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'flex-start', gap: 100, marginLeft: 50, alignItems: "flex-start", marginTop: 50, marginBottom: 30, }}>
                <Pressable style={[styles.back, other.position]} onPress={() => navigation.goBack()}>
                    <FontAwesomeIcon icon={faAngleLeft} />
                </Pressable>
            </View>
            <View style={{ position: 'relative', bottom: 450, alignItems: 'center' }}>
                <View style={{ width: '90%', height: 300, backgroundColor: 'white', borderRadius:20 }}>
                    <View>
                        <Text style={{ fontFamily: 'Avenir', color: "#888", marginTop: 20, marginLeft: 20 }}>Your destination</Text>
                        <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: "space-around" }}>
                            <View style={{ flexDirection: 'row' }}>
                                <FontAwesomeIcon icon={faLocationDot} color="#F43939" />
                                <Text style={{ fontFamily: 'Avenirroman', }}> 123 Dhaka Street</Text>
                            </View>
                            <View style={{ flexDirection: 'row', padding: 10, borderRadius: 10, backgroundColor: "#F4F4FA" }}>
                                <FontAwesomeIcon icon={faClockFour} color="#F43939" />
                                <Text style={{ fontFamily: 'Avenir', color: "#F43939" }}> 7 min</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ height: 40, width: 0, borderLeftWidth: 1, borderStyle: 'dashed', borderColor: "#999", marginLeft: 35 }}></View>
                    <View>
                        <Text style={{ fontFamily: 'Avenir', color: "#888", marginTop: 20, marginLeft: 20 }}>Your Address</Text>
                        <View style={{ flexDirection: 'row', alignItems: "center", marginLeft: 20, marginTop: 10 }}>
                            <View style={{ flexDirection: 'row' }}>
                                <FontAwesomeIcon icon={faLocationDot} color="#F43939" />
                                <Text style={{ fontFamily: 'Avenirroman', }}> 123 Dhaka Street</Text>
                            </View>
                        </View>
                        <View style={{width:'100%', height:100, marginTop:20, backgroundColor:"#F4F4FA", borderRadius: 20, justifyContent: 'center', alignItems:'center',gap:10 ,flexDirection:'row-reverse'}}>
                            <View style={{width:'60%'}}>
                                <TouchableOpacity>
                                    <ButtonWithProps title="Start now" color="black" textColor="white"/>
                                </TouchableOpacity>
                            </View>
                            <View style={{width:'17%'}}>
                                
                                <TouchableOpacity>
                                <ButtonWithProps icon={faCircleExclamation} color="white" textColor="black" />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>

            </View>

        </SafeAreaView>
    )
}
export default TrackingParking;

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
// export default function TrackingParking() {
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