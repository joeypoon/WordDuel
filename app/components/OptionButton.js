import React, {Component} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';

export default class OptionButton extends Component {
    handlePress() {
        this.props.action();
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={this.handlePress.bind(this)}>
                    <Text>
                        {this.props.text}
                    </Text>
                </TouchableOpacity>
            </View>
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