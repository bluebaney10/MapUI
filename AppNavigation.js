import React from 'react';
import { View, Text,Button } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import AppMap from './App/components/HomeScreen'
import DetailsScreen from './App/components/DetailsScreen'


const RootStack = createStackNavigator(
  {
    //Home: AppMap,
	Home: {
           screen:AppMap, 
           navigationOptions: {
                header: null
        }
     },
    Details: DetailsScreen,
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
