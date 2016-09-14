import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import LetterGrid from './LetterGrid';
import WordDisplay from './WordDisplay';
import BattleTopBar from './BattleTopBar'
import PlayerDisplayContainer from './PlayerDisplayContainer';

import {
    loadLetterGrid,
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
            <View style={styles.container}>
                <View style={ styles.topContainer }>
                    <WordDisplay />
                    <BattleTopBar />
                </View>
                <PlayerDisplayContainer players={ this.props.players } />
                <LetterGrid />
            </View>
        );
    }
}

const actions = {
    loadLetterGrid,
    clearRecentWords,
    setPlayerScore,
    setOpponentScore,
    resetActiveGrid,
    clearWord
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