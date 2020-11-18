import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'
import Cart from './gambar/download.png'

const PositionReactNative = () => {
    return (
        <View>
            <Text style={styles.text}>Belajar Position React Native</Text>
            <View>
                <Image style={styles.gambar} source={Cart}/>
                <Text style={styles.text}>Ini adalah cart Belanja </Text>
            </View>
        </View>
    )
}

export default PositionReactNative;

const styles = StyleSheet.create({
    text:{fontSize:20,textAlign:"center",marginVertical:20},
    gambar:{alignItems:"center", marginHorizontal:70, position:"relative", }
})
