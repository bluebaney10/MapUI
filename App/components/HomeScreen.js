
import React, {Component} from 'react'
import {Platform, StyleSheet, Text, View,Image,Button,ImageBackground,TouchableOpacity } from 'react-native'
import SearchPage from './SearchPage'
import UIControl from './UIControl'
//import UIControl from './UIControl'; <UIControl />


class AppMap extends React.Component {


constructor() {
        super();
        }

	
  render() {
    return (
     
      <ImageBackground source={require('../images/map_mock.jpg')} resizeMode='cover'  style={styles.imgBackground}>
	  <View style = { styles.container }>
       <View style={ styles.topView} >
                <TouchableOpacity style={styles.toucharea} onPress={() =>this.props.navigation.navigate('Details')}>
				  <SearchPage />
			   </TouchableOpacity>
	    </View>
   
     <View style={ styles.bottomView}  >
		<UIControl />
     </View>
		
	  </View>
     </ImageBackground>

      
	  
	  
    );
  }
}
export default AppMap


const styles = StyleSheet.create({
  container: {
	  
	 
         flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
       
  },
  imgBackground: {
	   width: '100%',
        height: '100%',
        
},
   topView:{
	  
      width: '90%', 
      height: 50, 
      justifyContent: 'center', 
      position: 'absolute',
      top: 0,
    },
 
   bottomView:{
      width: '100%', 
      height: 50, 
      justifyContent: 'center', 
      alignItems: 'flex-end',
      position: 'absolute',
      bottom: 40,
	  marginRight:'auto',
	  paddingRight:20,
    },
	
	toucharea:{
		
	}
 
  
});