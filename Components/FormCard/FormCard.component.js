import React, { Component } from 'react';
import {
  TextInput, TouchableOpacity, Text, KeyboardAvoidingView, Image, View, StyleSheet,
} from 'react-native';

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
        <Text style={styles.cardText2}>Created at:{this.props.createdAt}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    // flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'green',
    width: 300,
    marginBottom: 20,
    // minHeight: 250,
    color: 'white',
  },
  cardText1: {
    alignSelf:'center',
    color: 'white',
    fontSize: 15,
    margin: 20,
    minHeight: 150,
  },
  cardText2: {
    alignSelf:'center',
    color: 'yellow',
    fontSize: 15,
    margin: 20,
  },
});