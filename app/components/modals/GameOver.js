import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import {
    setModalVisible,
    setRoute,
    setOpponentName,
    resetRound,
    submitScore
} from '../../action_creators';
import Button from '../Button';
import { requestAd } from '../../utils/adMobUtils';
import { mainColor } from '../../constants';

export class GameOver extends Component {
    componentDidMount() {
        if (this.props.matchId) this.props.submitScore(this.props.playerScore);
    }

    newMatch() {
        this.props.setModalVisible(false);
        this.props.setRoute('Menu');
        setTimeout(() => {
            if (this.props.matchId) return this.props.setRoute('Duel');
            this.props.setRoute('Solo');
        }, 250);
    }

    handleQuit() {
        requestAd();
        this.props.setModalVisible(false);
        this.props.setRoute('Menu');
        this.props.setOpponentName(null);
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
                Score: { this.soloScoreDisplay() }
            </Text>
            <Button styles={ styles.buttonStyles }
                action={ this.newMatch.bind(this) }
                text={ 'Play Again' } />
            <Button styles={ styles.buttonStyles }
                action={ this.handleQuit.bind(this) }
                text={ 'Quit' } />
        </View>;
    }

    renderDuel() {
        return <View style={ styles.container }>
            <Text style={ styles.text }>
                { this.winLoseText() }
            </Text>
            <Text style={ styles.text }>
                { this.duelScoreDisplay() }
            </Text>
            <Button styles={ styles.buttonStyles }
                action={ this.newMatch.bind(this) }
                text={ 'Play Again' } />
            <Button styles={ styles.buttonStyles }
                action={ this.handleQuit.bind(this) }
                text={ 'Quit' } />
        </View>;
    }

    render() {
        if (this.props.matchId) return this.renderDuel();
        return this.renderSolo();
    }
}

function mapStateToProps (state) {
    return {
        playerScore: state.score.get('player'),
        opponentScore: state.score.get('opponent'),
        matchId: state.players.get('matchId')
    };
}

const actions = {
    setOpponentName,
    setModalVisible,
    setRoute,
    resetRound,
    submitScore
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