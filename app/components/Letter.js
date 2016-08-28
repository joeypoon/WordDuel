import React, {Component} from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {connect} from 'react-redux';

import {addLetter} from '../action_creators';

class Letter extends Component {
    constructor(props) {
        super(props);
        this.active = false;
    }

    handlePress() {
        if (!this.active) {
            this.active = true;
            this.props.addLetter(this.props.letter);
            this.forceUpdate();
        }
    }

    getContainerStyle() {
        return this.active ? styles.activeContainer : styles.container;
    }

    render() {
        return (
            <TouchableOpacity
                style={this.getContainerStyle()}
                onPress={this.handlePress.bind(this)}>
                <Text style={styles.text}>
                    {this.props.letter}
                </Text>
            </TouchableOpacity>
        );
    }
}

export default connect(null, {addLetter})(Letter);

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