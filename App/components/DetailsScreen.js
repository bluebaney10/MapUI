import React from 'react';
import { View, Text,Button,StyleSheet,TextInput,TouchableOpacity,Image,ImageBackground } from 'react-native';

class DetailsScreen extends React.Component {
  render() {
    return (
	
	 <View style = { styles.container }>
     <View style={ styles.topView} >
        <Text style={styles.head_text}>Get Directions</Text>
		 
		 
		 
		 
		 <TextInput underlineColorAndroid={'transparent'} style={[styles.searchInput]} value = "สถานีหนองบวกหาด" editable = {false}
		/>
		
		 <Image source={require('../images/icon_direction.jpg')} style={styles.icon_pos}/>
		
		 <TextInput underlineColorAndroid={'transparent'}
			style={styles.searchInput}
		placeholder='To'/>
		      <View >
		       <TouchableOpacity style={[styles.bt_menu,styles.bt_top]}>
			   <Image source={require('../images/ico_menu1.jpg')} style={styles.ico_pos}/>
			   <Text style={styles.bt_txt}>เลือกบนแผนที่</Text>
			   </TouchableOpacity>
			    <TouchableOpacity style={styles.bt_menu}>
				<Image source={require('../images/ico_menu2.jpg')} style={styles.ico_pos}/>
				<Text style={styles.bt_txt}>ตำแหน่งปัจจุบัน</Text>
			   </TouchableOpacity>
			   </View>
		
      </View>
	   </View>
    );
  }
}

export default DetailsScreen


const styles = StyleSheet.create({
  container: {
	 flex: 1,
	},
   line1: {
    backgroundColor: '#FDD7E4',
    alignSelf: 'stretch',
    textAlign: 'center',
},
    topView:{ },
	
	head_text:{
		color:'#1a1f32',
		fontSize:20,
		fontWeight:'bold',
		textAlign:'center',
		marginBottom:20,
		
	},
	searchInput: {
  height: 36,
  padding: 6,
  fontSize: 18,
  borderRadius: 8,
  color: '#484f7d',
  backgroundColor: '#f5f6f8',
  marginLeft:35,
  marginRight:15,
  marginBottom:7,
  
 },
	
	icon_pos:{
		position:'absolute',
		top:50,
		left:5,
	},
	
bt_top:{
	marginTop:14,
	borderTopWidth:2,
	borderTopColor: '#ebebeb',
	
	
},

ico_pos:{
	position:'absolute',
	left:10,
	top:15,
},
  
bt_menu:{
	textAlign:'center',
	textAlignVertical: "center",
	width:'100%',
	height:50,
	borderBottomWidth:2,
	borderBottomColor:'#f6f6f6',
	backgroundColor: '#ffffff',
},
bt_txt:{ 
	paddingTop:15,
	paddingLeft:40,
},


})