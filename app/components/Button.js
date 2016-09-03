import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

export default class Button extends Component {
    render() {
        return (
            <TouchableOpacity onPress={ this.props.action.bind(this) } style={ this.props.styles.container }>
                <Text style={ this.props.styles.text }>
                    { this.props.text }
                </Text>
            </TouchableOpacity>
        );
    }
}