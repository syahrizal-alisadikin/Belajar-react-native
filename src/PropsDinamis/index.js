import React from 'react';
import {View,Text,Image,ScrollView} from 'react-native';

const Story = props => {
    return(
        <View style={{ alignItems:"center", marginRight:20 }}>
            <Image source={{uri: 'https://placeimg.com/300/300/tech'}} style={{height:70,width:70, borderRadius:50}}/>
            <Text > {props.judul} </Text>
        </View>
    )
}

const PropsDinamis = () => {
  return (
    <View>
      <Text style={{textAlign:"center",fontSize:18,fontWeight:'bold',marginBottom:50}}>Props Dinamis React Native</Text>

      <ScrollView horizontal>
          <View style={{ flexDirection:"row" }}>
            <Story judul="Futsal"/>
            <Story judul="Ngoding"/>
            <Story judul="Lari"/>
            <Story judul="Badminton"/>
            <Story judul="Renang"/>
            <Story judul="Catur"/>
        </View>
      </ScrollView>
    </View>
  )
}



export default PropsDinamis;