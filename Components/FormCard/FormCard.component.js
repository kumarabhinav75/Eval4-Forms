import React, { Component } from 'react';
import {
  Text, View,
} from 'react-native';
import styles from './FormCard.style';

export default class FormCard extends Component {
  render() {
    return (
      <View style={styles.card}>
        <Text style={styles.cardText1}>{this.props.formname}</Text>
        <View
          style={{
            borderBottomColor: 'black',
            borderBottomWidth: 1,
          }}
        />
        <Text style={styles.cardText2}>
Created at:
          {this.props.createdAt}
        </Text>
      </View>
    );
  }
}
