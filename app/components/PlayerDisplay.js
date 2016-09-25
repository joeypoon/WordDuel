import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';

import { mainTextColor } from './constants/colors';

export default class PlayerDisplay extends Component {
    render() {
        const source = this.props.image ?
            { uri: this.props.image } : require('./puppy.png');
        return <View style={ styles.container }>
            <Image source={ source }
                style={ styles.image } />
            <Text style={ styles.score }>
                { this.props.score }
            </Text>
        </View>;
    }
}

const styles = {
    container: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    image: {
        height: 40,
        width: 40,
        borderRadius: 20,
        marginRight: 5
    },
    score: {
        fontFamily: 'roboto-light',
        fontSize: 25,
        backgroundColor: 'transparent',
        color: mainTextColor
    }
};