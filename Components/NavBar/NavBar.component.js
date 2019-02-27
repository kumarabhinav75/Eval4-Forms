import React, { Component } from 'react';
import {
  SafeAreaView, Image, TouchableOpacity, Text, View
} from 'react-native';

import styles from './NavBar.style';

class NavBar extends Component {
  render() {
    return (
      <View style={styles.navBar}>
        <Text style={styles.navText}>Awesome Forms</Text>
      </View>
    );
  }
}

export default NavBar;
