import { Image, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import React,{useState} from 'react'
import logo from "../assets/logo.png"
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { auth } from '../param/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

const Login = ({navigation}) => {

  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')

  const signIn = async()=>{
    try{
     const login =await signInWithEmailAndPassword(auth,email,password)
      navigation.navigate('CraeateAccount')
    }catch(err){
      console.error(err.message)
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
  <Image source={logo} style={{width:200,height:200,resizeMode:'contain'}} />
      </View>
      <View style={styles.form}>
     <TouchableOpacity style={styles.input}>
     <MaterialCommunityIcons name="email-alert-outline" size={24} color="white" />
      <TextInput
      value={email}
      onChangeText={(email)=> setEmail(email)}
      placeholder='name12@gmail.com' style={styles.inputtext}
       placeholderTextColor='white' />
     </TouchableOpacity>
     <TouchableOpacity style={styles.input}>
     <Entypo name="key" size={24} color="white" />
      <TextInput
      value={password}
      onChangeText={(pass)=> setPassword(pass)}
      placeholder='password' placeholderTextColor='white'
       secureTextEntry style={styles.inputtext} />
     </TouchableOpacity>
     <TouchableOpacity>
     <Text style={{color:'white',fontSize:13,fontWeight:400,marginLeft:190}}>forgot password ?</Text>
     </TouchableOpacity>
     
      </View>
        <TouchableOpacity onPress={signIn} activeOpacity={2} style={styles.signUp}>
      <Text style={styles.textSignUp}>Log in</Text>
        </TouchableOpacity>
        <View style={styles.footerSignUp}>
     <Text style={{color:'white',marginLeft:90,marginBottom:5}}>or Log in with </Text>
     <View style={styles.Or}>
   <TouchableOpacity style={styles.googleApple}>
   <AntDesign name="google" size={24} color="white" />
   <Text style={{color:'white',fontSize:22,fontWeight:400}}>Google</Text>
   </TouchableOpacity>
   <TouchableOpacity style={styles.googleApple}>
   <AntDesign name="apple1" size={24} color="white" />
   <Text style={{color:'white',fontSize:22,fontWeight:400}}>Apple</Text>
   </TouchableOpacity>
     </View>
        </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  container:{
   backgroundColor:'#222831',
   height:'100%'
  },
  header:{
    alignItems:'center',
    justifyContent:'center'
  },
  form:{
    flexDirection:'column',
    alignItems:'center',
     marginTop:-12,
    gap:20,
    padding:20
  },
  input:{
    borderWidth:1,
    padding:20,
    width:'100%',
    borderColor:'white',
    borderRadius:12,
    opacity:0.4,
    flexDirection:'row',
    gap:12
  },
  inputtext:{
    color:'white',
  },
  signUp:{
    alignSelf:'center',
    marginTop:3,
    backgroundColor:'#1B9C85',
    padding:20,
    width:280,
    borderRadius:17
  },
  textSignUp:{
    textAlign:'center',
    fontSize:32,
    color:'white',
    fontWeight:700,
  },
  footerSignUp:{
    marginTop:20,
    flexDirection:'column',
    marginLeft:20
  },
  Or:{
    flexDirection:'row',
    alignItems:'center',
    marginTop:12,
    gap:20,
    marginLeft:20,
  },
  googleApple:{
    borderWidth:1,
    borderColor:'#EEEEEE',
    padding:12,
    borderRadius:12,
    flexDirection:'row',
    gap:12,
    alignItems:'center',
  }
})