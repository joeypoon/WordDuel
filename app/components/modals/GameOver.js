import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import {
    submitScore,
    matchEnd,
    setModalVisible,
    clearMatch,
    clearPlayer,
    setRoute,
    setTimerPause
} from '../../actionCreators';
import Button from '../Button';
import { mainColor, modalTypes } from '../../constants';

export class GameOver extends Component {
    componentDidMount() {
        this.props.setTimerPause(true);
        if (this.props.facebookId) {
            this.props.submitScore(this.props.playerScore);
        } else {
            // only solo and not logged in
            setTimeout(this.handleAnonSolo.bind(this), 3000);
        }

        // TODO this is sent twice
        if (this.props.matchId)
            this.props.matchEnd(this.props.matchId);
    }

    handleAnonSolo() {
        this.props.setModalVisible(false);
        this.props.clearMatch();
        this.props.clearPlayer();
        this.props.setRoute('Menu');
    }

    soloScoreDisplay() {
        return this.props.playerScore;
    }

    duelScoreDisplay() {
        return `${this.props.playerScore} - ${this.props.opponentScore}`;
    }

    winLoseText() {
        if (this.props.playerScore === this.props.opponentScore) {
            return 'You tied!';
        } else if (this.props.playerScore > this.props.opponentScore) {
            return 'You win!';
        } else {
            return 'You lost :(';
        }
    }

    renderSolo() {
        return <View style={ styles.container }>
            <Text style={ styles.text }>
                Match Over
            </Text>
            <Text style={ styles.scoreText }>
                Score: { this.soloScoreDisplay() }
            </Text>
        </View>;
    }

    renderDuel() {
        return <View style={ styles.container }>
            <Text style={ styles.text }>
                { this.winLoseText() }
            </Text>
            <Text style={ styles.scoreText }>
                { this.duelScoreDisplay() }
            </Text>
        </View>;
    }

    render() {
        if (this.props.matchId) return this.renderDuel();
        return this.renderSolo();
    }
}

function mapStateToProps (state) {
    return {
        facebookId: state.player.get('facebookId'),
        playerScore: state.player.get('score'),
        opponentScore: state.opponent.get('score'),
        matchId: state.match.get('id')
    };
}

const actions = {
    submitScore,
    matchEnd,
    setModalVisible,
    clearMatch,
    clearPlayer,
    setRoute,
    setTimerPause
}
export default connect(mapStateToProps, actions)(GameOver);

const styles = {
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 25
    },
    text: {
        fontSize: 25,
        margin: 5
    },
    scoreText: {
        fontSize: 20,
        fontWeight: '300'
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
            color: 'white',
            letterSpacing: 2
        }
    }
};