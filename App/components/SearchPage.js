import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  ActivityIndicator,
  
} from 'react-native';


//type Props = {};
//export default class SearchPage extends Component<Props> {1

class SearchPage extends Component{
  static navigationOptions = {
    title: 'Property Finder',
  };
  
  constructor(props) {    
    super(props);

  }
  
  
  render() {
	  
	  
	  return (
	   <View style={styles.searchInput} >
	   <Text style={styles.searchText}>Where to go?</Text>
	   </View>
	   )
    
	/*
	return (
     <View>
	 
  <TextInput
     

    underlineColorAndroid={'transparent'}
    style={styles.searchInput}
    placeholder='Where to go?'/>
 
 
</View>
    )*/
  }
}
export default SearchPage

const styles = StyleSheet.create({
 
  flowRight: {
  flexDirection: 'row',
  alignItems: 'center',
  alignSelf: 'stretch',
},
searchInput: {
  //height: 33,
  height: 36,
  padding: 6,
  marginTop:37,
  fontSize: 18,
  borderWidth: 2,
  borderColor: '#e4e3e1',
  borderRadius: 8,
  color: '#d3d3d3',
  backgroundColor:'#ffffff',
  width:'100%',
 },
 searchText:{
	 color: '#d3d3d3',
 },
})