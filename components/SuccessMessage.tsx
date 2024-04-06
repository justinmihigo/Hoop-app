import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import { AppContext } from '../context/Provider'

export default function SuccessMessage() {

    const {setIsOpen} = useContext(AppContext)

    const handleClose=()=>{
        setIsOpen(state=>!state)
    }

  return (
    <View style={styles.all}>
        <View style={styles.container}>
        <View style={styles.inner}>
            <View style={styles.text}>
                <Text style={styles.header}>AWESOME!🤩</Text>
                <Text>Congratulations! Your account has been successfully created.</Text>
            </View>
            <Text style={styles.icon}></Text>
        </View>
        </View>

        <TouchableOpacity style={styles.btn} onPress={handleClose}>
            <Text style={styles.close}>Ok</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container : {
        // flex:1,
        // padding:10,
        borderRadius:10,
        width:"50%",
        margin:"auto",
        backgroundColor:"gray",
        justifyContent:"center",
        alignItems:"center",
        position:"absolute",
        top:200,
        // left:50,
        minHeight:300,
        minWidth:100,
        
    },
    inner :{
        width:"100%",
        height:"100%",
        padding:10,
        position:"relative"

    },
    header:{

        textAlign:"center",
        paddingBottom:10,
        fontSize:25

    },

    icon:{
        position:"absolute",
        top:-35,
        left:"40%",
        right:"40%",
        backgroundColor:"blue",
        // paddingHorizontal:40,
        // paddingVertical:30,
        borderRadius:50,
        height:60,
        width:"20%"
        
    },
    text:{
        padding:30
    },
    all:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        position:"absolute",
        width:"200%",
        height:"100%",
        backgroundColor:"rgba(0,0,0,0.8)"
    },
    btn:{
        width:"15%",
        paddingVertical:10,
        backgroundColor:"orange",
        borderRadius:10
    },

    close:{
        textAlign:"center",
        textTransform:"uppercase"
    }
})