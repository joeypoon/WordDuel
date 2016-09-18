import React, { Component } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';

import Button from '../Button';

export default class BasicModal extends Component {
    renderLoading() {
        if (this.props.hasLoading)
            return <ActivityIndicator
                animating={ true }
                size={ 'large' }
                color="#16a085" />
    }

    renderButton() {
        if (this.props.hasButton)
            return <Button styles={ styles.buttonStyles }
                action={ this.props.buttonAction.bind(this) }
                text={ this.props.buttonText } />
    }

    render() {
        return <View style={ styles.container }>
            { this.renderLoading() }
            <Text style={ styles.text }>
                { this.props.text }
            </Text>
            { this.renderButton() }
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
    },
    buttonStyles: {
        container: {
            backgroundColor: '#16a085',
            padding: 10,
            margin: 10,
            alignItems: 'center',
            width: 175
        },
        text: {
            fontSize: 20,
            color: 'white',
            letterSpacing: 2
        }
    }
}