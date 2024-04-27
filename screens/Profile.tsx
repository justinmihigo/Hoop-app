import { View, Text,StyleSheet,Image,TextInput,ImageBackground ,TouchableOpacity} from 'react-native'
import React, { useContext } from 'react'
import { useFonts } from 'expo-font';
import ProfileComponent from '../components/ProfileComponent';
import {Link, useNavigation} from "@react-navigation/native"
import AppwriteContext from '../src/appwrite/appwriteContext';
import { AppContext } from '../context/Provider';
interface Category {
    id: number;
    name: string;
    imageSource: any;
    icon:any
  }

  const Profile: React.FC = () => {

    const navigator = useNavigation()


    const {appwriteService} = useContext(AppwriteContext)
    const {currentUser} = useContext(AppContext)

    const categories: Category[] = [
        { 
        id: 1,
         name: 'Profile',
          imageSource: require('../assets/Profile.png'),
          icon: require("../assets/Arrow - Right 2.png")
         },

        { 
        id: 2,
        name: 'Go Pro',
         imageSource: require('../assets/Discount.png'),
         icon: require("../assets/Arrow - Right 2.png")
        
        },

        { 

        id: 3,
         name: 'Terms & Conditions',
         imageSource: require('../assets/Document.png'),
         icon: require("../assets/Arrow - Right 2.png")
        
        },

        { 
        id: 4,
        name: 'FAQ',
         imageSource: require('../assets/bi_question-circle.png'),
         icon: require("../assets/Arrow - Right 2.png")
        
        },

        { 
        id: 5,
        name: 'Settings',
         imageSource: require('../assets/Setting.png'),
         icon: require("../assets/Arrow - Right 2.png")
        
        },
        
      ];
    
      const handleCategoryPress = (categoryId: number) => {
        
      };

    const [fontLoaded] = useFonts({
        'Avenir': require('../assets/avenir_ff/AvenirLTStd-Book.otf'),
        'Avenirbold': require('../assets/avenir_ff/AvenirLTStd-Black.otf'),
        'Avenirroman': require('../assets/avenir_ff/AvenirLTStd-Roman.otf'),
    })
    if (!fontLoaded) return null;

    const handleLogout=async()=>{
        try {
            await appwriteService.logout()

            navigator.navigate("loginbyemail" as never);

        
        } catch (error) {
            
        }
    }
  return (
    <View style={styles.mainContainer}>

     <ImageBackground source={require("../assets/homelayer(1).png")}>
    

            <View style={styles.TopContainer}>

                <View >
                    <View>
                        <Text style={styles. header}><Link to={'/upgradepro'}>Profile</Link ></Text>
                    </View>
                </View>

                <View style={{display:"flex", flexDirection:"row",gap:140}}>

                

             <View style={{display:"flex",flexDirection:"row",gap:20,alignItems:"center",justifyContent:"space-around",width:"100%"}}>

                        <View >
                          <Image source={require("../assets/Ellipse 19.png")}></Image>
                        </View>


                        <View style={{display:"flex",flexDirection:"column"}}>
                            <Link to={("/editProfile")}><Text style={{color:"#FFFFFF",fontSize:14,fontFamily:"Avenir"}}>Welcome</Text></Link>
                            <Link to={("/editProfile")}><Text style={{color:"white",fontSize:20,fontFamily:"Avenir"}}>{currentUser}</Text></Link>
                       </View>


             <TouchableOpacity onPress={handleLogout}>
                <View style={{borderRadius:10}}>
                    <Image source={require("../assets/profilenavv.png")}></Image>
                </View>
            </TouchableOpacity>

             </View>
{/* 
             <TouchableOpacity>
                    <View style={{borderRadius:10}}>
                        <Image source={require("../assets/profilenavv.png")}></Image>
                    </View>
                    </TouchableOpacity> */}

                    </View>

                

               
              
            
            </View>


        
     
     
        <View style={styles.BottomContainer}>
            
          
            <View style={styles.container}>
             {categories.map(category => (
             <ProfileComponent
                     key={category.id}
                     imageSource={category.imageSource}
                     name={category.name}
                     Icon={category.icon}
                     onPress={() => handleCategoryPress(category.id)}            />
             ))}
           </View>
           <View >
            
           </View>
    
           <TouchableOpacity style={styles.helpbtn}>
            <Image style={{height:24,width:24}}source={require("../assets/whh_headphonesalt.png")}></Image>
            <Text style={{color:"#FFFFFF",fontSize:18,fontFamily:"Avenir"}}>How can we help you?</Text>
           </TouchableOpacity>
           
        </View>
        </ImageBackground>
        
    </View>

  )
}
const styles = StyleSheet.create({

    mainContainer:{
        flex:1,
        // backgroundColor:"#1c2841 | rgb(28,30,50)",
        backgroundColor:"#130F26",
        width:"100%"
        
        
        
    },
    TopContainer:{
        // backgroundColor:"white",
        height:"35%",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",

        

    },
    helpbtn:{
        backgroundColor: '#081024',
        width: 311,
        height: 60,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
        display:"flex",
        flexDirection:"row",
        gap:10,
        marginLeft:50
        
    },
    
    
    container: {
        flexDirection: "column",
        flexWrap: 'wrap',
        justifyContent: 'center',
        padding: 45,
        
      },

    BottomContainer:{
        display:"flex",
        gap:10,
        backgroundColor:"white",
        height:"65%",
        borderTopLeftRadius:38,
        borderTopRightRadius:38,
    },



    header:{
        color:"#FFFFFF",
        fontSize:20,
        fontFamily:"Avenirroman",
        position:"relative",
        padding:40
    },
    Textt:{
        color:"#696969 | rgb(105,105,105)",
        fontSize:16,
        fontFamily:"Avenir"
    }

})
export default Profile;