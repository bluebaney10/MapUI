import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  ActivityIndicator,
  Image,
} from 'react-native';


type Props = {};
export default class SearchPage extends Component<Props> {
  static navigationOptions = {
    title: 'Property Finder',
  };

  render() {
    return (
     <View style={styles.flowRight}>
  <TextInput
    underlineColorAndroid={'transparent'}
    style={styles.searchInput}
    placeholder='Where to go?'/>
  <Button
    onPress={() => {}}
    color='#48BBEC'
    title='Go'
  />
  <Image source={require('./icon2.jpg')} style={styles.image}/>
</View>
    );
  }
}

const styles = StyleSheet.create({
  description: {
    marginBottom: 20,
    fontSize: 18,
    textAlign: 'center',
    color: '#656565'
  },
  container: {
    padding: 30,
    marginTop: 65,
    alignItems: 'center'
  },
  flowRight: {
  flexDirection: 'row',
  alignItems: 'center',
  alignSelf: 'stretch',
},
searchInput: {
  height: 36,
  padding: 4,
  marginRight: 5,
  flexGrow: 1,
  fontSize: 18,
  borderWidth: 1,
  borderColor: '#48BBEC',
  borderRadius: 8,
  color: '#48BBEC',
  backgroundColor:'#ffffff'
  
},image: {
  width: 217,
  height: 138,
},
});