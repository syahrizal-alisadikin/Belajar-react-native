import React from 'react'
import { View, Text,StyleSheet,TextInput,Button } from 'react-native'

const Register = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Ui Register Developer</Text>
            <Text>Masukan Anggota Developer</Text>
            <TextInput placeholder="Masukan nama Lengkap"  style={styles.input}/>
            <TextInput placeholder="Masukan Email" style={styles.input}/>
            <TextInput placeholder="Masukan Bidang" style={styles.input}/>
            <Button title="Tambah" />
            <View style={styles.line}/>
        </View>
    )
}

export default Register

const styles = StyleSheet.create({
    container:{padding:20},
    text:{fontSize:20,textAlign:"center",fontWeight:'bold'},
    line:{height:2, backgroundColor:'black',marginVertical:20},
    input:{borderWidth:1, marginBottom:12,borderRadius:20,paddingHorizontal:18},
    // butt:{borderRadius:20,marginBottom:10}
})

