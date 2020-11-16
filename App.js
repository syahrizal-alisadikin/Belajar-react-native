import React, {Component} from 'react';
import { View , Text, TextInput,Image, ScrollView} from 'react-native';
import SampleComponent from './SampleComponent';
import StyleComponent from './StyleComponent';
const App = () => {
  return (
    <View>
    <ScrollView>
      <SampleComponent/>
      <StyleComponent/>
    </ScrollView>

    </View>
    );
}



export default App;