import React, { Component } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { connect } from 'react-redux';

import { addLetter, updateActiveGrid } from '../action_creators';

class Letter extends Component {

    handlePress() {
        if (!this.props.active) {
            this.props.updateActiveGrid(this.props.letter.position, true);
            this.props.addLetter(this.props.letter.value);
        }
    }

    getContainerStyle() {
        return this.props.active ? styles.activeContainer : styles.container;
    }

    render() {
        return (
            <TouchableOpacity
                style={ this.getContainerStyle() }
                onPress={ this.handlePress.bind(this) }>
                <Text style={ styles.text }>
                    { this.props.letter.value }
                </Text>
            </TouchableOpacity>
        );
    }
}

export default connect(null, { addLetter, updateActiveGrid })(Letter);

const styles = {
    container: {
        backgroundColor: '#16a085',
        flex: 1,
        height: 75,
        justifyContent: 'center',
        alignItems: 'center'
    },
    activeContainer: {
        backgroundColor: '#e74c3c',
        flex: 1,
        height: 75,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 30,
        color: 'white'
    }
};