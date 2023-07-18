import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Boards from '../screens/Boards'
import SignUp from '../screens/SignUp'
import Login from '../screens/Login'
import CreateAccount from '../screens/CreateAccount'


const Stack = createNativeStackNavigator()

const Navigation = () => {
  return (
    <NavigationContainer>
     <Stack.Navigator initialRouteName='onBoard' screenOptions={{headerShown:false}} >
        <Stack.Screen name='onBoard' component={Boards}/>
        <Stack.Screen name='SignUp' component={SignUp}/>
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name='CreateAcount' component={CreateAccount}/>
     </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation

const styles = StyleSheet.create({

})