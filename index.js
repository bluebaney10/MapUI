/**
 * @format
 */

import {AppRegistry} from 'react-native';
//import App from './App/components/AppMapUI';
import App from './AppNavigation';
//import App from './AppTab';
//import App from './AppNav2';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
