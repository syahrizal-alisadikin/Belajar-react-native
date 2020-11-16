import React from 'react';
import {View,Text,Image} from 'react-native';
import Laptop from './mac.jpg';

const StyleComponent = () => {
  return (
    <View>
      <Text style={{textAlign:"center",fontSize:18,fontWeight:'bold'}}>Ini Adalah Style</Text>
      <View style={{width:200,height:200,backgroundColor:'#FEC8D8',borderRadius:8,marginVertical:16,marginHorizontal:80}}></View>
      <Jual/>
    </View>
  )
}

const Jual = () => {
  return (
    <View style={{ backgroundColor:'#E0BBE4',padding:10,margin:50,borderRadius:10}}>
      <Image source={Laptop} style={{ width:188, height:107,borderRadius:10,marginHorizontal:20, }}/>
      <Text style={{marginHorizontal:20,fontWeight:"bold",marginTop:12}}>Laptop Terbaru 2020</Text>
      <Text style={{marginHorizontal:20,fontWeight:"bold",marginTop:12,color:"#FFDFD3"}}>Rp5000.000</Text>
      <View style={{backgroundColor:"#957DAD",marginHorizontal:20,borderRadius:15,marginTop:10}}>
        <Text style={{textAlign:"center",color:"#fff",marginVertical:5}}>Beli Sekarang</Text>
      </View>
    </View>
  )
}

export default StyleComponent;