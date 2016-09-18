import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { connect } from 'react-redux';

import Button from '../Button';
import {
    setModalVisible,
    setModalType,
    setTimerPause
} from '../../action_creators';

class OpponentFound extends Component {
    handleReady() {
        this.props.setModalType('waiting');
        // TODO move to http
        setTimeout(() => {
            this.props.setModalVisible(false);
            this.props.setTimerPause(false);
        }, 1000);
    }

    render() {
        return <View style={ styles.container }>
            <Text style={ styles.text }>
                Joey
            </Text>
            <Image source={ require('../puppy.png') }
                style={ styles.image } />
            <Text style={ styles.text }>
                Level 5
            </Text>
            <Button styles={ styles.buttonStyles }
                action={ this.handleReady.bind(this) }
                text={ 'Ready' } />
        </View>;
    }
}

const actions = { setModalVisible, setModalType, setTimerPause };
export default connect(null, actions)(OpponentFound);

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
    image: {
        width: 50,
        height: 50,
        borderRadius: 25,
        margin: 5
    },
    buttonStyles: {
        container: {
            backgroundColor: '#16a085',
            padding: 10,
            margin: 10,
            alignItems: 'center',
            width: 175,
            marginTop: 20
        },
        text: {
            fontSize: 20,
            color: 'white',
            letterSpacing: 2
        }
    }
}