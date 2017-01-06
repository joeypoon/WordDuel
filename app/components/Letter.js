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

    getContainerColor() {
        return this.props.active ? styles.active : styles.inactive;
    }

    render() {
        return (
            <TouchableOpacity
                style={ [ styles.container, this.getContainerColor() ] }
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

export default connect(mapStateToProps, { setPlayer, updateActiveGrid })(Letter);

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    active: {
        backgroundColor: secondaryColor
    },
    inactive: {
        backgroundColor: mainColor
    },
    text: {
        fontSize: 30,
        color: 'white',
        fontFamily: 'roboto-light'
    }
};