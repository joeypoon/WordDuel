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
        padding: 20
    },
    text: {
        letterSpacing: 3
    }
};