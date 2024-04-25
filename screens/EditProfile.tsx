import { View, Text, StyleSheet, SafeAreaView, ImageBackground, TextInput, TouchableOpacity,Image,KeyboardAvoidingView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation,Link } from '@react-navigation/native';
import { useFonts } from 'expo-font';

export default function EditProfile() {

    

    useLayoutEffect(() => {

        
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

            <View style={styles.profileContainer}>

                    <View style={styles.returnNavi}>
                        <TouchableOpacity><Image  style={{height:24,width:24,backgroundColor:"#EAEAF3",padding:20,borderRadius:10}}source={require("../assets/Arrow - Left 2.png")}/></TouchableOpacity>
                        <Text style={styles.innerr}>Edit Profile</Text>
                    </View>
                    <TouchableOpacity>
                    

                    <View style={{marginLeft:150}}>
                       <Image style={{height:86,width:86}}source={require("../assets/editprofile.png")}></Image>
                    </View>
        
                    </TouchableOpacity>

                    <View style={styles.textt}>

                      <Text style={{fontSize:16,}}>Name</Text>

                          <View style={{justifyContent:"center",}}>
                          <TextInput placeholder='Echa' style={styles.input}/>

                       <View style={styles.typeIdcontainer}>

                            <View>
                                 <Text style={{fontSize:16,fontFamily:"Avenir",padding:10}}>Type</Text>
                                <TextInput style={{height:54,width:146,backgroundColor:"#FFFFFF",borderRadius:10,fontSize:18,padding:15}}placeholder='Car Sport'/>
                            </View>

                            <View>
                                <Text style={{fontSize:16,fontFamily:"Avenir",padding:10}}>ID</Text>
                                <TextInput  style={{height:54,width:146,backgroundColor:"#FFFFFF",borderRadius:10,fontSize:18,padding:15}}placeholder='C68721'/>
                            </View>

                        

                        </View>
                        
                        
                </View>
                <Text style={{fontSize:16,padding:10,fontFamily:"Avenir"}}>Address</Text>
                <TextInput placeholder='Address' style={styles.input}/>
              </View>
              

              <View style={styles.endContainer}>
              <TouchableOpacity><Text style={styles.saveAndCancel}>Cancel</Text></TouchableOpacity>
              <TouchableOpacity><Text  style={styles.saveAndCancel2}> Save</Text></TouchableOpacity>
              </View>
              
              
            
          

            </View>
            
              
             
        </View>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
    parent: {

        flex: 1,
        
        backgroundColor: '#F5F5F5',
        // alignItems: 'center',
        flexDirection:"column",
        marginTop:"30%"
    },

    endContainer:{
        gap:10,
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-around",
        marginTop:100,
        position:"relative"
    },

   
    content: {
        flex: 2,
        backgroundColor: '#F5F5F5',
        justifyContent: 'space-around',
        flexDirection: "column",
        width: "100%",
        padding:20,
    
    },

    container: {
        width: "100%",
        gap:10,
        
    },

    textt:{
    display:"flex",
    flexDirection:"column",
    gap:10,

    },

    typeIdcontainer:{
        display:"flex",
        flexDirection:"row",
        // gap:10,
        paddingTop:15,
        justifyContent:"space-around",
        marginLeft:-20
    },

    input: {
        width: 350,
        height:54,
        borderRadius: 10,
        padding:15,
        backgroundColor: "white",
        fontFamily:'Avenir',
        fontSize:18
    
    },

    saveAndCancel:{
            width: 146,
            height:60,
            borderRadius: 15,
            padding:15,
            backgroundColor: "#EAEAF3",
            fontFamily:'Avenir',
            fontSize:18,
            textAlign:"center"
            
           },


           saveAndCancel2:{
            width: 146,
            height:60,
            borderRadius: 15,
            padding:15,
            backgroundColor: "#130F26",
            fontFamily:'Avenir',
            fontSize:18,
            color:"white",
            textAlign:"center"
           },

    returnNavi:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-around",
        gap:-30,
        marginLeft:-60,
        marginTop:-110
    
        

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
    } ,
    innerr: {
        color: "#2D2D2D",
        fontFamily:'Avenirroman',
        fontSize:20,
        position:"relative",
        left:-50,

    } ,

    profileContainer:{
        display:"flex",
        justifyContent:"center",
        flexDirection:"column",
        gap:40
    }

    
    
})

