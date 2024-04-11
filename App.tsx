import { StyleSheet, Text, View } from 'react-native';
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import {NavigationContainer} from "@react-navigation/native"
import LoginScreen from './screens/LoginScreen';
import SignupSCreen from './screens/SignupSCreen';
import WelcomeScreen from './screens/WelcomeScreen';
import Provider from './context/Provider';
import LoginByEmail from './screens/LogibByEmail';
import ForgetPassword from './screens/ForgetPassword';
import ConfirmForgetPassword from "./screens/ConfirmForgetPassword"
import Home from './screens/Home';
import Categories from './screens/Home';
import Explore from './screens/Explore';


const Stack = createNativeStackNavigator()

// export default function App() {
//   return (
    

//       <Provider>
//           <NavigationContainer>
//              <Stack.Navigator screenOptions={{headerShown:false}}>
//              <Stack.Screen name='categories' component={Categories}/> 
//              <Stack.Screen name='exproler' component={Explore}/> 
//              <Stack.Screen name='/' component={WelcomeScreen}/>
//               <Stack.Screen name='comfirm-forger' component={ConfirmForgetPassword}/>
//               <Stack.Screen name='login' component={LoginScreen}/>
//               <Stack.Screen name='loginbyemail' component={LoginByEmail}/>
//               <Stack.Screen name='ForgetPass' component={ForgetPassword}/>
//               <Stack.Screen name='signup' component={SignupSCreen}/> 
//               </Stack.Navigator>
//         </NavigationContainer>
//       </Provider>
      
//   );
// }

export default function App() {
  return (
    <Provider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name='Home' component={Home}/> 
          <Stack.Screen name='Welcome' component={WelcomeScreen}/>
          <Stack.Screen name='ConfirmForgetPassword' component={ConfirmForgetPassword}/>
          <Stack.Screen name='Login' component={LoginScreen}/>
          <Stack.Screen name='LoginByEmail' component={LoginByEmail}/>
          <Stack.Screen name='ForgetPassword' component={ForgetPassword}/>
          <Stack.Screen name='Signup' component={SignupSCreen}/> 
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
