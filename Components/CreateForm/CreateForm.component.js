import React, { Component } from 'react';
import {
  TextInput, TouchableOpacity, Text, ScrollView, View,
} from 'react-native';
import createFormAPI from '../../src/helpers/createForm';

import styles from './CreateForm.style';

export default class CreateForm extends Component {
  state = {
    formname: '',
    fields: [],
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
    });
  }

  handleFieldTextEnd = (fieldName) => {
    const fieldArr = this.state.fields;
    fieldArr.push(fieldName);
    this.setState({
      fields: fieldArr,
    });
  }

  saveForm = () => {
    // console.log('HELLO');
    const { fields, formname } = this.state;
    const fieldObject = {};
    fields.map((fieldName) => {
      fieldObject[fieldName] = [];
    });
    const formObj = {};
    formObj.formname = formname;
    formObj.field = { ...fieldObject };
    createFormAPI(formObj);
    this.props.navigation.navigate('MainScreen');
  }

  displayNewField = count => Array(count).fill(
    <TextInput
      placeholder="Field"
      returnKeyType="next"
      keyboardType="email-address"
      style={styles.input}
      onEndEditing={e => this.handleFieldTextEnd(e.nativeEvent.text)}
    />,
  )

  render() {
    console.log(this.state.fields);
    // moment().format('hh:mm:ss a');
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
        <TouchableOpacity style={styles.buttonContainer} onPress={this.addNewField}>
          <Text style={styles.buttonText}>Add Field</Text>
        </TouchableOpacity>
        <ScrollView>
          {this.displayNewField(this.state.fieldCount)}
        </ScrollView>
        <TouchableOpacity style={styles.saveButtonContainer} onPress={this.saveForm}>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
