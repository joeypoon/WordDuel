import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { connect } from 'react-redux';

import LetterGrid from './LetterGrid';
import WordDisplay from './WordDisplay';
import RecentWordsContainer from './RecentWordsContainer';
import BattleTopBar from './BattleTopBar'
import Timer from './Timer';
import PlayerDisplay from './PlayerDisplay';

import {
    loadLetterGrid,
    setRoute,
    clearRecentWords,
    setPlayerScore,
    setOpponentScore,
    resetActiveGrid,
    clearWord
} from '../action_creators';

class Battle extends Component {
    componentDidMount() {
        this.props.loadLetterGrid();
        this.props.resetActiveGrid();
        this.props.clearRecentWords();
        this.props.setPlayerScore(0);
        this.props.setOpponentScore(0);
        this.props.clearWord();
    }

    render() {
        return (
            <View style={ styles.container }>
                <BattleTopBar />
                <Timer />
                <RecentWordsContainer players={ this.props.players } />
                <View style={ styles.playerDisplay }>
                    <PlayerDisplay
                        name={ this.props.playerName }
                        level={ this.props.playerLevel }
                        score={ this.props.playerScore } />
                </View>
                <WordDisplay />
                <LetterGrid />
            </View>
        );
    }
}

const actions = {
    loadLetterGrid,
    setRoute,
    clearRecentWords,
    setPlayerScore,
    setOpponentScore,
    resetActiveGrid,
    clearWord
};

function mapStateToProps (state) {
    return {
        playerName: state.players.get('playerName'),
        playerLevel: state.players.get('playerLevel'),
        playerScore: state.score.get('player')
    };
}

export default connect(mapStateToProps, actions)(Battle);

const styles = {
    container: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    playerDisplay: {
        alignItems: 'flex-end',
        marginRight: 10
    }
};