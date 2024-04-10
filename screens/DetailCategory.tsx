import { SafeAreaView, View, Pressable, Text, StyleSheet, Image, FlatList } from "react-native";
import { faAngleLeft, faFilter, faLocationCrosshairs } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { useFonts } from "expo-font";
const DetailCategory: React.FC = () => {
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
            <View style={{ flexDirection: "row", justifyContent: "space-between", backgroundColor: '#fff', marginHorizontal: 30, marginTop: 10, padding: 10, borderRadius: 10 }}>
                <Image source={item.image} style={{ width: 80, height: 80, resizeMode: "contain" }} />
                <View>
                    <Text style={{ fontFamily: 'Avenirbold', marginBottom: 5 }}>{item.location}</Text>
                    <Text style={{ fontFamily: 'Avenir' }}>{item.street}</Text>
                    <Text style={{ fontFamily: 'Avenir', color: "#F43939", marginTop: 10 }}>
                        <Text style={{ fontFamily: 'Avenirbold', fontSize: 20 }} >{item.price}</Text>/hour</Text>
                </View>
                <View style={{ backgroundColor: "FFF3F3" }}>
                    <Text style={{ fontFamily: 'Avenir', color: "#F43939", backgroundColor: "#FFF3F3", padding: 5, paddingHorizontal: 10, borderRadius: 15 }}>{item.minutes}</Text>
                </View>
            </View>
        );
    };
    return (
        <SafeAreaView style={{ flex: 1, marginTop: 20, alignItems: 'center' }}>

            <View style={{ flexDirection: 'row', gap: 40, alignItems: "flex-start", marginTop: 50, marginBottom: 30, }}>
                <Pressable style={styles.back} onPress={() => navigation.goBack()}>
                    <FontAwesomeIcon icon={faAngleLeft} />
                </Pressable>
                <Text style={{ fontFamily: 'Avenirroman', fontSize: 22 }}>Detail Category</Text>
                <Pressable style={styles.back} onPress={() => alert("pressed")}>
                    <FontAwesomeIcon icon={faFilter} />
                </Pressable>
            </View>
            <View style={{ width: '80%', flexDirection: 'row', alignItems: 'center', gap: 30, marginHorizontal: 20 }}>
                <Image source={require("../assets/nearst.png")} style={{ width: 70, height: 80, resizeMode: "contain" }} />
                <Text style={{ textAlign: 'center', fontFamily: 'Avenir', lineHeight: 30, fontSize: 15, color: "#888" }}>
                    Most Popular Most Wanted
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
export default DetailCategory;

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