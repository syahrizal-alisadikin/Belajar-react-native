import React,{useEffect,useState} from 'react'
import { View, Text,StyleSheet,Button,Image } from 'react-native'
import Axios from 'axios'
const CallApiJs = () => {
    const [dataUser,setDataUser] = useState({
        avatar:'',
        first_name:'',
        last_name:'',
        email:''

    })

    const [postData,setPostData] = useState({
        name:'',
        job:''
    })
    
    
    const getData = () => {
        // fetch('https://reqres.in/api/users/2')
        // .then(response => response.json())
        // .then(json => {
        //     setDataUser(json.data)
        // })
        Axios.get('https://reqres.in/api/users/1')
            .then(response => {
                setDataUser(response.data.data)
            })
            .catch(err => console.log(err))
    }

    const sendData = () => {
        // alert("post Data")
            const dataForApi = {
                name: "Syahrizal As",
                job: "Junior Web Developer"
            }
        // fetch('https://reqres.in/api/users',{
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(dataForApi)
        // })
        // .then(response => response.json())
        // .then(json => {
        //     setPostData(json)
        // })
        Axios.post('https://reqres.in/api/users',dataForApi)
            .then(response => {
                setPostData(response.data)
            })
            .catch(err => console.log(err))
    }
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                latihan Api Dengan Vanila Javascript
                 <Button
                    onPress={getData}
                    title="Get Me"
                    color="#841584"
                />
            </Text>
            <Text>Get Data</Text>
           {dataUser.avatar.length > 0 && (
                <Image source={{ uri:dataUser.avatar }} style={styles.image}/>
           )}
            <Text>{`${dataUser.first_name} ${dataUser.last_name}`}</Text>
            <Text>{dataUser.email}</Text>

            <Button
                    onPress={sendData}
                    title="Post Me"
                    color="#841584"
                />
                <Text>{postData.name}</Text>
            <Text>{postData.job}</Text>
        </View>
    );
}

export default CallApiJs;
const styles = StyleSheet.create({
    container:{padding:20},
    text:{fontSize:20,textAlign:"center",fontWeight:'bold'},
    image:{width:100, height:100, borderRadius:50}
})
