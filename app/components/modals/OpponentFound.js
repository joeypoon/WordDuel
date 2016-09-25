import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { connect } from 'react-redux';

import Button from '../Button';
import {
    setModalVisible,
    setModalType,
    setTimerPause
} from '../../action_creators';
import { mainColor, mainTextColor } from '../constants/colors';

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
        const source = this.props.opponentImage ?
            { uri: this.props.opponentImage } : require('../puppy.png');
        return <View style={ styles.container }>
            <Text style={ styles.text }>
                { this.props.opponentName }
            </Text>
            <Image source={ source }
                style={ styles.image } />
            <Text style={ styles.text }>
                Level { this.props.opponentLevel }
            </Text>
            <Button styles={ styles.buttonStyles }
                action={ this.handleReady.bind(this) }
                text={ 'Ready' } />
        </View>;
    }
}

function mapStateToProps (state) {
    return {
        opponentName: state.players.get('opponentName'),
        opponentLevel: state.players.get('opponentLevel'),
        opponentImage: state.players.get('opponentImage')
    };
}

const actions = { setModalVisible, setModalType, setTimerPause };
export default connect(mapStateToProps, actions)(OpponentFound);

const styles = {
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 25
    },
    text: {
        fontFamily: 'roboto-light',
        fontSize: 25,
        margin: 5,
        color: mainTextColor
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 25,
        margin: 5
    },
    buttonStyles: {
        container: {
            backgroundColor: mainColor,
            padding: 10,
            margin: 10,
            alignItems: 'center',
            width: 175,
            marginTop: 20
        },
        text: {
            fontFamily: 'roboto-light',
            fontSize: 20,
            color: 'white',
            letterSpacing: 2
        }
    }
}