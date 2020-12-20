import React,{useState,Component} from 'react';
import {View,Text,Image,ScrollView,Button} from 'react-native';

const Count = () => {
    const [number,setNumber] = useState(0);
    return(
        <View style={{ alignItems:"center", marginRight:20,marginTop:10 }}>
           <Text style={{ fontSize:18,fontWeight:'bold' }}>{number}</Text>
           <Button title="Tambah Data" onPress={()=> setNumber(number + 1)}/>
        </View>
    )
}

// Class Component
class CounterClass extends Component{
    state = {
        number:10,
    };

    render(){
        return(
        <View style={{ alignItems:"center", marginRight:20,marginTop:10 }}>
           <Text style={{ fontSize:18,fontWeight:'bold' }}>{this.state.number}</Text>
            <View style={{  flexDirection:"row" }}>
                 <Button title="Kurang Class"  onPress={() => this.setState({number: this.state.number - 1})} />
                <Button title="Tambah Class" onPress={() => this.setState({number: this.state.number + 1})} />
            </View>
        </View>
        );
    }
}

const StateDinamis = () => {
  return (
    <View>
      <Text style={{textAlign:"center",fontSize:18,fontWeight:'bold',marginBottom:50}}>State Dinamis React Native</Text>
            <Count/>
            <Count/>
            <CounterClass/>
          
    </View>
  )
}



export default StateDinamis;