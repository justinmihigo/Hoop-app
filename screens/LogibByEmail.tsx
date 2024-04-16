import { View, Text, StyleSheet, SafeAreaView, ImageBackground, TextInput, TouchableOpacity,Pressable,Image } from 'react-native'
import React, { useLayoutEffect, useRef, useState } from 'react'
import { useNavigation,Link } from '@react-navigation/native';
import { useFonts } from 'expo-font';

export default function LoginByEmail() {

    const [selectedCountryCode,setSelectedCountryCode]= useState("")

    const navigator = useNavigation()


    useLayoutEffect(() => {

        navigator.setOptions({
            headerShown: false
        })
        
    },[])
    const [fontLoaded] = useFonts({
        'Avenir': require('../assets/avenir_ff/AvenirLTStd-Book.otf'),
        'Avenirbold': require('../assets/avenir_ff/AvenirLTStd-Black.otf'),
        'Avenirroman': require('../assets/avenir_ff/AvenirLTStd-Roman.otf'),
    })
    if (!fontLoaded) return null;

  return (
    <SafeAreaView style={styles.parent}>
          <ImageBackground source={require("../assets/Group243.png")} style={styles.header}>
              <View  style={{padding:20}}>
              <Text style={styles.headerText}>Glad to see you!!</Text>
      </View>
          </ImageBackground>
          <View style={styles.content}>
              <View style={styles.container}>
            
                  
                  
                 <TextInput placeholder='Email' style={styles.input}>
                    <Text style={{fontSize:18,fontFamily:"Avenir"}}>Email</Text>
                      
              
                  </TextInput>
                  <TextInput placeholder='Password' style={styles.input}>
                     {/* <Image style={{marginLeft:10}}source={require("../assets/Group (2).png")}></Image> */}
                  
                  <Text style={{fontSize:18,fontFamily:"Avenir"}}>Password</Text>
                 


                  
                  </TextInput>
                  <Text style={styles.forgot}><Link to={"/ForgetPass"}><Text>Forgot password ?</Text></Link> <Text style={{ color: "red", fontFamily:"Avenir",}}>Retrieve</Text></Text>
                  
              </View>
              <View>
                  
              </View>
              <View style={styles.actions}>
                  
                  <TouchableOpacity style={styles.btn}>
                      <Text style={styles.inner}>Login</Text>
                  </TouchableOpacity>

                  <Text style={styles.acts}>Don't have account ? <Text style={{color:"red"}} onPress={()=>navigator.navigate("signup" as never)}>Sign up</Text></Text>
                  
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
        flexDirection:"column"
    },

    header: {
        flex: 1,
        // backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: "flex-start",
        flexDirection: "row",
        width: "100%",
        // padding: 20,
        
        
    },

    headerText: {
        fontSize: 32,
        color: "white",
        fontFamily:"Avenirroman",
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
        padding:20
    },

    container: {
        width: "100%",
        gap:10
        
    },
    input: {
        display:"flex",
        flexDirection:"row",
        // justifyContent:"space-between",
        width: "100%",
        padding: 13,
        borderRadius: 15,
        backgroundColor: "white",
        fontFamily:"Avenir",
        height:60,
        // width:311
    },

    btn: {
        backgroundColor: "#130F26",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        padding: 13,
        borderRadius:15,
        height:60
    },

    inner: {
        color: "white",
        fontSize:20,
        fontFamily:"Avenir"
    } ,

    actions: {
        width:"100%"
    },

    acts: {
        textAlign: "center",
        marginTop: 10,
        color: "#2D2D2D80",
        fontFamily:"Avenir",
    },
    forgot:
        { marginLeft: "auto", color: "#2D2D2D80", fontSize: 14, fontFamily:"Avenir", },

    countryPicker: {
        width: "100%",
        borderRadius: 15,
        backgroundColor: "white",
        marginBottom: 10,
        flexDirection:"row"
    }
    
})

// font-family: Avenir;
// font-size: 32px;
// font-weight: 500;
// line-height: 43.71px;
// text-align: left;
