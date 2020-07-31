import React, { Component } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export class Buttons extends Component {
    render() {

        let rows = []
        let nums = [[1, 4, 7], [2, 5, 8], [3, 6, 9], ['.', 0, '=']]
        let ops = []
        let operations = ['CE', '+', '-', '*', '/']
        for (let i = 0; i < 4; i++) {
            let row = []
            for (let j = 0; j < 3; j++) {
                row.push(
                    <TouchableOpacity key={nums[i][j]} onPress={() => this.props.buttonval(nums[i][j])} style={styles.btn}>
                        <Text style={styles.btnText}>{nums[i][j]}</Text>
                    </TouchableOpacity>);
            }
            rows.push(<View key={i} style={styles.row}>
                {row}
            </View>);
        }

        for (let i = 0; i < 5; i++) {
            ops.push(
                <TouchableOpacity key={operations[i]} onPress={(e) => this.props.buttonval(operations[i])} style={styles.btn}>
                    <Text style={styles.white}>{operations[i]}</Text>
                </TouchableOpacity>
            )
        }

        return (
            <View style={styles.buttons}>
                <View style={styles.numbers}>
                    {rows}
                </View>
                <View style={styles.operations}>
                    {ops}
                </View>
            </View>
        )
    }
}

export default Buttons

const styles = StyleSheet.create({

    btn: {
        justifyContent: 'center',
        alignItems: 'stretch',

    },
    btnText: {
        fontSize: 35,
        padding: 20,
    },
    white: {
        fontSize: 30,
        color: 'white',
        padding: 20,
    },
    row: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        alignSelf: 'stretch',
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
        alignItems: 'center',
        alignSelf: 'stretch',
    },
});
