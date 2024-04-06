import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import "../styles/loader.css"

export default function Loader() {
  return (
    <View className="loading">
      <Text classname="spinner">dd</Text>
    </View>
  )
}




// .loading {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     margin-top: 5px;
//   }
 
//   .spinner {
//     border: 8px solid rgba(0, 0, 0, 0.1); 
//     border-top: 8px solid #3498db; 
//     border-radius: 50%; 
//     width: 100px;
//     height: 100px;
//     animation: spin 1s linear infinite;
//   }

// @keyframes spin {
//     0% { transform: rotate(0deg); }
//     100% { transform: rotate(360deg); }
//   }