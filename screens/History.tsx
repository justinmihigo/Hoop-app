import { SafeAreaView, View, Pressable, Text, StyleSheet, Image, FlatList, TextInput } from "react-native";
import { faAngleLeft, faFilter, faLocationCrosshairs } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useNavigation, Link } from "@react-navigation/native";
import React from "react";
import { useFonts } from "expo-font";
const History: React.FC = () => {
    const navigation = useNavigation();
    const [fontsLoaded] = useFonts({
        'Avenir': require('../assets/avenir_ff/AvenirLTStd-Book.otf'),
        'Avenirbold': require('../assets/avenir_ff/AvenirLTStd-Black.otf'),
        'Avenirroman': require('../assets/avenir_ff/AvenirLTStd-Roman.otf'),
    });
    if (!fontsLoaded) return null;
    const data = [

        {
            location: "Graha Mall",
            street: "123 Dhaka Street",
            minutes: "7 min",
            price: "$7",
            image: require('../assets/parking1.png'),
        },
        {
            location: "Graha Mall",
            street: "123 Dhaka Street",
            minutes: "7 min",
            price: "$7",
            image: require('../assets/parking1.png'),
        },
        
        {
            location: "Graha Mall",
            street: "123 Dhaka Street",
            minutes: "7 min",
            price: "$7",
            image: require('../assets/parking2.png'),
        },
    ];
    const renderItem = ({ item, index }: any) => {
        return (
            <View style={{ flexDirection: "row", justifyContent: "space-between", backgroundColor: '#fff', marginHorizontal: 30, marginTop: 10, padding: 10, borderRadius: 15 }}>
                
                <Image source={item.image} style={{ width: 80, height: 104, resizeMode: "contain" }} />
                <View>
                
                    <Text style={{ fontFamily: 'Avenirbold', marginBottom: 5 }}>{item.location}</Text>
                    <Text style={{ fontFamily: 'Avenir' }}>{item.street}</Text>
                    <Text style={{ fontFamily: 'Avenir', color: "#F43939", marginTop: 10 }}>
                        <Text style={{ fontFamily: 'Avenirbold', fontSize: 20 }} >{item.price}</Text>/hour</Text>
                </View>
                
                <View style={{ backgroundColor: "FFF3F3" }}>
                    
                    <Text style={{ fontFamily: 'Avenir', color: "#F43939", backgroundColor: "#FFF3F3", padding: 5, paddingHorizontal: 10, borderRadius: 15 }}>{item.minutes}</Text>
                </View>
                <Text>This Week</Text>
            </View>
        );
    };
    return (
        <SafeAreaView style={{ flex: 1, marginTop: 20, alignItems: 'center' }}>
            

            <View style={{ flexDirection: "column", gap: 40, alignItems: "flex-start", marginTop: 50, marginBottom: 30, }}>

                <Text style={{ fontFamily: 'Avenirroman', fontSize: 22,marginLeft:100 }}>History
                </Text>
                
                <View style={{display:"flex",flexDirection:"row",gap:15}}>

                <TextInput style={styles.inputstyle}>
                        <Image source={require("../assets/Group 253.png")}></Image>
                        <Text style={{color:"#696969 | rgb(105,105,105)",fontSize:16}}>     Search</Text>
                    </TextInput>

                    <Image source ={require("../assets/historyicon.png")}></Image>
                </View>
               
            
            </View>
            <View style={{ width: '80%', flexDirection: 'row', alignItems: 'center', gap: 30, marginHorizontal: 20 }}>
                <Text style={{ textAlign: 'center', fontFamily: 'Avenir', lineHeight: 30, fontSize: 20, color: "#2D2D2D" }}>
                <Link to={'/detailParking'}>Recently</Link>
                </Text>
            </View>
            
            <View style={{ width: '100%' }}>
           
                <FlatList data={data} renderItem={renderItem} />
                
            </View>
            
            <View style={{
                position: 'relative', left: 105, bottom: 100,
                backgroundColor: "black", padding: 8, borderRadius: 50
            }}>
                <FontAwesomeIcon icon={faLocationCrosshairs} size={30} color="white" />
            </View>

        </SafeAreaView>
    )
}
export default History
;

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
    },

    inputstyle:{
        backgroundColor:"#EAEAF3",
        height:55,
        width:241,
        borderRadius:15,
        marginLeft:-25,

    display:"flex",
    flexDirection:"row",
    padding:15

    }
})