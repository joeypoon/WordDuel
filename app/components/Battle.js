import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import LetterGrid from './LetterGrid';
import WordDisplay from './WordDisplay';
import BattleTopBar from './BattleTopBar'
import PlayerDisplayContainer from './PlayerDisplayContainer';
import { logEvent } from '../utils';

import {
    loadLetterGrid,
    setPlayerScore,
    setOpponentScore,
    resetActiveGrid,
    clearWord,
    setModalType,
    setModalVisible,
    setTimerPause
} from '../action_creators';

class Battle extends Component {
    componentDidMount() {
        this.prepareRound();
        if (this.props.players === 2) {
            logEvent('Enter Duel');
            this.props.setModalType('searching');
            this.props.setModalVisible(true);
            // TODO move to http
            setTimeout(() => this.props.setModalType('opponentFound'), 1000);
        } else {
            logEvent('Enter Solo');
            this.props.setTimerPause(false);
        }
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
    setTimerPause
};

export default connect(null, actions)(Battle);

const styles = {
    container: {
        flex: 1
    },
    topContainer: {
        flex: 1,
        flexDirection: 'column-reverse'
    }
};