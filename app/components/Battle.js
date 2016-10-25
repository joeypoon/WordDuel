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
    resetActiveGrid,
    setRoute
} from '../action_creators';

class Battle extends Component {
    componentDidMount() {
        if (this.props.players === 2) {
            this.startDuelRound();
        } else {
            this.startSoloRound();
        }
    }

    startSoloRound() {
        logEvent('Enter Solo');
        this.prepareRound();
        this.props.requestLetterGrid();
    }

    startDuelRound() {
        logEvent('Enter Duel');
        this.prepareRound();
    }

    prepareRound() {
        this.props.resetActiveGrid();
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
    resetActiveGrid,
    setRoute
};

function mapStateToProps (state) {
    return {
        facebookId: state.player.get('facebookId')
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