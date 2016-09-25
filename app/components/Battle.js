import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import LetterGrid from './LetterGrid';
import WordDisplay from './WordDisplay';
import BattleTopBar from './BattleTopBar'
import PlayerDisplayContainer from './PlayerDisplayContainer';
import { logEvent } from '../utils/facebookUtils';

import {
    loadLetterGrid,
    setPlayerScore,
    setOpponentScore,
    resetActiveGrid,
    clearWord,
    setModalType,
    setModalVisible,
    setTimerPause,
    setRoute
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
        this.props.setTimerPause(false);
    }

    startDuelRound() {
        logEvent('Enter Duel');
        this.prepareRound();
        this.props.setModalType('searching');
        this.props.setModalVisible(true);
        // TODO move to http
        setTimeout(() => this.props.setModalType('opponentFound'), 1000);
    }

    prepareRound() {
        this.props.setPlayerScore(0);
        this.props.setOpponentScore(0);
        this.props.resetActiveGrid();
        this.props.clearWord();
        this.props.loadLetterGrid();
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
    loadLetterGrid,
    setPlayerScore,
    setOpponentScore,
    resetActiveGrid,
    clearWord,
    setModalType,
    setModalVisible,
    setTimerPause,
    setRoute
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