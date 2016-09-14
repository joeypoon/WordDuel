import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';

export default class PlayerDisplay extends Component {
    render() {
        return <View style={ styles.container }>
            <Image source={ require('./puppy.png') }
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
        height: 30,
        width: 30,
        borderRadius: 15,
        marginRight: 5
    },
    score: {
        fontSize: 35,
        backgroundColor: 'transparent'
    }
};