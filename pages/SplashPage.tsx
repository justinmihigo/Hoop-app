import React from "react";
import { View, Text, Pressable } from "react-native";
import { Image } from "expo-image";

const SplashPage: React.FC=()=>{
    return (
        <View>
            <Image source={require("../assets/image.png")}
            />
        </View>
    );
}
export default SplashPage