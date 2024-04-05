import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SplashPage from './pages/SplashPage';
import React from 'react';
export default function App() {
  return (
    <View style={styles.container}>
      <SplashPage/>
      <Text>Welcom</Text>
    </View>
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
