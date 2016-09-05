import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import Button from './Button';
import {
    clearWord,
    submitWord,
    resetActiveGrid,
    addToRecentWords,
    resetTimer,
    setPlayerScore
} from '../action_creators';

class WordDisplay extends Component {
    submitWord() {
        // TODO validate word on backend
        if (this.props.word.length) {
            this.props.submitWord();
            // TODO addToRecentWords after submitWord post 200
            this.props.addToRecentWords(this.props.word);
            let score = this.props.playerScore + this.props.word.length;
            this.props.setPlayerScore(score);
            this.props.resetActiveGrid();
            this.props.resetTimer();
        }
    }

    clearWord() {
        this.props.clearWord();
        this.props.resetActiveGrid();
    }

    render() {
        return (
            <View style={ styles.container }>
                <Button text='Clear'
                    style={ styles.button }
                    action={ this.clearWord.bind(this) }
                    styles={ styles.buttonStyles } />
                <View style={ styles.textContainer }>
                    <Text style={ styles.text }>
                        { this.props.word }
                    </Text>
                </View>
                <Button text='Submit'
                    style={ styles.button }
                    action={ this.submitWord.bind(this) }
                    styles={ styles.buttonStyles } />
            </View>
        );
    }
}

function mapStateToProps (state) {
    return {
        word: state.wordDisplay,
        playerScore: state.score.get('player')
    };
}

const actions = { clearWord, submitWord, resetActiveGrid, addToRecentWords, resetTimer, setPlayerScore };
export default connect(mapStateToProps, actions)(WordDisplay);

const styles = {
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 70
    },
    textContainer: {
        height: 70,
        flex: 3,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 30,
        letterSpacing: 3,
        textAlign: 'center'
    },
    button: {
        flex: 1
    },
    buttonStyles: {
        container: {
            alignItems: 'center',
            justifyContent: 'center',
            width: 70,
            height: 70,
        },
        text: {
            letterSpacing: 1
        }
    }
};