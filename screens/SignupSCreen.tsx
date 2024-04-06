import { View, Text, StyleSheet, SafeAreaView, ImageBackground, TextInput, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';

export default function SignupSCreen() {

    const navigator = useNavigation()

    useLayoutEffect(() => {

        navigator.setOptions({
            headerShown: false
        })
        
    },[])
    

  return (
    <SafeAreaView style={styles.parent}>
          <ImageBackground source={require("../assets/Group243.png")} style={styles.header}>
              <View  style={{padding:20}}>
              <Text style={styles.headerText}>Let’s start!!</Text>
      </View>
          </ImageBackground>
          <View style={styles.content}>
              <View style={styles.container}>
                  
                  <TextInput placeholder='Email' style={styles.input}></TextInput>
                  <TextInput placeholder='Password' style={styles.input}></TextInput>
                  <TextInput placeholder='Password Authentication' style={styles.input}></TextInput>
                  <TextInput placeholder='Phone number' style={styles.input}></TextInput>
                  
              </View>
              <View style={styles.actions}>
                  
                  <TouchableOpacity style={styles.btn}>
                      <Text style={styles.inner}>Register</Text>
                  </TouchableOpacity>

                  <Text style={styles.acts}>Have any account ? <Text style={{color:"red"}} onPress={()=>navigator.navigate("login")}>sign in</Text></Text>
                  
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
        fontWeight: "500",
        color: "white",
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
        width: "100%",
        padding: 15,
        borderRadius: 5,
        backgroundColor: "white",
    
    },

    btn: {
        backgroundColor: "#130F26",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        padding: 13,
        borderRadius:5
    },

    inner: {
        color: "white",
    } ,

    actions: {
        width:"100%"
    },

    acts: {
        textAlign: "center",
        marginTop: 10,
        color: "#2D2D2D80"
    }
    
})

// font-family: Avenir;
// font-size: 32px;
// font-weight: 500;
// line-height: 43.71px;
// text-align: left;
