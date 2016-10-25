import React, { Component } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { connect } from 'react-redux';

import { setPlayer, updateActiveGrid } from '../actionCreators';
import { mainColor, secondaryColor } from '../constants';

class Letter extends Component {

    handlePress() {
        if (!this.props.active) {
            this.props.updateActiveGrid(this.props.letter.position, true);
            const word = this.props.word + this.props.letter.value;
            this.props.setPlayer({ word });
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

function mapStateToProps(state) {
    return {
        word: state.player.get('word')
    };
}

export default connect(null, { setPlayer, updateActiveGrid })(Letter);

const styles = {
    container: {
        backgroundColor: mainColor,
        flex: 1,
        height: 75,
        justifyContent: 'center',
        alignItems: 'center'
    },
    activeContainer: {
        backgroundColor: secondaryColor,
        flex: 1,
        height: 75,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 30,
        color: 'white',
        fontFamily: 'roboto-light'
    }
};