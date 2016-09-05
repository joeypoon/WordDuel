import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import LetterGrid from './LetterGrid';
import WordDisplay from './WordDisplay';
import Button from './Button';
import RecentWordsContainer from './RecentWordsContainer';
import Timer from './Timer';
import ScoreBar from './ScoreBar';

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
                <View style={ styles.topBar }>
                    <View style={ { flex: 1 } } />
                    <Timer />
                    <Button text={ 'Menu' }
                        action={ this.props.setRoute.bind(null, 'Menu') }
                        styles={ styles.buttonStyles } />
                </View>
                <RecentWordsContainer players={ this.props.players } />
                <ScoreBar players={ this.props.players } />
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
export default connect(null, actions)(Battle);

const styles = {
    container: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    buttonStyles: {
        container: {
            flex: 1,
            alignItems: 'flex-end',
            justifyContent: 'center',
        },
        text: {
            fontSize: 20,
            letterSpacing: 2,
            textAlign: 'center',
            marginRight: 10
        }
    },
    topBar: {
        height: 30,
        flexDirection: 'row'
    }
};