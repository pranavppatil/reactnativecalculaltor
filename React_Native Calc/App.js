import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Buttons from './src/components/Buttons';
import Results from './src/components/Results';

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      resultText: '',
      result: 0,
      value: 0
    }
  }

  caluclateResult() {
    try {
      this.setState({
        result: eval(this.state.resultText),
      })
    }
    catch (e) {
      this.setState({
        result: 'Error'
      });
    }
  }
  clearText() {
    this.setState({
      resultText: ''
    })
  }
  buttonPressed = text => {
    if (text == '=') {
      return this.caluclateResult()
    }
    else if (text == 'CE') {
      return this.clearText()
    }
    else {
      this.setState({
        resultText: this.state.resultText + text
      })
    }
  }


  render() {
    return (
      <View style={styles.container}>
        <Results resultText={this.state.resultText} result={this.state.result} />
        <Buttons buttonval={this.buttonPressed} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  
});
