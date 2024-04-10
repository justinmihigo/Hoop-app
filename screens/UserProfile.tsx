import { View, Text, StyleSheet, SafeAreaView, ImageBackground, TextInput, TouchableOpacity, Image, FlatList } from 'react-native'
import React, { useLayoutEffect, useRef, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faRightFromBracket, faAngleRight, faGear, faPercent, faHeadset } from '@fortawesome/free-solid-svg-icons';
import { faUser, faCircleQuestion, faFileLines } from '@fortawesome/free-regular-svg-icons';
import { useFonts } from 'expo-font';
import ButtonWithProps from '../components/buttonWithProps';

export default function UserProfile() {
    const list = [
        {
            title: 'Profile',
            icon: faUser
        },
        {
            title: 'Go Pro',
            icon: faPercent
        },
        {
            title: 'Terms & Conditions',
            icon: faFileLines
        },
        {
            title: 'FAQ',
            icon: faCircleQuestion
        },
        {
            title: 'Settings',
            icon: faGear
        }
    ]
    const renderItem = ({ item, index }: any) => {
        return (
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 25 }}>
                <View style={{ flexDirection: 'row', gap: 25 }}>
                    <FontAwesomeIcon icon={item.icon} size={24} />
                    <Text style={{ fontFamily: 'Avenir', fontSize: 20 }} onPress={()=>alert(index)}>{item.title}</Text>
                </View>
                <FontAwesomeIcon icon={faAngleRight} size={20} />
            </View>
        )
    }
    const [selectedCountryCode, setSelectedCountryCode] = useState("")

    const navigator = useNavigation()


    useLayoutEffect(() => {

        navigator.setOptions({
            headerShown: false
        })

    }, [])
    const [fontLoaded] = useFonts({
        'Avenir': require('../assets/avenir_ff/AvenirLTStd-Book.otf'),
        'Avenirbold': require('../assets/avenir_ff/AvenirLTStd-Black.otf'),
        'Avenirroman': require('../assets/avenir_ff/AvenirLTStd-Roman.otf'),
    })
    if (!fontLoaded) return null;

    return (
        <SafeAreaView style={styles.parent}>
            <ImageBackground source={require("../assets/background.png")} style={styles.header}>
                <View style={{ padding: 20 }}>
                    <Text style={styles.headerText}>Profile</Text>
                </View>
                <View style={{ flexDirection: "row",gap:100, marginTop: 30 }}>
                    <View style={{ flexDirection: "row", gap: 30}}>
                        <Image source={require("../assets/profilephoto.png")} style={{ width: 50, height: 50, borderRadius: 25, resizeMode: "cover" }} />
                        <View>
                            <Text style={{ color: "#888", fontFamily: 'Avenir', fontSize: 17 }}>Welcome</Text>
                            <Text style={{ color: "white", fontFamily: 'Avenirroman', fontSize: 25 }}>Diane</Text>
                        </View>
                    </View>
                    <View style={{ height: 50, width: 50, borderRadius: 10, backgroundColor: '#2A344E', padding: 20, alignItems: 'center', justifyContent: 'center' }}>
                        <FontAwesomeIcon icon={faRightFromBracket} size={30} color='#888' />
                    </View>
                </View>
            </ImageBackground>
            <View style={styles.content}>
                <View style={styles.container}>
                    {/* <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'baseline', marginHorizontal: 10 }}>
                        <View style={{ flexDirection: 'row', gap: 25 }}>
                            <FontAwesomeIcon icon={faUser} size={24} />
                            <Text style={{ fontFamily: 'Avenir', fontSize: 25 }}>Profile</Text>
                        </View>
                        <FontAwesomeIcon icon={faAngleRight} size={20} />
                    </View> */}
                    <FlatList data={list} renderItem={renderItem} />

                </View>
                <View>

                </View>
                <View style={styles.actions}>

                    <TouchableOpacity>
                        <ButtonWithProps color='black' icon={faHeadset} textColor='white' title='How can we help you'/>
                    </TouchableOpacity>

                    <Text style={styles.acts}>Parking v1.0</Text>

                </View>

            </View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    parent: {
        flex: 1,
        backgroundColor: '#130F26',
        alignItems: 'center',
        flexDirection: "column"
    },

    header: {
        flex: 1,
        // backgroundColor: 'red',
        alignItems: "center",
        width: "100%",
        resizeMode: 'contain'
        // padding: 20,


    },

    headerText: {
        fontSize: 32,
        color: "white",
        fontFamily: "Avenirroman",
        // fontFamily:"Avenir"

    },
    content: {
        flex: 2,
        backgroundColor: '#F4F4FA',
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: "column",

        width: "100%",
        borderTopRightRadius: 38,
        borderTopLeftRadius: 38,
        padding: 20,
    },

    container: {
        width: "100%",
        gap: 10,
        marginTop: 30

    },
    input: {
        width: "100%",
        padding: 13,
        borderRadius: 15,
        backgroundColor: "white",
        fontFamily: "Avenir",
    },

    btn: {
        backgroundColor: "#130F26",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        padding: 13,
        borderRadius: 15
    },

    inner: {
        color: "white",
    },

    actions: {
        width: "100%"
    },

    acts: {
        textAlign: "center",
        marginTop: 10,
        color: "#2D2D2D80",
        fontFamily: "Avenir",
    },
    forgot:
        { marginLeft: "auto", color: "#2D2D2D80", fontSize: 14, fontFamily: "Avenir", },

    countryPicker: {
        width: "100%",
        borderRadius: 15,
        backgroundColor: "white",
        marginBottom: 10,
        flexDirection: "row"
    }

})

// font-family: Avenir;
// font-size: 32px;
// font-weight: 500;
// line-height: 43.71px;
// text-align: left;
