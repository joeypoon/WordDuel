import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class PlayerDisplay extends Component {
    render() {
        return <View style={ styles.container }>
            <Text style={ styles.level }>
                Lv{ this.props.level }
            </Text>
            <Text style={ styles.name }>
                { this.props.name }
            </Text>
            <Text style={ styles.score }>
                { this.props.score }
            </Text>
        </View>;
    }
}

const styles = {
    container: {
        marginLeft: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    level: {
        fontSize: 20,
        letterSpacing: 1,
        marginRight: 5
    },
    name: {
        fontSize: 20,
        letterSpacing: 1,
        marginRight: 15
    },
    score: {
        fontSize: 20
    }
};