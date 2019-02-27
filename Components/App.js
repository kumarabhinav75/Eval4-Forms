import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import AppNavigatorContainer from '../Navigation';

export default class App extends Component {
  render() {
    console.log('INSIDE APP');
    return (
      <AppNavigatorContainer />
      // <Text>HELLO</Text>
    );
  }
}
