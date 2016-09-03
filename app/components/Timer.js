import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

export default class Timer extends Component {
    render() {
        return <View style={ styles.container }>
            <Text style={ styles.text }>
                30
            </Text>
        </View>;
    }
}

const styles = {
    container: {
        flex: 1,
        width: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 30,
        textAlign: 'center'
    }
};