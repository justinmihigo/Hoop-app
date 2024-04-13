
import { SafeAreaView, View, Pressable, Text, StyleSheet, Image, FlatList, ScrollView, TouchableOpacity } from "react-native";
import { faAngleLeft, faClock, faFilter, faLocationCrosshairs, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { useFonts } from "expo-font";
import { faClockFour } from "@fortawesome/free-regular-svg-icons";
import ButtonWithProps from "../components/buttonWithProps";
import { LinearGradient } from "expo-linear-gradient"
const Notifications: React.FC = () => {
    const navigation = useNavigation();
    const [fontsLoaded] = useFonts({
        'Avenir': require('../assets/avenir_ff/AvenirLTStd-Book.otf'),
        'Avenirbold': require('../assets/avenir_ff/AvenirLTStd-Black.otf'),
        'Avenirroman': require('../assets/avenir_ff/AvenirLTStd-Roman.otf'),
    });
    if (!fontsLoaded) return null;

    return (
        <SafeAreaView style={{ flex: 1, marginTop: 20, alignItems: 'center', backgroundColor: '#F4F4FA' }}>

            <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'flex-start', gap: 50, marginLeft: 50, alignItems: "flex-start", marginTop: 50, marginBottom: 30, }}>
                <Pressable style={styles.back} onPress={() => navigation.goBack()}>
                    <FontAwesomeIcon icon={faAngleLeft} />
                </Pressable>
                <Text style={{ fontFamily: 'Avenirroman', fontSize: 22 }}>Notifications</Text>
            </View>
            <View style={{ alignSelf: 'flex-start', marginTop: -20, margin: 30 }}>
                <Text style={{ color: "black", fontFamily: 'Avenirroman', fontSize: 20, marginBottom: 5 }}>Today</Text>
            </View>
            <View style={{ width: '85%', backgroundColor: "#fff", borderRadius: 10, padding: 15, flexDirection: "row", justifyContent: "space-between", gap: 15 }}>
                <View style={{ height: 50, borderLeftWidth: 3, borderColor: 'red' }}></View>

                <View style={{ width: '100%', flexDirection: "column", gap: 10 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                        <Text style={{ fontFamily: 'Avenirroman', fontSize: 20 }}>Order Successful</Text>
                        <Text style={{ fontFamily: 'Avenir', }}>12:34</Text>
                        <View />
                    </View>
                    <View style={{ width: '100%', }}>
                        <Text style={{ fontFamily: 'Avenir' }}>Congrats on your reserved parking space...</Text>
                    </View>
                </View>

            </View>
            <View style={{ width: '85%', backgroundColor: "#fff", borderRadius: 10, padding: 15, marginVertical: 10, flexDirection: "row", justifyContent: "space-between", gap: 15 }}>
                <View style={{ height: 50, borderLeftWidth: 3, borderColor: 'red' }}></View>

                <View style={{ width: '100%', flexDirection: "column", gap: 10 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                        <Text style={{ fontFamily: 'Avenirroman', fontSize: 20 }}>Order Successful</Text>
                        <Text style={{ fontFamily: 'Avenir', }}>12:34</Text>
                        <View />
                    </View>
                    <View style={{ width: '100%', }}>
                        <Text style={{ fontFamily: 'Avenir' }}>Congrats on your reserved parking space...</Text>
                    </View>
                </View>
            </View>
            <View style={{ width: '85%', backgroundColor: "#fff", borderRadius: 10, padding: 15,marginBottom: 10 ,flexDirection: "row", justifyContent: "space-between", gap: 15 }}>
                <View style={{ height: 50, borderLeftWidth: 3, borderColor: 'rgba(255,0,0,0.3)' }}></View>

                <View style={{ width: '100%', flexDirection: "column", gap: 10 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                        <Text style={{ fontFamily: 'Avenirroman', fontSize: 20, color:"#999" }}>Order Successful</Text>
                        <Text style={{ fontFamily: 'Avenir',color:"#999" }}>12:34</Text>
                        <View />
                    </View>
                    <View style={{ width: '100%', }}>
                        <Text style={{ fontFamily: 'Avenir', color:"#999" }}>Congrats on your reserved parking space...</Text>
                    </View>
                </View>
            </View>
            <View style={{ alignSelf: 'flex-start', marginLeft: 30, marginVertical:5 }}>
                <Text style={{ color: "black", fontFamily: 'Avenirroman', fontSize: 20, marginBottom: 5 }}>Yesterday</Text>
            </View>
            <View style={{ width: '85%', backgroundColor: "#fff", borderRadius: 10, padding: 15,marginBottom: 10 ,flexDirection: "row", justifyContent: "space-between", gap: 15 }}>
                <View style={{ height: 50, borderLeftWidth: 3, borderColor: 'rgba(255,0,0,0.3)' }}></View>

                <View style={{ width: '100%', flexDirection: "column", gap: 10 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%', }}>
                        <Text style={{ fontFamily: 'Avenirroman', fontSize: 20, color:"#999" }}>Order Successful</Text>
                        <Text style={{ fontFamily: 'Avenir', color:"#999"}}>12:34</Text>
                        <View />
                    </View>
                    <View style={{ width: '100%', }}>
                        <Text style={{ fontFamily: 'Avenir', color:"#999" }}>Congrats on your reserved parking space...</Text>
                    </View>
                </View>
            </View>
            <View style={{ width: '85%', backgroundColor: "#fff", borderRadius: 10, padding: 15,marginBottom: 10 ,flexDirection: "row", justifyContent: "space-between", gap: 15 }}>
                <View style={{ height: 50, borderLeftWidth: 3, borderColor: 'red' }}></View>

                <View style={{ width: '100%', flexDirection: "column", gap: 10 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                        <Text style={{ fontFamily: 'Avenirroman', fontSize: 20 }}>Order Successful</Text>
                        <Text style={{ fontFamily: 'Avenir', }}>12:34</Text>
                        <View />
                    </View>
                    <View style={{ width: '100%', }}>
                        <Text style={{ fontFamily: 'Avenir' }}>Congrats on your reserved parking space...</Text>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}
export default Notifications;

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