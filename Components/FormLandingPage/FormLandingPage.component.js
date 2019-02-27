import React, { Component } from 'react';
import {
  TouchableOpacity, Text, ScrollView, View,
} from 'react-native';
import FormCard from '../FormCard/FormCard.component';
import NavBar from '../NavBar/NavBar.component';
import fetchFromDB from '../../src/helpers/fetchFromDB';
import styles from './FormLanding.style';

export default class FormLandingPage extends Component {
  state = {
    forms: [],
  }


  componentDidMount() {
    fetchFromDB().then((data) => {
      this.setState({
        forms: data.data,
      });
    });
  }

  createCards = () => {
    const formdata = [];
    const { forms } = this.state;
    forms.map((form) => {
      const name = form.formname;
      console.log(name);
      formdata.push(
        <TouchableOpacity
          onPress={name => this.handleFormPress(name)}
          style={{ maxHeight: 280 }}
        >
          <FormCard
            formname={form.formname}
            createdAt={form.createdAt}
          />
        </TouchableOpacity>,
      );
    });
    return formdata;
  }

  floatingButtonEvent = () => {
    this.props.navigation.navigate('CreateFormPage');
  }

  handleFormPress = (name) => {
    this.props.navigation.navigate('FillFormPage', { NAME: name });
  }

  render() {
    return (
      <View>
        <NavBar />
        <ScrollView contentContainerStyle={styles.allCards}>
          {this.createCards()}
        </ScrollView>
        <TouchableOpacity style={styles.buttonContainer} onPress={this.floatingButtonEvent}>
          <Text style={styles.buttonText}>New Form</Text>
        </TouchableOpacity>
      </View>

    );
  }
}
