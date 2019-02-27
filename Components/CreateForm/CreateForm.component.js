import React, { Component } from 'react';
import {
  TextInput, TouchableOpacity, Text, KeyboardAvoidingView, Image, ScrollView, StyleSheet, View, Button
} from 'react-native';

import styles from './CreateForm.style';
export default class CreateForm extends Component {

  state = {
    formname :'',
    createdAt : '',
    fields : [],
    fieldCount: 0,
  }

  handleFormNameChange = (formname) => {
    this.setState({
      formname,
    });
  }

  addNewField = () => {
    const newFieldCount = this.state.fieldCount + 1;
    this.setState({
      fieldCount: newFieldCount,
    })
  }

  handleFieldTextEnd = (fieldName) => {
    const fieldArr = this.state.fields;
    fieldArr.push(fieldName);
    this.setState({
      fields: fieldArr,
    })
  }

  displayNewField = (count) => {
    return Array(count).fill(
      <TextInput
      placeholder="Field"
      returnKeyType="next"
      keyboardType="email-address"
      style={styles.input}
      onEndEditing={e => this.handleFieldTextEnd(e.nativeEvent.text)}
    />
    )
  }

  render(){
    console.log(this.state.fields);
    return (
      <View style={styles.container}>
        <TextInput
          placeholder="FormName"
          value={this.state.formname}
          returnKeyType="next"
          keyboardType="email-address"
          style={styles.input}
          onChangeText={this.handleFormNameChange}
        />
        <TouchableOpacity style={styles.buttonContainer} onPress = {this.addNewField}>
          <Text style={styles.buttonText}>Add Field</Text>
        </TouchableOpacity>

        <View>
          {this.displayNewField(this.state.fieldCount)}
        </View>
      </View>
    );
  }
}
