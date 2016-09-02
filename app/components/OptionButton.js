import React, {Component} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';

export default class OptionButton extends Component {
    handlePress() {
        this.props.action();
    }

    render() {
        return (
            <TouchableOpacity onPress={this.handlePress.bind(this)} style={styles.container}>
                <Text>
                    {this.props.text}
                </Text>
            </TouchableOpacity>
        );
    }
}

const styles = {
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 70,
        height: 70,
    },
    text: {
        letterSpacing: 3
    }
};