import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

class ScoreBar extends Component {
    renderScores() {
        if (this.props.players === 1) {
            return <View style={ styles.container }>
                <Text style={ styles.text }>
                    { this.props.playerScore }
                </Text>
            </View>;
        } else if (this.props.players === 2) {
            return <View style={ styles.container }>
                <Text style={ styles.text }>
                    { this.props.playerScore }
                </Text>
                <Text style={ styles.text }>
                    { this.props.opponentScore }
                </Text>
            </View>;
        }
    }

    render() {
        return <View>
            { this.renderScores() }
        </View>;
    }
}

function mapStateToProps (state) {
    return {
        playerScore: state.score.get('player'),
        opponentScore: state.score.get('opponent')
    };
}

export default connect(mapStateToProps)(ScoreBar);

const styles = {
    container: {
        alignItems: 'center',
        flexDirection: 'row'
    },
    text: {
        textAlign: 'center',
        flex: 1,
        fontSize: 25
    }
};