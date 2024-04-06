import { View, Text, StyleSheet, SafeAreaView, ImageBackground, TextInput, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect, useRef, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';

export default function LoginSCreen() {

    const [selectedCountryCode,setSelectedCountryCode]= useState("")

    const navigator = useNavigation()


    const pickerRef = useRef()

    const open = () => {
    if (pickerRef.current) {
        //@ts-ignore
        pickerRef.current.focus()
    }
    }
        
    const close = () => {
        if (pickerRef.current) {
            //@ts-ignore
    pickerRef.current.blur()
  }
    }

    useLayoutEffect(() => {

        navigator.setOptions({
            headerShown: false
        })
        
    },[])
    

  return (
    <SafeAreaView style={styles.parent}>
          <ImageBackground source={require("../assets/Group243.png")} style={styles.header}>
              <View  style={{padding:20}}>
              <Text style={styles.headerText}>Glad to see you!!</Text>
      </View>
          </ImageBackground>
          <View style={styles.content}>
              <View style={styles.container}>
                  
                   <View style={styles.countryPicker}>
                      <Picker
                          ref={pickerRef}
                            selectedValue={selectedCountryCode}
                            onValueChange={(itemValue) => setSelectedCountryCode(itemValue)}
                          style={{ height: 50, width: 120 }}
                          numberOfLines={1}
                          
                        >
                            <Picker.Item label="+1 (USA)" value="+1" />
                            <Picker.Item label="+91 (India)" value="+91" />
                            <Picker.Item label="+250 (Rwanda)" value="+250" />
                            <Picker.Item label="+256 (Burundi)" value="+256" />
                            
                      </Picker> 
                      
                       <TextInput placeholder='Phone Number' style={styles.input}>
                      
              
                  </TextInput>
                    </View>
                  
                  
                 
                  <TextInput placeholder='Phone number' style={styles.input}></TextInput>
                  <Text style={styles.forgot}>Forgot password ? <Text style={{ color: "red"}}>Retrieve</Text></Text>
                  
              </View>
              <View>
                  
              </View>
              <View style={styles.actions}>
                  
                  <TouchableOpacity style={styles.btn}>
                      <Text style={styles.inner}>Login</Text>
                  </TouchableOpacity>

                  <Text style={styles.acts}>Don't have account ? <Text style={{color:"red"}} onPress={()=>navigator.navigate("signup")}>sign Up</Text></Text>
                  
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
        padding: 13,
        borderRadius: 15,
        backgroundColor: "white",
    
    },

    btn: {
        backgroundColor: "#130F26",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        padding: 13,
        borderRadius:15
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
    },
    forgot:
        { marginLeft: "auto", color: "#2D2D2D80", fontSize: 14 },

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
