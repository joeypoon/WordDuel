import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { connect } from 'react-redux';

import Button from '../Button';
import {
    setModalVisible,
    setModalType,
    challengeResponse,
    clearChallenger
} from '../../actionCreators';
import {
    mainColor,
    mainTextColor,
    secondaryColor,
    modalTypes
} from '../../constants';

class ShowChallengerBase extends Component {
    handleAccept() {
        this.props.challengeResponse(this.props.facebookId, 1, this.props.challengerSocket);
        this.props.setModalType(modalTypes.waiting);
    }

    handleDecline() {
        this.props.challengeResponse(null, 0, this.props.challengerSocket);
        this.props.clearChallenger();
        this.props.setModalVisible(false);
    }

    render() {
        const source = this.props.challengerImage ?
            { uri: this.props.challengerImage } : require('../puppy.png');
        return <View style={ styles.container }>
            <Text style={ styles.text }>
                { `${ this.props.challengerName }` }
            </Text>
            <Image source={ source }
                style={ styles.image } />
            <Button styles={ styles.acceptButton }
                action={ this.handleAccept.bind(this) }
                text={ 'Accept' } />
            <Button styles={ styles.declineButton }
                action={ this.handleDecline.bind(this) }
                text={ 'Decline' } />
        </View>;
    }
}

function mapStateToProps (state) {
    return {
        challengerName: state.challenge.get('name'),
        challengerImage: state.challenge.get('image'),
        challengerSocket: state.challenge.get('socket'),
        facebookId: state.player.get('facebookId')
    };
}

const actions = {
    setModalVisible,
    setModalType,
    challengeResponse,
    clearChallenger
};
export const ShowChallenger = connect(mapStateToProps, actions)(ShowChallengerBase);

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
    acceptButton: {
        container: {
            backgroundColor: mainColor,
            padding: 10,
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
    },
    declineButton: {
        container: {
            backgroundColor: secondaryColor,
            padding: 10,
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