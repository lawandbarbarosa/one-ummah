import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, Pressable, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';


const Boards = ({navigation}) => {

  const [ativeIndex,setActiveIndex]=useState(0)


  const handlePress = (index)=>{
    setActiveIndex(index)
  }

  const Boarding = [
    {
      id: 1,
      title: 'Embark on a Spiritual Journey with one Ummah',
      image: require('../assets/yakam.png'),
    },
    {
      id: 2,
      title: 'Begin Your Path to Enlightenment with one Ummah',
      image: require('../assets/ibn.png'),
    },
    {
      id: 3,
      title: 'Preparing You for a Meaningful Islamic Experience',
      image: require('../assets/mosque.png'),
    },
    {
      id: 4,
      title: 'Discover the Beauty of Islam with one Ummah',
      image: require('../assets/kurdish.png'),
    },
  ];

  const renderSlice = () => {
    return Boarding.map(slide => (
      <View key={slide.id} style={styles.slideContainer}>
        <ImageBackground source={slide.image} style={styles.imageBackground} />
        <Text style={styles.description}>{slide.title}</Text>
        <View style={styles.footer}>
          <Pressable style={styles.createAccount} 
          onPress={()=> navigation.navigate('SignUp')} >
           <Text style={{textAlign:'center',fontSize:22,color:'white',
          fontWeight:400}}>Create Account</Text> 
          </Pressable>
          <TouchableOpacity onPress={()=> navigation.navigate('Login')}>
          <Text style={{color:'white',marginTop:12}}>
            Already have account.?</Text>
          </TouchableOpacity>
          
        </View>
        <View style={styles.overlay} />
      </View>
    ));
  };

  return (
    <>
    <Swiper 
    showsButtons={false}
     loop={false}
      showsPagination={false}
      onIndexChanged={handlePress}
      >
      {renderSlice()}
      
    </Swiper>
    <View style={styles.pagination}>
        {Boarding.map((_, index) => (
          <View
            key={index}
            style={[styles.dotStyle, ativeIndex === index ? styles.activeDotStyle : null]}
          />
        ))}
      </View>
    </>
    
  );
};

const styles = StyleSheet.create({
  slideContainer: {
    flex: 1,
    width:'100%',
    height:'100%'
  },
  imageBackground: {
    flex: 1,
    resizeMode:'contain',
    justifyContent: 'center',
    alignItems: 'center',
    position:'relative'
  },
  description: {
    color: '#fff',
    fontSize: 33,
    textAlign: 'left',
    position:'absolute',
    bottom:190,
    width:'95%',
    zIndex:200,
    fontWeight:'700',
 left:22,
 marginBottom:20
  },
  overlay:{
    backgroundColor:'#393E46',
    opacity:0.8,
    position:'absolute',
    width:'100%',
    height:'100%'
  },
  footer:{
    alignItems:'center',
    zIndex:100,
    textAlign:'center',
    position:'absolute',
    bottom:50,
    alignSelf:'center',
  },
  createAccount:{
    backgroundColor:'#1B9C85',
    padding:20,
    width:300,
 borderRadius:15,
  },
  pagination: {
    position: 'absolute',
    bottom: 20,
    flexDirection:'row',
    marginHorizontal:130,
    marginBottom:163,
    gap:-4
  },
  dotStyle: {
    width: 17,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
    marginHorizontal: 6,
  },
  activeDotStyle: {
    width: 30,
    height: 10,
    borderRadius: 6,
    backgroundColor: '#1B9C85',
    marginHorizontal: 6,
  },
});

export default Boards;
