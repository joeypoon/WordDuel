import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class OpponentFound extends Component {

    render() {
        return <View style={ styles.container }>
            <Text style={ styles.text }>
                Waiting for opponent...
            </Text>
        </View>;
    }
}

const styles = {
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 25
    },
    text: {
        fontSize: 25,
        margin: 5
    }
}