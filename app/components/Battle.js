import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import LetterGrid from './LetterGrid';
import WordDisplay from './WordDisplay';
import RecentWordsContainer from './RecentWordsContainer';
import BattleTopBar from './BattleTopBar'
import Timer from './Timer';

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
        opponentName: state.players.get('opponentName'),
        opponentLevel: state.players.get('opponentLevel')
    };
}

export default connect(mapStateToProps, actions)(Battle);

const styles = {
    container: {
        flex: 1,
        justifyContent: 'flex-end'
    }
};