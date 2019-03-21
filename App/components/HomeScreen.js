
import React, {Component} from 'react'
import {Platform, StyleSheet, Text, View,Image,Button,ImageBackground, LayoutAnimation, UIManager, TouchableOpacity } from 'react-native'
import SearchPage from './SearchPage'
import UIControl from './UIControl'


class AppMap extends React.Component {
 

constructor() {
    super()
		
	this.state = { expanded1: false,expanded2: false }
	
    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
	
	 const array = [
 
      { expanded: false },
      { expanded: false },
	   { expanded: false },
    ];
 
    this.state = { AccordionData: [...array] }
}



 changeLayout = (id) => {
   
	 LayoutAnimation.configureNext(LayoutAnimation.Presets.easeIn)
	 
	 if(id===1){
		
		this.setState({ expanded1: !this.state.expanded1 })
		this.setState({ expanded2: false })
		
	 }
	 else{
		 this.setState({ expanded2: !this.state.expanded2 })
		 this.setState({ expanded1: false })
	 }
	 
  }
  
  update_Layout = (index) => {
	  
	 //alert('update_Layout'+index)

    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeIn);

    const array = this.state.AccordionData.map((item) => {

      const newItem = Object.assign({}, item);

      newItem.expanded = false;

      return newItem;
    });

    array[index].expanded = true;

    this.setState(() => {
      return {
        AccordionData: array
      }
    });
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
		   
		   
		    <View style={styles.bottomView  }>
		   <View style={styles.controlBlock}>
		   <TouchableOpacity  activeOpacity={0.8} onPress={() => this.changeLayout(1)}>
		  <Image source={ this.state.expanded1 ? 
		 require('../images/icon1_on.jpg') : require('../images/icon1_off.jpg')}/>
		  </TouchableOpacity>
		  
		  <TouchableOpacity  activeOpacity={0.8} onPress={() => this.changeLayout(2)}>
		  <Image source={ this.state.expanded2 ? 
		 require('../images/icon2_on.jpg') :require('../images/icon2_off.jpg')}/>
		   </TouchableOpacity>
		 </View>
		  </View>
   
    
		
	  </View>
	  
	         
			 <View style={styles.btnTextHolder}>
		 <View style={{ height: this.state.expanded1 ? null : 0, overflow: 'hidden' }}>
		    
			<View style={styles.label_head} >
			<Text style={styles.label_headTxt}>
			สถานีหนองบวกหาด 
			
			</Text>
			<Text style={[styles.label_headIcon,styles.headIcon1]}>R3Y</Text>
			<Text style={[styles.label_headIcon,styles.headIcon2]}>R3R</Text>
			</View>
			
			
			<Text style={styles.label_detail} >
			 <Image source={require('../images/icon_bus.jpg')} style={styles.label_detail_icon}/>
			 10-7118       2 ชั่วโมง 5 นาที
			</Text>
			
          <Text style={styles.label_detail} >
			 <Image source={require('../images/icon_bus.jpg')} style={styles.label_detail_icon}/>
			 10-9144       5 ชั่วโมง 5 นาที
			</Text>
           
          </View>
		  
		   <View style={{ height: this.state.expanded2 ? null : 0, overflow: 'hidden' }}>
             
			 <View style={styles.tabBlock}>
			<TouchableOpacity  activeOpacity={0.8} onPress={() => this.update_Layout(0)}>
			 <Image style={styles.tabmenu} source={ this.state.AccordionData[0].expanded ? 
			   require('../images/rtc_on.jpg') : 
			   require('../images/rtc_off.jpg')}/>
			 </TouchableOpacity>
			 
			 <TouchableOpacity  activeOpacity={0.8} onPress={() => this.update_Layout(1)}>
			<Image style={styles.tabmenu} source={ this.state.AccordionData[1].expanded ? 
			   require('../images/bus_on.jpg') : 
			   require('../images/bus_off.jpg')}/>
			 </TouchableOpacity>
			 
			  <TouchableOpacity  activeOpacity={0.8} onPress={() => this.update_Layout(2)}>
			  <Image style={styles.tabmenu} source={ this.state.AccordionData[2].expanded ? 
			   require('../images/van_on.jpg') : 
			   require('../images/van_off.jpg')}/>
			  </TouchableOpacity>
			</View>
			
			 
			 
			 <View style={{ height: this.state.AccordionData[0].expanded ? null : 0, overflow: 'hidden' }}>
			 <View style={styles.tabmenu_sub}>
			  <Image source={require('../images/shape.png')} style={styles.shape}/>
			  
			  <Text style={[styles.tabmenuSub_item,styles.bg_violet]}>R1</Text>
			  <Text style={[styles.tabmenuSub_item,styles.bg_pink]}>R2</Text>
			  <Text style={[styles.tabmenuSub_item,styles.tabmenuSub_current,styles.bg_yellow]}>R3Y</Text>
			  <Text style={[styles.tabmenuSub_item,styles.bg_red]}>R3R</Text>
			 </View>
			 </View>
			  
			  
			<View style={{ height: this.state.AccordionData[1].expanded ? null : 0, overflow: 'hidden' }}>
			 <View style={styles.tabmenu_sub}>
			  <Image source={require('../images/shape.png')} style={styles.shape}/>
			  
			  <Text style={[styles.tabmenuSub_item,styles.bg_sky,styles.tabmenuSub_current]}>B1</Text>
			  <Text style={[styles.tabmenuSub_item,styles.bg_orange]}>B2</Text>
			  <Text style={[styles.tabmenuSub_item,styles.bg_blue]}>B3</Text>
			  
			 </View>
			 </View>

			 <View style={{ height: this.state.AccordionData[2].expanded ? null : 0, overflow: 'hidden' }}>
			 <View style={styles.tabmenu_sub}>
			  <Image source={require('../images/shape.png')} style={styles.shape}/>
			  
			  
			  <Text style={[styles.tabmenuSub_item,styles.tabmenuSub_current,styles.bg_violetlight]}>KW</Text>
			  
			 </View>
			 </View>
			  
			  
	
			
           
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
	  right:5,
	 
    },
	
	label_head:{
	
	width:'100%',
	height:62,
	backgroundColor: '#1a1c31',
	borderColor:'#4ac2f6',
	borderWidth:2,
	paddingTop:15,
},
controlBlock:{
	backgroundColor:'#ffffff',
	position: 'absolute',
    bottom: 40,
	width:30,
	height:64,
	paddingLeft:3,
	paddingTop:2,
	borderRadius:8,
	borderColor:'#e3e3e3',
	
	
	
	
},

label_headTxt:{
	textAlign:'center',
	textAlignVertical: "center",
	color:'#fff',
	fontWeight:'bold',
	fontSize:18,
	
},

label_detail:{
	textAlign:'center',
	textAlignVertical: "center",
	width:'100%',
	height:40,
	backgroundColor: '#ffffff',
	color:'#373a4d',
	fontSize:14,
	fontWeight:'bold',
	borderBottomWidth:1,
	borderBottomColor:'#f2f2f2',
},
label_detail_icon:{
	position:'absolute',
	top:5,
	left:5,
	
},
label_headIcon:{
	position:'absolute',
	top:18,
	fontSize:8,
	lineHeight:25,
	color:'#ffffff',
	fontWeight:'bold',
	width:23,
	height:23,
	
	 borderRadius: 100/2,
	 borderRadius:20,
	 textAlign:'center',
	
	
},
 headIcon1:{
	right:30,
	backgroundColor:'#f8cf4f',
	
},
headIcon2:{
	right:5,
	backgroundColor:'#ed3535',
	
},
tabBlock:{ 
height:109,
backgroundColor:'#ffffff',
 flexWrap: 'wrap', 
 flexDirection:'row',
alignItems: 'center',
//justifyContent: 'space-between',
paddingLeft:15,
},
tabmenu:{  flexDirection:'column', marginLeft:10,marginRight:10, },

shape:{
	position:'absolute',
	top:0,
	left:'47%'
},

tabmenu_sub:{
	
	width:'100%',
	height:76,
	backgroundColor: '#1a1c31',
	 flexWrap: 'wrap', 
    flexDirection:'row',
    alignItems: 'center',
	justifyContent: 'space-around',
	
},
tabmenuSub_item:{
	
	fontSize:12,
	lineHeight:40,
	textAlign:'center',
	color:'#ffffff',
	fontWeight:'bold',
	width:42,
	height:42,
     flexDirection:'column', 
	// marginLeft:10,
	// marginRight:10,
	 borderRadius: 100/2,
	
	
},
tabmenuSub_current:{
	width:52,
	height:52,
	fontSize:16,
	lineHeight:50,
	
},
bg_violet:{
	backgroundColor:'#9c4df6',
	
},

bg_violetlight:{
	backgroundColor:'#e86eb9',
	
},



bg_pink:{
	backgroundColor:'#ed67ca',
	
},
bg_yellow:{
	backgroundColor:'#f9cd48',
	
},

bg_red:{
	backgroundColor:'#ed3733',
	
},


bg_sky:{
	backgroundColor:'#54cdfa',
	
},
bg_orange:{
	backgroundColor:'#ef7039',
	
},
bg_blue:{
	backgroundColor:'#343ad0',
	
},

triangleDown: {
	position:'absolute',
	left:0,
	width:20,
   
  },
  
});