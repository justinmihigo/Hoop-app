import { View,Pressable, Text, StyleSheet } from "react-native";
import {useFonts} from "expo-font"
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome"
import {faPhone} from "@fortawesome/free-solid-svg-icons"
interface BtnProps{
    icon?: any;
    title?: string;
    color: string;
    textColor: string;
}
const ButtonWithProps: React.FC<BtnProps>=({icon,title,color, textColor}:BtnProps)=>{
    const [fontsLoaded]= useFonts({'Avenir': require('../assets/avenir_ff/AvenirLTStd-Book.otf')})
    if(!fontsLoaded) return null;
    const newstyles=StyleSheet.create({
        bgcolor:{
            backgroundColor:color,
        },
        textColor:{
            color:textColor,
        },
    });
    return(
        <View>
            <View style={[styles.button,newstyles.bgcolor]}>
                <View style={styles.flex}>
                   {icon?<FontAwesomeIcon icon={icon} size={20} color={textColor}/>:""}
                    {title?<Text style={[styles.btntxt, newstyles.textColor]}>{title}</Text>:""}
                </View>
            </View>
            
        </View>
    )
}
export default ButtonWithProps;
const styles = StyleSheet.create({
     button:{
         width: '100%',
         height: 60,
         borderRadius: 10,
         justifyContent: 'center',
         alignItems: 'center',
         marginTop: 10,
         marginBottom: 20,
     },
     btntxt:{
         fontSize: 17,
         fontFamily:'Avenir',
     },
     flex:{
        flexDirection: 'row',
        gap: 10,
     }
})