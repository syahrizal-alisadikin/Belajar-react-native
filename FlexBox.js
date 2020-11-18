import React from 'react';
import {Text,View,Image} from 'react-native';

const FlexBox = () => {
    return (
        <View>
            <Text style={{textAlign:"center",fontSize:18,fontWeight:"bold"}}>Ini Adalah Materi Flex Box</Text>
            <View style={{flexDirection:"row",justifyContent:'space-around',marginVertical:20}}>
                <View style={{backgroundColor:'red', height:50,width:50,borderRadius:8 }}/>
                <View style={{backgroundColor:'green', height:50,width:50,borderRadius:8 }}/>
                <View style={{backgroundColor:'yellow', height:50,width:50,borderRadius:8 }}/>
                <View style={{backgroundColor:'blue', height:50,width:50,borderRadius:8 }}/>
            </View>
            <View style={{flexDirection:"row",marginLeft:20}}>
                <Image source={{uri: 'https://placeimg.com/300/300/tech'}} style={{height:100,width:100, borderRadius:50}}/>
                <View style={{alignItems:"center",justifyContent:"center",marginLeft:20}}>
                    <Text style={{fontWeight:"bold"}}>Syahrizal Alisadikin</Text>
                    <Text>Web Developer</Text>
                </View>
            </View>
        </View>
    )
}

export default FlexBox;