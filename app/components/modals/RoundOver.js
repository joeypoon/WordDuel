import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import Button from '../Button';
import {
    setModalVisible,
    setPlayer,
    setTimerPause,
    resetActiveGrid,
    requestLetterGrid,
    setModalType,
    setOpponent,
    setReady,
    resetRound
} from '../../actionCreators';
import {
    mainColor,
    mainTextColor,
    maxRounds,
    modalTypes,
    timeOut
} from '../../constants';

class RoundOver extends Component {
    componentDidMount() {
        this.props.setTimerPause(true);
        this.timeout = setTimeout(this.handleDone.bind(this), timeOut);
    }

    componentWillUnmount() {
        clearTimeout(this.timeout);
        this.props.setPlayer({ word: '' });
    }

    isSolo() {
        return this.props.players === 1;
    }

    isLastRound() {
        return this.props.round >= maxRounds;
    }

    endMatch() {
        this.props.setModalType(modalTypes.gameOver);
    }

    nextRound() {
        if (this.isSolo()) {
            this.props.requestLetterGrid();
        } else {
            this.props.setModalType(modalTypes.waiting);
            this.props.setOpponent({ word: '' });
            this.props.setReady(this.props.matchId);
        }
    }

    handleDone() {
        const score = this.props.playerScore + this.props.playerWord.length;
        this.props.setPlayer({ score });
        this.props.resetRound();
        if (this.isLastRound()) return this.endMatch();
        this.nextRound();
    }

    renderSolo() {
        return <View style={ styles.container }>
            <Text style={ [ styles.text, styles.roundText ] }>Round: { this.props.round }</Text>
            <Text style={ [ styles.text, styles.wordText ] }>{ this.props.playerWord }</Text>
            <Button styles={ styles.buttonStyles }
                action={ this.handleDone.bind(this) }
                text={ 'Done' } />
        </View>;
    }

    renderDuel() {
        return <View style={ styles.container }>
            <Text style={ [ styles.text, styles.roundText ] }>Round: { this.props.round }</Text>
            <Text style={ [styles.text, styles.wordText] }>{ this.props.playerWord }</Text>
            <Text style={ [ styles.text, styles.vsText ] }>VS</Text>
            <Text style={ [ styles.text, styles.wordText ] }>{ this.props.opponentWord }</Text>
            <Button styles={ styles.buttonStyles }
                action={ this.handleDone.bind(this) }
                text={ 'Done' } />
        </View>;
    }

    render() {
        if (this.isSolo()) return this.renderSolo();
        return this.renderDuel();
    }
}

function mapStateToProps(state) {
    return {
        playerWord: state.player.get('word'),
        playerScore: state.player.get('score'),
        opponentWord: state.opponent.get('word'),
        timer: state.match.get('timer'),
        round: state.match.get('round'),
        matchId: state.match.get('id')
    };
}


const actions = {
    setModalVisible,
    setPlayer,
    setTimerPause,
    resetActiveGrid,
    requestLetterGrid,
    setModalType,
    setOpponent,
    setReady,
    resetRound
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
        margin: 5,
        fontFamily: 'roboto-light',
        color: mainTextColor
    },
    vsText: {
        fontSize: 20,
        fontWeight: '100',
    },
    wordText: {
        fontSize: 25
    },
    roundText: {
        fontSize: 25,
        fontWeight: '500'
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