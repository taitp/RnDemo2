import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
class Word extends Component {
    memorizeWord() {
        this.props.dispatch({
            type: 'TOGGLE_MEMORIZED',
            id: this.props.myWord.id
        });
    }
    toggleShowWord() {
        this.props.dispatch({
            type: 'TOGGLE_SHOW',
            id: this.props.myWord.id
        });
    }
    render() {
        const { en, vn, memorized, isShow } = this.props.myWord;
        const textDecorationLine = memorized ? 'line-through' : 'none';
        const memorizedButtontext = memorized ? 'forget' : 'memorized';
        const meaning = isShow ? vn : "--------";
        const isShowButtontext = isShow ? 'Hide' : 'Show';
        return (
            <View style={styles.container} >
                <Text style={{ textDecorationLine }}>{en}</Text>
                {<Text> {meaning} </Text>}
                <View style={styles.controller}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={this.memorizeWord.bind(this)}>
                        <Text>{memorizedButtontext}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={this.toggleShowWord.bind(this)}
                    >
                        <Text>{isShowButtontext}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#D2DEF6',
        padding: 10,
        margin: 10
    },
    controller: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    button: {
        backgroundColor: '#F5F5F5',
        padding: 10,
        margin: 10
    }
})
export default connect()(Word)