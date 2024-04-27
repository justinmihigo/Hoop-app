    import { View, Text, StyleSheet, SafeAreaView, ImageBackground, TextInput, TouchableOpacity,Image,KeyboardAvoidingView } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { useNavigation,Link } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import AppWriteService from "../src/appwrite/service";
import { error, successToast } from '../src/appwrite/alert';

export default function ForgetPassword() {

    // const navigator = useNavigation()
    const [email, setEmail]= useState("");
    const handleReset=()=>{
        AppWriteService.forgetPassword(email).then(res=>{
            console.log(res)
            if(res){
                successToast("the email has been sent successfully");

            }else{
                error("check your email")
            }
        }).catch(err=>{
            console.log(err)
            error("invalid email");
        })
    }

    useLayoutEffect(() => {

        // navigator.setOptions({
        //     headerShown: false
        // })
        
    },[])
    const [fontLoaded] = useFonts({
        'Avenir': require('../assets/avenir_ff/AvenirLTStd-Book.otf'),
        'Avenirbold': require('../assets/avenir_ff/AvenirLTStd-Black.otf'),
        'Avenirroman': require('../assets/avenir_ff/AvenirLTStd-Roman.otf'),
    })
    if (!fontLoaded) return null;

  return (
    <SafeAreaView style={styles.parent}>
          
              
              
          
        <View style={styles.content}>
            <View style={styles.returnNavi}>
                <Link to='/loginbyemail'><Image  style={{height:24,width:24,backgroundColor:"#EAEAF3",padding:20,borderRadius:10}}source={require("../assets/Arrow - Left 2.png")}/></Link>
                <Text style={styles.innerr}>Forgot Password</Text>
            </View>
            
            <View style={{gap:5,justifyContent:"center", marginTop:-230}}>
            <Text style={styles.reset}>Reset Password</Text>
                
                <Text style={styles.innerrText}>Enter the email associated with your </Text> 
                <Text style={styles.innerrText}>account and we’ll 
                     send an email with </Text>
                     <Text style={styles.innerrText}>instructions
                      to reset your password.</Text>

             
             <View style={styles.container}>
                    <Text style={styles.innerrTextt}>Email address</Text>
                    
                    <TextInput placeholder='Email' style={styles.input} onChangeText={setEmail}/>

              </View>
            </View>
          
              
              <View style={styles.actions}>
                  
                  <TouchableOpacity style={styles.btn} onPress={handleReset}>
                      <Link to="/comfirm-forger"><Text style={styles.inner}>Send</Text></Link>
                  </TouchableOpacity>
                  
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
        fontSize: 22,
        fontFamily:'Avenirroman',
        fontWeight:"bold",
        color: "#2D2D2D",
        marginLeft:-70
        // gap:20
        // fontFamily:"Avenir"
        
    },
    content: {
        flex: 2,
        backgroundColor: '#F5F5F5',
        // alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: "column",
        // marginTop:-130,

        width: "100%",
        // borderTopRightRadius: 38,
        // borderTopLeftRadius: 38,
        padding:20,
    
    },

    container: {
        width: "100%",
        gap:10,
        
    },
    input: {
        width: "100%",
        padding: 15,
        borderRadius: 15,
        backgroundColor: "white",
        fontFamily:'Avenir',
        fontSize:18
    
    },
    returnNavi:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-around",
        // gap:8,
        marginLeft:-60,
    
        

    },

    btn: {
        backgroundColor: "#130F26",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        padding: 13,
        borderRadius:15,
        height:60,
        marginBottom:-60,
    
    },

    inner: {
        color: "white",
        fontFamily:'Avenir',
        fontSize:20
    } ,
    innerr: {
        color: "#2D2D2D",
        fontFamily:'Avenir',
        fontSize:20,
        position:"relative",
        left:-50,

    } ,

    reset: {
        color: "#2D2D2D",
        fontFamily:'Avenir',
        fontSize:20,
        position:"relative",
        bottom:10
    } ,

    innerrText: {
        color: "#2D2D2D",
        fontFamily:'Avenir',
        fontSize:16
    },
    innerrTextt:{
        color: "#2D2D2D",
        fontFamily:'Avenir',
        fontSize:16,
    
        

    },

    actions: {
        width:"100%"
    },

    acts: {
        textAlign: "center",
        marginTop: 20,
        color: "#2D2D2D80",
        fontFamily: 'Avenir'
    }

    
    
})

