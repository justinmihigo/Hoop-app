import { View, Text,StyleSheet,Image,TextInput,ImageBackground ,TouchableOpacity} from 'react-native'
import React, {useContext, useEffect} from 'react'
import { useFonts } from 'expo-font';
import CategoryCard from '../components/CategoriesComponent';
import { useNavigation, Link } from '@react-navigation/native';
import AppWriteService from '../src/appwrite/service'
import { AppContext } from '../context/Provider';
interface Category {
    id: number;
    name: string;
    imageSource: any;
  }

  const Categories: React.FC = () => {
    // useEffect(() =>{
    //     AppWriteService.getCurrentUser().then((user) => console.log(user)).catch((err) => console.log(err)),[];
    // }
    
    // )

    const {currentUser} = useContext(AppContext)

    const categories: Category[] = [
        { id: 1, name: 'Car', imageSource: require('../assets/acar.png') },
        { id: 2, name: 'Bike', imageSource: require('../assets/bike.png') },
        { id: 3, name: 'Bus', imageSource: require('../assets/buss.png') },
        { id: 4, name: 'Van', imageSource: require('../assets/vane.png') },
      ];
    
      const handleCategoryPress = (categoryId: number) => {
        
      };

    const [fontLoaded] = useFonts({
        'Avenir': require('../assets/avenir_ff/AvenirLTStd-Book.otf'),
        'Avenirbold': require('../assets/avenir_ff/AvenirLTStd-Black.otf'),
        'Avenirroman': require('../assets/avenir_ff/AvenirLTStd-Roman.otf'),
    })
    if (!fontLoaded) return null;
  return (
    <View style={styles.mainContainer}>

     <ImageBackground source={require("../assets/homelayer(1).png")}>
    

            <View style={styles.TopContainer}>

                <View style={styles.textandNotfication}>
                    <View style={styles.TextContain}>
                        <Text style={styles.header}><Link to={'/profile'}>Hola, {currentUser}</Link>👋🏻</Text>
                        <Text style={styles.Textt}>Find an easy parking spot</Text>
                    </View>
                    <View style={{borderRadius:10}}>
                        <Image source={require("../assets/notfication.png")}></Image>
                    </View>
                </View>

                <View style={styles.searchContainer}>
                    <TextInput style={{display:"flex",flexDirection:"row",padding:10}}>
                        <Image source={require("../assets/Search.png")}></Image>
                        <Text style={{color:"#696969 | rgb(105,105,105)",fontSize:16,position:"relative"}}>    Search</Text>
                    </TextInput>
                </View>
            
            </View>


        
     
     
        <View style={styles.BottomContainer}>
            <View style={styles.Categogly}>
                <Text style={[{fontFamily:"Avenirbold"},styles.txtCategogly]}><Link to={'/explore'}>Category</Link></Text>
            </View>
          
            <View style={styles.container}>
             {categories.map(category => (
            <CategoryCard
            key={category.id}
            imageSource={category.imageSource}
            name={category.name}
            onPress={() => handleCategoryPress(category.id)}
            />
            ))}
           </View>

           <Text  style={[{fontFamily:"Avenirbold"},styles.txtCategogly2]}>Nearst Parking Spaces</Text>

           <View style={styles.parkingContainer}>
           
           <TouchableOpacity>
                <View style ={styles.parkingcard}>
                <Image source={require("../assets/parking.png")}></Image>

                </View >
                </TouchableOpacity>
                <TouchableOpacity>
                <View style ={styles.parkingcard}>
                <Image source={require("../assets/gooo.png")}></Image>
                    
                </View >

                </TouchableOpacity>

           </View>
           
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
        gap:50

        

    },

    parkingContainer:{
        height:350,
        // backgroundColor:"red",
        width:"100%",
        display:"flex",
        flexDirection:"column",
        justifyContent:"space-around",
        padding:19,
    
        
    

    },

    parkingcard:{
        backgroundColor:"#FFFFFF",
        height:126,
        width:370,
        borderRadius:15,
        gap:7,

        


    },

    txtCategogly:{
        fontSize:20,
        color:"#0A1124"

    },

    txtCategogly2:{
        fontSize:20,
        marginLeft:45,
        color:"#0A1124"

    },
    

    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        padding: 45,
        
      },

    BottomContainer:{
        backgroundColor:"#F4F4FA",
        height:"65%",
        borderTopLeftRadius:38,
        borderTopRightRadius:38,
    },

    textandNotfication:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        // gap:80,
        width:"100%",
        paddingHorizontal:20,
        alignItems:"center"
        

    },
    TextContain:{
        display:"flex",
        flexDirection:"column",
        gap:10,
        
     
    },

    Categogly:{
        position:"relative",
        paddingLeft:45,
        marginTop:30,
        marginBottom:-20


    },
    searchContainer:{
        backgroundColor:"#2A344E",
        height:55,
        width:311,
        borderRadius:15,


    },
    header:{
        color:"#FFFFFF",
        fontSize:20,
        fontFamily:"Avenir",
        
    },
    Textt:{
        color:"#696969 | rgb(105,105,105)",
        fontSize:16,
        fontFamily:"Avenir"
    }

})
export default Categories;