
import React from 'react'
import { useFonts } from 'expo-font';
import { useLayoutEffect } from 'react'
import { View, Text, StyleSheet, SafeAreaView, ImageBackground, TextInput, TouchableOpacity,Image, } from 'react-native'
import Button from '../components/buttons';
import { useNavigation,Link } from '@react-navigation/native';

export default function ConfirmForgetPassword() {

  const [fontLoaded] = useFonts({
    'Avenir': require('../assets/avenir_ff/AvenirLTStd-Book.otf'),
    'Avenirbold': require('../assets/avenir_ff/AvenirLTStd-Black.otf'),
    'Avenirroman': require('../assets/avenir_ff/AvenirLTStd-Roman.otf'),
})
if (!fontLoaded) return null;

  return (
    <View style={styles.mainContainer}>
      <View style={styles.Imagee}>
      <Image source = {require("../assets/Layer 2.png")}/>
      </View>
      <View style={styles.checkEmail}>
        <Text style ={styles.header}>Check your Email</Text>
        <Text style={styles.text}>  We have sent a password</Text>
       <Text style={styles.text}>recover instructions to your</Text>
        <Text style={styles.text}>                email.</Text>
      </View>
      <TouchableOpacity style ={styles.buttonn}>
        <Text style={styles.buttonText}><Link to={"/otpscreen"}>Open email app</Link></Text>
      </TouchableOpacity>
      <Text style={styles.skiptext}>
      <Link to={"/pinverify"}>Skip I’ll confirm later</Link> 
      </Text>
      <View style={styles.onbottonText}>
        <Text style={styles.bottonText}>
        Didn’t receive the email? Check your spam 
        </Text>

        <Text style={styles.bottonText}>        filter, or <Text style={{fontSize:14,color:"#F43939"}}>try another email address</Text>
        </Text>
      </View>
      
      
    </View>
  )
}
const styles = StyleSheet.create({
  Imagee:{
    height:183,
    width:254,
    marginTop:268
    // backgroundColor:"#2D2D2D"
    

  },
  mainContainer:{
    margin:50,
    width:292,
    height:292,
    backgroundColor:"#EAEAF3",
    justifyContent:"center",
    alignContent:"center",
    alignItems:"center",
    borderRadius:150,
    gap:30,
    // marginBottom:-50
    

  },
  header:{
    fontFamily:'Avenir',
    fontSize:28
  },
  skiptext:{
    fontSize:14,
    fontFamily:"Avenir"

  },
  bottonText:{
    fontSize:14,
    fontFamily:'Avenir',

  },

  checkEmail:{
    position:"relative",
    top: 25

  },
  text:{
    fontFamily:'Avenir',
    fontSize:18,
    padding:5
  },
  buttonn:{
    backgroundColor:"#130F26",
    borderRadius:15,
    width:235,
    height:60,
    justifyContent:"center",
    alignItems:"center",
    position:"relative",
    top:23
    
  },
  buttonText:{
    color:"#FFFFFF",
    fontFamily:"Avenir",
    fontSize:20
  },
  onbottonText:{
    marginBottom:-200,
    position:"relative",
    top:80
  }



})