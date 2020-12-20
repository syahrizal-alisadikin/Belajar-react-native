import React,{useState,Component} from 'react';
import {View,Text,Image,ScrollView,Button} from 'react-native';



// Class Component


const StateDinamis = (props) => {
  return (
    <View style={{ alignItems:"center", marginRight:20,marginTop:10 }}>
      <Text style={{textAlign:"center",fontSize:18,fontWeight:'bold',marginBottom:50}}>State Dinamis React Native</Text>
            <Text style={{ fontSize:18,fontWeight:'bold' }}>{props.jumlah}</Text>
           <Button title="Tambah Data" onPress={()=> setNumber(number + 1)}/>
          
    </View>
  )
}



export default StateDinamis;