/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import {AppRegistry} from 'react-native';
// import App from './Components/FormLandingPage/FormLandingPage.component';
// import App from './Components/CreateForm/CreateForm.component';

import App from './Components/App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
