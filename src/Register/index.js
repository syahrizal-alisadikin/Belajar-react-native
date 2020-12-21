import React, {useState,useEffect} from 'react'
import { View, Text,StyleSheet,TextInput,Button,Image,TouchableOpacity,Alert } from 'react-native'
import Axios from 'axios';

// Kirim Props data user
const Item = ({name,email,bidang,onPress,onDelete}) => {
   return(
    <View style={styles.itemContainer}>
        <TouchableOpacity onPress={onPress}>
        <Image source={{ uri:`https://ui-avatars.com/api/?name=${name}`  }} style={styles.avatar}/>

        </TouchableOpacity>
        <View style={styles.desc}>
            <Text style={styles.descName}>{name}</Text>
            <Text style={styles.descEmail}>{email} </Text>
            <Text style={styles.descBidang}>{bidang}</Text>
        </View>
        <TouchableOpacity onPress={onDelete}>
            <Text style={styles.delete}>X</Text>
        </TouchableOpacity>
    </View>
   )
}
const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [bidang, setBidang] = useState("");
    const [users, setUser] = useState([]);
    const [button, setButton] = useState("Simpan");
    const [select, setSelect] = useState({});
    useEffect(() => {
        getData();
    }, [])

    const onSubmit = () => {
        const data = {
            name,
            email,
            bidang
        }
       if(button === "Simpan"){
            Axios.post('http://10.0.2.2:3004/users',data)
             .then(res => {
                 setName("");
                 setEmail("");
                 setBidang("");
                 getData();
             })
             .catch(err => console.log(err))
       }else if(button === "Update"){
            Axios.put(`http://10.0.2.2:3004/users/${select.id}`,data)
             .then(res => {
                 setName("");
                 setEmail("");
                 setBidang("");
                 getData();
                setButton("Simpan");

             })
             .catch(err => console.log(err))
       }
        // alert(data);
    }

    const getData = () => {
        Axios.get('http://10.0.2.2:3004/users')
            .then(res =>{
                setUser(res.data)
            })
    }

    const selectItem = (user) => {
        // ubah input di view
        setSelect(user);
        setName(user.name);
        setEmail(user.email);
        setBidang(user.bidang);
        setButton("Update");
    }

    const deleteData = (user) => {
        Axios.delete(`http://10.0.2.2:3004/users/${user.id}`)
            .then(res => {
                // Jika berhasil Tampilkan lagi datanya
                getData();
            })
            .catch(err => console.log(err))
    }
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Ui Register Developer</Text>
            <Text style={styles.anggota}>Masukan Anggota Developer</Text>
            <TextInput placeholder="Masukan nama Lengkap"  style={styles.input} value={name} onChangeText={(value) => setName(value)}/>
            <TextInput placeholder="Masukan Email" style={styles.input} value={email} onChangeText={(value) => setEmail(value)}/>
            <TextInput placeholder="Masukan Bidang" style={styles.input} value={bidang} onChangeText={(value) => setBidang(value)}/>
            <Button title={button} onPress={onSubmit} color="#841584"  />
            <View style={styles.line}/>
            {/* Looping React Native */}
            {users.map(user => {
                return <Item 
                        key={user.id} 
                        name={user.name} 
                        email={user.email} 
                        bidang={user.bidang} 
                        onPress={() =>selectItem(user)}
                        onDelete={() => Alert.alert(
                            'Peringatan',
                            'Anda yakin akan menghapus data ini ?',
                            [
                                {
                                    text:'Tidak',
                                    onPress: () => console.log('button Tidak')
                                },
                                {
                                    text:'Ya',
                                    onPress: () => deleteData(user)
                                }
                            ]
                        )}/>
            })}
            
            
        </View>
    )
}

export default Register

const styles = StyleSheet.create({
    container:{padding:20},
    anggota:{fontWeight:'bold',padding:10,fontSize:16,color:"green"},
    text:{fontSize:20,textAlign:"center",fontWeight:'bold'},
    line:{height:2, backgroundColor:'black',marginVertical:20},
    input:{borderWidth:1, marginBottom:12,borderRadius:20,paddingHorizontal:18},
    avatar: {height:70,width:70, borderRadius:80},
    itemContainer:{flexDirection:"row",marginBottom:20,},
    desc:{marginLeft:15,flex:1},
    descName:{fontSize:16, fontWeight:"bold"},
    descEmail:{fontSize:16, fontWeight:"bold",marginVertical:5},
    descBidang:{fontSize:16, fontWeight:"bold"},
    delete:{fontSize:20, color:"red",fontWeight:"bold"}
    // butt:{borderRadius:20,marginBottom:10}
})

