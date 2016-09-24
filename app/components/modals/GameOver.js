import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import { setModalVisible, setRoute } from '../../action_creators';
import Button from '../Button';
import { requestAd } from '../../utils/adMobUtils';
import { mainColor } from '../constants/colors';

export class GameOver extends Component {
    newMatch() {
        // TODO
    }

    handleQuit() {
        requestAd();
        this.props.setModalVisible(false);
        this.props.setRoute('Menu');
    }

    scoreDisplay() {
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

    render() {
        return <View style={ styles.container }>
            <Text style={ styles.text }>
                { this.winLoseText() }
            </Text>
            <Text style={ styles.text }>
                { this.scoreDisplay() }
            </Text>
            <Button styles={ styles.buttonStyles }
                action={ this.newMatch.bind(this) }
                text={ 'Play Again' } />
            <Button styles={ styles.buttonStyles }
                action={ this.handleQuit.bind(this) }
                text={ 'Quit' } />
        </View>;
    }
}

function mapStateToProps (state) {
    return {
        playerScore: state.score.get('player'),
        opponentScore: state.score.get('opponent')
    };
}

export default connect(mapStateToProps, { setModalVisible, setRoute })(GameOver);

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