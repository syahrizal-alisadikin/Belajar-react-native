import React,{Component} from 'react';
import {View,Text,Image,TextInput} from 'react-native';

const SampleComponent = () => {
return (
  <View>
    <Text style={{ textAlign:"center",fontWeight:"bold",fontSize:20 }}>Jumat 18 Desember 2020</Text>
    <Syahrizal/>
    <Text style={{ textAlign:"center",fontWeight:"bold",fontSize:18}}>Belajar react native</Text>
    <Gambar/>
    <TextInput style={{ borderWidth:1 ,padding:20 }} />
    <BoxFree/>  
    <BoxImage/>
    

  </View>
)
}

const Syahrizal = () => {
  return <Text style={{ textAlign:"center",fontWeight:"bold",fontSize:18 }}>Syahrizal Alisadikin</Text>
}

const Gambar = () => {
  return (
    <Image source={{ uri: 'https://placeimg.com/300/300/tech' }} style={{ width:200, height:200,marginHorizontal:90, borderRadius:15,marginVertical:20 }}/>
  );
}

class BoxFree extends Component{
  render(){
    return <Text>Ini Adalah class Component Belajar React Native</Text>
  }
}

class BoxImage extends Component{
  render(){
    return (
      <View>
        <Image source={{ uri:'https://placeimg.com/300/480/nature'}} style={{ width:300, height:300, borderRadius:50 }}/>
      </View>
    )
  }
}

export default SampleComponent;