import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { NavigationContainer } from "@react-navigation/native"
import LoginScreen from './screens/LoginScreen';
import SignupSCreen from './screens/SignupSCreen';
import WelcomeScreen from './screens/WelcomeScreen';
import Provider from './context/Provider';
import LoginByEmail from './screens/LogibByEmail';
import OtpScreen from './screens/Otpscreen';
import PinVerify from './screens/PinVerify';
import UserProfile from './screens/UserProfile';
import DetailCategory from './screens/DetailCategory';
import DetailParking from './screens/DetailsParking';
import TrackingParking from './screens/TrackingParking';
import ForgetPassword from './screens/ForgetPassword';
import ConfirmForgetPassword from "./screens/ConfirmForgetPassword"
import Payment from './screens/Payment';
import PaymentDetails from './screens/PaymentDetails';
import PaymentSuccess from './screens/PaymentSuccess';
import DetailHistory from './screens/DetailHistory';
import Notifications from './screens/Notifications';
import Categories from './screens/Home';
import Explore from './screens/Explore';
import History from './screens/History';
import EditProfile from './screens/EditProfile';
import Profile from './screens/Profile';
import ParkingRoute from './screens/ParkingRoute';

const Stack = createNativeStackNavigator()

export default function App() {
  return (

      <Provider>
          <NavigationContainer>
              <Stack.Navigator screenOptions={{headerShown:false}}>
              <Stack.Screen name='/' component={WelcomeScreen}/> 
              <Stack.Screen name='parking' component={ParkingRoute}/>
              <Stack.Screen name='profile' component={Profile}/> 
               <Stack.Screen name='editProfile' component={EditProfile}></Stack.Screen>
              <Stack.Screen name='notifications' component={Notifications}/>
              <Stack.Screen name='detailHistory' component={DetailHistory}/>
              <Stack.Screen name='paymentSuccess' component={PaymentSuccess}/>
              <Stack.Screen name='paymentDetails' component={PaymentDetails}/>
              <Stack.Screen name='payment' component={Payment}/>
              <Stack.Screen name='editprofile' component={EditProfile}></Stack.Screen>
              <Stack.Screen name='history' component={History}/>
              <Stack.Screen name='explore' component={Explore}/>
              <Stack.Screen name='home' component={Categories}></Stack.Screen>
               <Stack.Screen name='comfirm-forger' component={ConfirmForgetPassword}/>
              <Stack.Screen name='pinverify' component={PinVerify}></Stack.Screen>
              <Stack.Screen name='otpScreen' component={OtpScreen}></Stack.Screen>
              <Stack.Screen name='login' component={LoginScreen}/>
              <Stack.Screen name='loginbyemail' component={LoginByEmail}/>
              <Stack.Screen name='ForgetPass' component={ForgetPassword}/>
              <Stack.Screen name='signup' component={SignupSCreen}/> 
              <Stack.Screen name='trackingParking' component={TrackingParking}></Stack.Screen>
              <Stack.Screen name='detailParking' component={DetailParking}></Stack.Screen>
              <Stack.Screen name='detailCategory' component={DetailCategory}></Stack.Screen>
              <Stack.Screen name='userProfile' component={UserProfile}></Stack.Screen> 
              
              </Stack.Navigator>
        </NavigationContainer>
      </Provider>
      
  );
}

//navigationn container
//naviagtor
//screens


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
