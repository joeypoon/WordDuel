import React, {Component} from 'react';
import {TouchableHighlight, Text, StyleSheet} from 'react-native';

export default class Button extends Component {
    handlePress() {
        this.props.action(this.props.text);
    }

    render() {
        return (
            <TouchableHighlight style={this.props.styles.container}
                onPress={this.handlePress.bind(this)}>
                <Text style={this.props.styles.text}>
                    {this.props.text}
                </Text>
            </TouchableHighlight>
        );
    }
}