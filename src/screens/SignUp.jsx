import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import logo from "../assets/logo.png"
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { auth,} from '../param/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

// import { AppleButton } from '@invertase/react-native-apple-authentication';
// import { appleAuth } from '@invertase/react-native-apple-authentication';


const SignUp = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVerification, setPasswordVerification] = useState('');
  const [error, setError] = useState('');

  // async function onAppleButtonPress() {
  //   // Start the sign-in request
  //   const appleAuthRequestResponse = await appleAuth.performRequest({
  //     requestedOperation: appleAuth.Operation.LOGIN,
  //     requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
  //   });
  
  //   // Ensure Apple returned a user identityToken
  //   if (!appleAuthRequestResponse.identityToken) {
  //     throw new Error('Apple Sign-In failed - no identity token returned');
  //   }
  
  //   // Create a Firebase credential from the response
  //   const { identityToken, nonce } = appleAuthRequestResponse;
  //   const appleCredential = firebase.auth.AppleAuthProvider.credential(identityToken, nonce);
  
  //   // Sign the user in with the credential
  //   return firebase.auth().signInWithCredential(appleCredential);
  // }

  const signUp = async ()  => {
    if (passwordVerification !== password || password.length < 8) {
      setError('وەکو یەک نین حەو برا');
      return;
    }
    try{
   const signup =  await createUserWithEmailAndPassword(auth,email,password,name)
      .then((userCredential)=>{
       const user = userCredential.user
       user.updateProfile({
        displayName:name
       }).then(()=>{
        navigation.navigate('CreateAcount')
       })
      })
    }catch(err){
      console.log(err);
      alert(err.message);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logo} style={{ width: 200, height: 200, resizeMode: 'contain' }} />
      </View>
      <View style={styles.form}>
        <TouchableOpacity style={styles.input}>
          <AntDesign name="user" size={24} color="white" />
          <TextInput
            value={name}
            onChangeText={(text) => setName(text)}
            placeholder='username'
            style={styles.inputtext}
            placeholderTextColor='white'
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.input}>
          <MaterialCommunityIcons name="email-alert-outline" size={24} color="white" />
          <TextInput
            placeholder='name12@gmail.com'
            style={styles.inputtext}
            placeholderTextColor='white'
            value={email}
            onChangeText={(email) => setEmail(email)}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.input}>
          <Entypo name="key" size={24} color="white" />
          <TextInput
            value={password}
            onChangeText={(pass) => setPassword(pass)}
            placeholder='password'
            placeholderTextColor='white'
            secureTextEntry
            style={styles.inputtext}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.input}>
          <Entypo name="key" size={24} color="white" />
          <TextInput
            value={passwordVerification}
            onChangeText={(pass) => setPasswordVerification(pass)}
            placeholder='password verification'
            secureTextEntry
            placeholderTextColor='white'
            style={styles.inputtext}
          />
        </TouchableOpacity>
        {error && <Text style={{ color: 'tomato', fontSize: 12 }}>{error}</Text>}
      </View>
      <TouchableOpacity
        onPress={signUp}
        activeOpacity={2}
        style={styles.signUp}
      >
        <Text style={styles.textSignUp}>Sign Up</Text>
      </TouchableOpacity>
      <View style={styles.footerSignUp}>
        <Text style={{ color: 'white', marginLeft: 90, marginBottom: 5 }}>or SignUp with</Text>
        <View style={styles.Or}>
          <TouchableOpacity style={styles.googleApple}>
            <AntDesign name="google" size={24} color="white" />
            <Text style={{ color: 'white', fontSize: 22, fontWeight: '400' }}>Google</Text>
          </TouchableOpacity>

        </View>
      </View>
    </View>
  )
}

export default SignUp

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#222831',
    height: '100%'
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  form: {
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: -35,
    gap: 20,
    padding: 20
  },
  input: {
    borderWidth: 1,
    padding: 20,
    width: '100%',
    borderColor: 'white',
    borderRadius: 12,
    opacity: 0.4,
    flexDirection: 'row',
    gap: 12
  },
  inputtext: {
    color: 'white',
  },
  signUp: {
    alignSelf: 'center',
    marginTop: 3,
    backgroundColor: '#1B9C85',
    padding: 20,
    width: 280,
    borderRadius: 17
  },
  textSignUp: {
    textAlign: 'center',
    fontSize: 32,
    color: 'white',
    fontWeight: '700',
  },
  footerSignUp: {
    marginTop: 20,
    flexDirection: 'column',
    marginLeft: 20
  },
  Or: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
    gap: 20,
    marginLeft: 20,
  },
  googleApple: {
    borderWidth: 1,
    borderColor: '#EEEEEE',
    padding: 12,
    borderRadius: 12,
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
  }
  
});
