

import { View, Text, StyleSheet, SafeAreaView, ImageBackground,Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect, useRef, useState } from 'react'
import { useNavigation,Link } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';
import { useFonts } from 'expo-font';

export default function ParkingRoute() {
    return (
      <View style={{ flex: 1,backgroundColor:"#2D2D2D" }}>
        <View style={styles.container}>
          <Text style={styles.text}>Route</Text>
          <Text style={{fontSize:15,color:"#2D2D2D"}}>Turn left to parking spot</Text>
        </View>
        
        <ImageBackground style={{ flex: 1}} source={require("../assets/image 18.png")}>
          <View style={{ alignItems: "center", marginTop: -125,marginLeft:280,gap:15 }}>
            <Image source={require("../assets/Group (1).png")} />
            <Text style={{ color: "#2D2D2D", fontSize: 18 }}>100 m</Text>
          </View>
  
          <TouchableOpacity style={{ alignItems: "center" }}>
            <Image style={{ marginTop: 400 }} source={require("../assets/Group 245.png")} />
          </TouchableOpacity>
        </ImageBackground>
      </View>
    )
  }
  
  const styles = StyleSheet.create({
    container: {
      backgroundColor: "#F4F4FA",
      height: 200,
      width: "100%",
      borderBottomLeftRadius: 25,
      borderBottomRightRadius: 25,
      justifyContent: "center",
      alignItems:"flex-start",
      padding:30
    },
    text: {
      fontSize: 26,
      
      color: "#2D2D2D",
    },
  });
  