import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import Button from '../Button';
import {
    setModalVisible,
    clearWord,
    setPlayerScore,
    resetTimer,
    setTimerPause,
    resetActiveGrid,
    requestLetterGrid,
    setModalType,
    resetRound,
    setOpponentWord
} from '../../action_creators';
import {
    mainColor,
    mainTextColor,
    maxRounds,
    modalTypes
} from '../../constants';

class RoundOver extends Component {
    componentDidMount() {
        this.props.setTimerPause(true);
    }

    isLastRound() {
        return this.props.round >= maxRounds;
    }

    endMatch() {
        const { matchId } = this.props;
        const isDuel = this.props.players === 2 ? true : false;
        this.props.setModalType(modalTypes.gameOver);
    }

    nextRound() {
        this.props.setPlayerScore(this.props.playerScore + this.props.playerWord.length);
        this.props.setOpponentWord('');
        this.props.clearWord();
        this.props.resetActiveGrid();
        this.props.requestLetterGrid();
        this.props.resetTimer();
        this.props.setModalVisible(false);
        this.props.setTimerPause(false);
    }

    handleDone() {
        if (this.isLastRound()) return this.endMatch();
        this.nextRound();
    }

    render() {
        if (this.props.players === 2)
            return <View style={ styles.container }>
                <Text style={ styles.text }>Round: { this.props.round }</Text>
                <Text style={ styles.text }>{ this.props.playerWord }</Text>
                <Text style={ styles.text }>VS</Text>
                <Text style={ styles.text }>{ this.props.opponentWord }</Text>
                <Button styles={ styles.buttonStyles }
                    action={ this.handleDone.bind(this) }
                    text={ 'Done' } />
            </View>;
        return <View style={ styles.container }>
            <Text style={ styles.text }>Round: { this.props.round }</Text>
            <Text style={ styles.text }>{ this.props.playerWord }</Text>
            <Button styles={ styles.buttonStyles }
                action={ this.handleDone.bind(this) }
                text={ 'Done' } />
        </View>;
    }
}

function mapStateToProps(state) {
    return {
        playerWord: state.wordDisplay,
        playerScore: state.score.get('player'),
        timer: state.timer.get('time'),
        round: state.round,
        matchId: state.players.get('matchId'),
        opponentWord: state.players.get('opponentWord')
    };
}


const actions = {
    setModalVisible,
    clearWord,
    setPlayerScore,
    resetTimer,
    setTimerPause,
    resetActiveGrid,
    requestLetterGrid,
    setModalType,
    resetRound,
    setOpponentWord
}
export default connect(mapStateToProps, actions)(RoundOver);

const styles = {
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 25
    },
    text: {
        fontSize: 25,
        margin: 5,
        fontFamily: 'roboto-light',
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
            fontSize: 20,
            fontFamily: 'roboto-light',
            color: 'white',
            letterSpacing: 2
        }
    }
}