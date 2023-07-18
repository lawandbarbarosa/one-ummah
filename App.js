import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image } from 'react-native';
import React, { useState, useEffect } from 'react';
import logo from "./src/assets/logo.png"
import Navigation from './src/param/Navigation';
import Board from './src/screens/OnBoarding';


export default function App() {

  const [isLoading,setIsLoading]=useState(true)


  useEffect(()=>{
  const fetchData =async()=>{
 await new Promise(resolve=> setTimeout(resolve,2000));

 setIsLoading(false)
  }
  fetchData()
  },[])

  return (
    <>
      { isLoading ? (
        <View style={styles.container}>
        <Image source={logo} 
        style={{resizeMode:'contain',width:250,height:250}} /> 
        </View>      
      ):(
        <Board />
      ) }
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    height:'100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#222831',
  },
});
