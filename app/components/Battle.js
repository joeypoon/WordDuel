import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import LetterGrid from './LetterGrid';
import WordDisplay from './WordDisplay';
import BattleTopBar from './BattleTopBar'
import PlayerDisplayContainer from './PlayerDisplayContainer';
import { logEvent } from '../utils';

import {
    requestLetterGrid,
    setPlayerScore,
    setOpponentScore,
    resetActiveGrid,
    clearWord,
    setModalType,
    setModalVisible,
    setTimerPause,
    setRoute,
    setOpponentName,
    searchOpponent,
    resetRound,
    resetTimer
} from '../action_creators';

class Battle extends Component {
    componentDidMount() {
        if (this.props.players === 2) {
            if (!this.props.facebookId) {
                this.warnLogin();
            } else {
                this.startDuelRound();
            }
        } else {
            this.startSoloRound();
        }
    }

    warnLogin() {
        this.props.setModalType('warnLogin');
        this.props.setModalVisible(true);
    }

    startSoloRound() {
        logEvent('Enter Solo');
        this.prepareRound();
        this.props.requestLetterGrid();
        this.props.setTimerPause(false);
    }

    startDuelRound() {
        logEvent('Enter Duel');
        this.prepareRound();
        this.props.setModalType('searching');
        this.props.setModalVisible(true);
        this.props.searchOpponent(this.props.facebookId);
    }

    prepareRound() {
        this.props.setPlayerScore(0);
        this.props.setOpponentScore(0);
        this.props.resetActiveGrid();
        this.props.clearWord();
        this.props.resetRound();
        this.props.setOpponentName(null);
        this.props.resetTimer();
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={ styles.topContainer }>
                    <WordDisplay players={ this.props.players } />
                    <BattleTopBar players={ this.props.players } />
                </View>
                <PlayerDisplayContainer players={ this.props.players } />
                <LetterGrid />
            </View>
        );
    }
}

const actions = {
    requestLetterGrid,
    setPlayerScore,
    setOpponentScore,
    resetActiveGrid,
    clearWord,
    setModalType,
    setModalVisible,
    setTimerPause,
    setRoute,
    setOpponentName,
    searchOpponent,
    resetRound,
    resetTimer
};

function mapStateToProps (state) {
    return {
        facebookId: state.players.get('facebookId')
    };
}

export default connect(mapStateToProps, actions)(Battle);

const styles = {
    container: {
        flex: 1
    },
    topContainer: {
        flex: 1,
        flexDirection: 'column-reverse'
    }
};