import React, {Component,useState} from 'react';
import { View , Text, TextInput,Image, ScrollView} from 'react-native';
import SampleComponent from '../src/SampleComponent';
import StyleComponent from '../src/StyleComponent';
import FlexBox from '../src/FlexBox';
import PropsDinamis from '../src/PropsDinamis';
import StateDinamis from '../src/StateDinamis';
import PositionReactNative from '../src/PositionReactNative';
import ApiJs from '../src/CallApiJs';
import Register from '../src/Register';
const App = () => {
  // const [angka, setAngka] = useState(0)
  return (
    <View>
      <ScrollView>
        {/* <SampleComponent/> */}
        {/* <StyleComponent buttonPress={()=> setAngka(angka + 1)}/> */}
        {/* <FlexBox/> */}
        {/* <PositionReactNative/> */}
        {/* <PropsDinamis/> */}
        {/* <StateDinamis jumlah={angka}/> */}
        {/* <ApiJs/> */}
        <Register/>

      </ScrollView>

    </View>
    );
}



export default App;