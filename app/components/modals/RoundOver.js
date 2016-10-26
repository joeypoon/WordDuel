import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import Button from '../Button';
import {
    setModalType,
    setModalVisible,
    setPlayer,
    setOpponent,
    setTimerPause,
    sendReady,
    newRound
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
        this.props.setPlayer({ word: '', hasSubmitted: false });

        if (this.props.opponentSocket) {
            const score = this.props.opponentScore + this.props.opponentWord.length;
            this.props.setOpponent({ score });
        }
    }

    isSolo() {
        return !this.props.opponentSocket;
    }

    isLastRound() {
        return this.props.round >= maxRounds;
    }

    startRound() {
        this.props.newRound();
        this.props.setModalVisible(false);
        this.props.setTimerPause(false);
    }

    handleNextDuelRound() {
        this.props.sendReady(this.props.opponentSocket);

        if (this.props.opponentReady) {
            this.props.setOpponent({ isReady: false });
            this.startRound();
            return;
        }

        this.props.setModalType(modalTypes.waiting);
    }

    endMatch() {
        this.props.setModalType(modalTypes.gameOver);
    }

    nextRound() {
        if (this.isSolo()) return this.startRound();
        this.handleNextDuelRound();
    }

    handleDone() {
        const score = this.props.playerScore + this.props.playerWord.length;
        this.props.setPlayer({ score });
        this.props.setOpponent({ word: '' });
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
        opponentReady: state.opponent.get('isReady'),
        opponentScore: state.opponent.get('score'),
        opponentSocket: state.opponent.get('socket'),
        timer: state.match.get('timer'),
        round: state.match.get('round')
    };
}


const actions = {
    setModalVisible,
    setPlayer,
    setTimerPause,
    setModalType,
    setOpponent,
    sendReady,
    newRound
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