import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import Button from '../Button';
import { setModalVisible } from '../../action_creators';

class RoundOver extends Component {
    handleDone() {
        this.props.setModalVisible(false);
    }

    render() {
        // TODO Dynamic round
        // TODO player word
        // TODO opponent word
        return <View style={ styles.container }>
            <Text style={ styles.text }>Round: 1</Text>
            <Text style={ styles.text }>Player Word</Text>
            <Text style={ styles.text }>VS</Text>
            <Text style={ styles.text }>Opponent Word</Text>
            <Button styles={ styles.buttonStyles }
                action={ this.handleDone.bind(this) }
                text={ 'Done' } />
        </View>
    }
}

export default connect(null, { setModalVisible })(RoundOver);

const styles = {
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 25
    },
    text: {
        fontSize: 25,
        margin: 5
    },
    buttonStyles: {
        container: {
            backgroundColor: '#16a085',
            padding: 10,
            margin: 10,
            alignItems: 'center',
            width: 175
        },
        text: {
            fontSize: 20,
            color: 'white',
            letterSpacing: 2
        }
    }
}