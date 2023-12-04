import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import Icon from 'react-native-vector-icons/dist/FontAwesome';

function AddItem({addItem}) {

const [text, setText] = useState('');

const onChangeText= textValue =>{
    setText(textValue);

}


  return (
    
        <View style={styles.addView}>
            <TextInput placeholder='Add Item...' style= {styles.input} onChangeText={onChangeText}></TextInput>
            <TouchableOpacity style={styles.btn} onPress={() =>addItem(text)}>
                <Text style={styles.btnText}><Icon name='plus' size={20} />ADD ITEM</Text>

            </TouchableOpacity>
            
      
        </View>
    
  )
}


const styles = StyleSheet.create({
    input:{
        height:60,
        padding:8,
        fontSize:16
    },
    btn:{

        backgroundColor:'#c2bad8',
        padding:9,
        margin:5

    },
    btnText:{
       color:'darkslateblue',
       fontSize:20,
       textAlign:'center',
       fontWeight:'bold' 
    }

  

})

export default AddItem