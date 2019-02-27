import React, { Component } from 'react';
import {
  Text, View,
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
