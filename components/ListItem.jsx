import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/dist/FontAwesome';

function ListItem({item, deleteItem}) {
  return (
    <TouchableOpacity style = {styles.listItem}>

    <View style ={styles.listItemView}>
        <Text style= {styles.listItemText}>{item.text}</Text>
        <Icon name= 'remove' size={20} color='red' onPress ={() =>deleteItem(item.id)}></Icon>
    </View>
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
    listItem:{
        padding:15,
        backgroundColor: '#c9c9c9',
        borderBottomWidth:1,
        borderColor: 'grey'
    },
    listItemView:{
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center'
    },
    listItemText:{
       fontSize: 18,
       fontFamily:'sans-serif',
       fontWeight:'bold' 
    }

})

export default ListItem