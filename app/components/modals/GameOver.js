import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import {
    submitScore,
    matchEnd
} from '../../actionCreators';
import Button from '../Button';
import { mainColor, modalTypes, timeOut } from '../../constants';

export class GameOver extends Component {
    componentDidMount() {
        if (this.props.matchId) {
            // TODO this is sent twice
            this.props.matchEnd(this.props.matchId);
            setTimeout(
                this.props.submitScore
                    .bind(this, this.props.playerScore)
                , timeOut);
        }
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
        playerScore: state.player.get('score'),
        opponentScore: state.opponent.get('score'),
        matchId: state.match.get('id')
    };
}

const actions = {
    submitScore,
    matchEnd
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