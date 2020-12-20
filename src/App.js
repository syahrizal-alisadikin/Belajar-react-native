import React, {Component} from 'react';
import { View , Text, TextInput,Image, ScrollView} from 'react-native';
import SampleComponent from '../src/SampleComponent';
import StyleComponent from '../src/StyleComponent';
import FlexBox from '../src/FlexBox';
import PropsDinamis from '../src/PropsDinamis';
import StateDinamis from '../src/StateDinamis';
import PositionReactNative from '../src/PositionReactNative';
const App = () => {
  return (
    <View>
      <ScrollView>
        {/* <SampleComponent/> */}
        {/* <StyleComponent/> */}
        {/* <FlexBox/> */}
        {/* <PositionReactNative/> */}
        {/* <PropsDinamis/> */}
        <StateDinamis/>

      </ScrollView>

    </View>
    );
}



export default App;