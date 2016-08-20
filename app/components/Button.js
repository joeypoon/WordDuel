import React, {Component} from 'react';
import {TouchableHighlight, Text, StyleSheet} from 'react-native';

export default class Button extends Component {
    handlePress() {
        console.log(this.props.text);
    }

    render() {
        return (
            <TouchableHighlight style={styles.container} onPress={this.handlePress.bind(this)}>
                <Text style={styles.text}>
                    {this.props.text}
                </Text>
            </TouchableHighlight>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f39c12',
        borderRadius: 5,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 30,
        paddingRight: 30,
        margin: 10
    },
    text: {
        fontSize: 30,
        color: 'white'
    }
});