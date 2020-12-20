import React from 'react';
import {View,Text,Image,TouchableOpacity} from 'react-native';
import Laptop from '../assest/gambar/mac.jpg';

const StyleComponent = (props) => {
  return (
    <View>
      <Image source={Laptop} style={{ width:188, height:107,borderRadius:10,marginHorizontal:20, }}/>
      <Text style={{marginHorizontal:20,fontWeight:"bold",marginTop:12}}>Laptop Terbaru 2020</Text>
      <Text style={{marginHorizontal:20,fontWeight:"bold",marginTop:12,color:"#FFDFD3"}}>Rp5000.000</Text>
      <TouchableOpacity onPress={ props.buttonPress}>
        <View style={{backgroundColor:"#957DAD",marginHorizontal:20,borderRadius:15,marginTop:10}}>
          <Text style={{textAlign:"center",color:"#fff",marginVertical:5}}>Beli Sekarang</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}



export default StyleComponent;