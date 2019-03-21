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


class UIControl extends Component{
	
	render() {
	return (
    <View style={styles.uicontrol_box}>
      <Image source={require('../images/icon1_on.jpg')} style={styles.image}/>
      <Image source={require('../images/icon2_on.jpg')} style={styles.image}/>
   </View>
    )
  }
	
}
export default UIControl


const styles = StyleSheet.create({
 
  
uicontrol_box: {
	borderRadius: 8,
	//backgroundColor:'#ffffff',
	//width:45,
	//borderColor: '#e4e3e1',
 }, 
image: {
  width:32,
 
},
});