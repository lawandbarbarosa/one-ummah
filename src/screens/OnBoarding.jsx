import React from 'react'
import { Image, View,StyleSheet,Text, SafeAreaView } from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Boards from './Boards';
import SignUp from './SignUp';
import Navigation from '../param/Navigation';

var Stack = createNativeStackNavigator()

const Board = () => {
  return (
  <Navigation />
  )
    
  
}


const styles = StyleSheet.create({
 
})

export default Board