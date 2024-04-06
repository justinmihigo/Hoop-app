import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import {useNavigation} from "@react-navigation/native"
export default function WelcomeScreen() {

    const navigation = useNavigation()


    useLayoutEffect(()=>{
        navigation.setOptions({
            headerTitle:"Welcome",
            headerShown:false
        })
    },[])

  return (
    <SafeAreaView style={styles.container}>
      
      <Text>Welcome to Hoop</Text>
      <Text style={styles.button} 
        onPress={()=>navigation.navigate("login")}
    >
        Login with Phone Number
      </Text>
      <Text style={styles.button2} 
        onPress={()=>navigation.navigate("loginbyemail")}
    >
        Login With Email
      </Text>

    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
    alignItems: "center",
    padding: 20,
        backgroundColor:"#F4F4FA"
    },
    button :{
        padding:15,
        borderRadius:5,
        backgroundColor:"#2D2D2D",
      marginTop: 10,
      width: "100%",
        textAlign:"center",
      color:"white"
    },
    button2 :{
        padding:15,
        borderRadius:5,
        backgroundColor:"white",
      marginTop: 10,
      width: "100%",
        textAlign:"center",
      color:"#2D2D2D80"
    }
})