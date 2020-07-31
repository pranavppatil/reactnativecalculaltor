import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      resultText:'',
      result:0,
      value:0
    }
  }

  caluclateResult() {
    try{
      this.setState({
        result:eval(this.state.resultText),
      })
    }
      catch(e) {
        this.setState({
          result:'Error'
        });
      }
    }
  clearText() {
    this.setState({
      resultText:''
    })
  }
  buttonPressed(text) {
    if(text=='='){
      return this.caluclateResult()
    }
    else if (text=='DEL') {
      return this.clearText()
    }
    else {
    this.setState({
      resultText:this.state.resultText+text
    })
    }
  }


  render() {
    let rows = []
    let nums=[[1,4,7],[2,5,8],[3,6,9],['.',0,'=']]
    let ops=[]
    let operations=['DEL','+','-','*','/']
    for (let i = 0; i < 4; i++) {
      let row = []
      for (let j = 0; j < 3; j++) {
        row.push(
          <TouchableOpacity onPress={()=> this.buttonPressed(nums[i][j])} style={styles.btn}>
            <Text style={styles.btnText}>{nums[i][j]}</Text>
          </TouchableOpacity>);
      }
      rows.push(<View style={styles.row}>
        {row}
      </View>);
    }
    
    for(let i=0;i<5;i++) {
      ops.push(
        <TouchableOpacity onPress={()=>this.buttonPressed(operations[i])} style={styles.btn}>
          <Text style={styles.white}>{operations[i]}</Text>
        </TouchableOpacity>
      )
    }

   

    return (
      <View style={styles.container}>
        <View style={styles.result}>
          <Text style={styles.resultText}>{this.state.resultText}</Text>
        </View>
        <View style={styles.calculaltion}>
          <Text style={styles.calculaltionText}>{this.state.result}</Text>
        </View>
        <View style={styles.buttons}>
          <View style={styles.numbers}>
              {rows}
          </View>
          <View style={styles.operations}>
              {ops}
          </View>
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  calculaltionText: {
    fontSize: 35,
    color: 'white',
  },
  resultText: {
    fontSize: 60,
    color:'white',
  },
  btn: {
    justifyContent: 'center',
    alignItems: 'stretch',
    
  },
  btnText: {
    fontSize:35,
    padding:30,
  },
  white: {
    fontSize:30,
    color:'white',
  },
  row: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    alignSelf: 'stretch',
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
  buttons: {
    flex: 7,
    flexDirection: 'row',
  },
  numbers: {
    flex: 3,
    backgroundColor: '#858179',
  },
  operations: {
    flex: 1,
    justifyContent: 'space-around',
    backgroundColor: '#211e16',
    alignItems:'center',
    alignSelf: 'stretch',
  },
});
