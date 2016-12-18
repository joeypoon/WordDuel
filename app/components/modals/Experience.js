import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import Button from '../Button';
import { requestAd } from '../../utils';
import { mainColor, mainTextColor } from '../../constants';
import {
    setModalVisible,
    setRoute,
    clearOpponent,
    clearMatch,
    clearPlayer,
    setTimerPause
} from '../../actionCreators';

class ExperienceModalBase extends Component {
    componentDidMount() {
        this.props.setTimerPause(true);
    }

    handleQuit() {
        this.props.setModalVisible(false);
        this.props.setRoute('Menu');
        this.props.clearOpponent();
        this.props.clearMatch();
        this.props.clearPlayer();
        requestAd();
    }

    render() {
        return <View style={ styles.container }>
            <Text style={ styles.text }>
                Lvl { this.props.level }
            </Text>
            <Text style={ styles.text }>
                + { this.props.score } Experience
            </Text>
            <Text style={ styles.text }>
                Exp { `${ this.props.experience } / ${ this.props.requiredExp }` }
            </Text>
            <Button styles={ styles.buttonStyles }
                action={ this.handleQuit.bind(this) }
                text={ 'Done' } />
        </View>;
    }
}

function mapStateToProps(state) {
    return {
        score: state.player.get('score'),
        level: state.player.get('level'),
        requiredExp: state.player.get('requiredExp'),
        experience: state.player.get('experience')
    };
}

const actions = {
    setModalVisible,
    setRoute,
    clearOpponent,
    clearMatch,
    clearPlayer,
    setTimerPause
};
export const ExperienceModal = connect(mapStateToProps, actions)(ExperienceModalBase);

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
    buttonStyles: {
        container: {
            backgroundColor: mainColor,
            padding: 10,
            margin: 10,
            alignItems: 'center',
            width: 175
        },
        text: {
            fontFamily: 'roboto-light',
            fontSize: 20,
            color: 'white',
            letterSpacing: 2
        }
    }
}