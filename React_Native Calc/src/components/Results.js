import React, { Component } from 'react'
import {View, Text,StyleSheet} from 'react-native';

export class Results extends Component {
    render() {
        return (
            <React.Fragment>
        <View style={styles.result}>
              <Text style={styles.resultText}>{this.props.resultText}</Text>
        </View>
        <View style={styles.calculaltion}>
              <Text style={styles.calculaltionText}>{this.props.result}</Text>
        </View>
        </React.Fragment>
        )
    }
}

export default Results


const styles = StyleSheet.create({
    calculaltionText: {
      fontSize: 35,
      color: 'white',
    },
    resultText: {
      fontSize: 60,
      color:'white',
    },
    result: {
      flex: 2,
      backgroundColor: 'black',
      justifyContent: 'center',
      alignItems: 'flex-end',
    },
    calculaltion: {
      flex: 1,
      backgroundColor: 'black',
      justifyContent: 'center',
      alignItems: 'flex-end',
    },
  });
  