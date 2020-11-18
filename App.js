import React, {Component} from 'react';
import { View , Text, TextInput,Image, ScrollView} from 'react-native';
import SampleComponent from './SampleComponent';
import StyleComponent from './StyleComponent';
import FlexBox from './FlexBox';
import PositionReactNative from './PositionReactNative';
const App = () => {
  return (
    <View>
    <ScrollView>
      {/* <SampleComponent/>
      <StyleComponent/>
      <FlexBox/> */}
      <PositionReactNative/>
      </ScrollView>

    </View>
    );
}



export default App;