import React from 'react'
import { View, Text, StyleSheet, Image, FlatList, Alert } from 'react-native'
import Header from './components/Header'
import ListItem from './components/ListItem'
import { useState } from 'react'
import {uuid} from 'uuidv4';
import AddItem from './components/AddItem'


function App() {
    const [items, setItems] = useState([
        {id:uuid(), text :'Milk' },
        {id:uuid(), text :'Egg' },
        {id:uuid(), text :'Bread' },
        {id:uuid(), text :'Fruits' },
        {id:uuid(), text :'Tea' },
    ]);

const deleteItem =(id)=>{
    setItems(prevItems =>{
        return prevItems.filter(item => item.id != id);
    });
}

const addItem =(text) =>{
    if(!text){
        Alert.alert('Ooopss', 'You Entered Nothing...Please add An Item', [{text:'Great'}])
    }else{
        setItems(prevItems =>{
            return[{id:uuid(), text: text}, ...prevItems];
        })
    }

}


  return (
    <View style={styles.container}>
        <Header  title="SHOPPING LIST" />
        <AddItem addItem ={addItem}/>
        <FlatList 
            data={items}
            renderItem={({item})=> <ListItem item={item} deleteItem={deleteItem} /> } 
            keyExtractor={item => item.id} 
        />
        
    </View>
  )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingTop:20
    },

    // text:{
    //     color:'darkslateblue',
    //     fontSize: 20,
    //     fontWeight:'bold'

    // },
    // img:{
    //     width:100,
    //     height:100,
    //     borderRadius:100/2
        
    // }
    
})

export default App