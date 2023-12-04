import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

function Header({title}) {
  return (
    <View style={styles.header}>
    <Text style= {styles.text}>{title}</Text>
    {/* <Image source={{uri:'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}} style={styles.img}></Image> */}
</View>
  )
}

Header.defaultProps ={
    title:'SHOPPING'
}

const styles = StyleSheet.create({
    header:{
        height:60,
        padding:15,
        backgroundColor:"darkslateblue"
    },
    text:{
        color:'#fff',
        fontSize:23,
        textAlign:'center',
        fontWeight:'bold'
    }

})

export default Header