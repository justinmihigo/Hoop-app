import { StyleSheet, Text, View } from 'react-native';
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import {NavigationContainer} from "@react-navigation/native"
import LoginScreen from './screens/LoginScreen';
import SignupSCreen from './screens/SignupSCreen';
import WelcomeScreen from './screens/WelcomeScreen';
import Provider from './context/Provider';
import LoginByEmail from './screens/LogibByEmail';
import OtpScreen from './screens/Otpscreen';
import PinVerify from './screens/PinVerify';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    

      <Provider>
        <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='pinverify' component={PinVerify}></Stack.Screen>
          <Stack.Screen name='otpScreen' component={OtpScreen}></Stack.Screen>
          <Stack.Screen name='welcome' component={WelcomeScreen}/>
          <Stack.Screen name='login' component={LoginScreen}/>
          <Stack.Screen name='loginbyemail' component={LoginByEmail}/>
          <Stack.Screen name='signup' component={SignupSCreen}/>
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
