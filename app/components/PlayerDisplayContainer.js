import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import PlayerDisplay from './PlayerDisplay';

class PlayerDisplayContainer extends Component {
    renderOpponent() {
        if (this.props.players === 2) {
            return <PlayerDisplay
                source={ this.props.opponentImage }
                score={ this.props.opponentScore } />;
        }
        return <View />;
    }

    render() {
        return <View style={ styles.container }>
            { this.renderOpponent() }
            <PlayerDisplay
                source={ this.props.playerImage }
                score={ this.props.playerScore } />
        </View>
    }
}

function mapStateToProps (state) {
    return {
        playerImage: state.players.get('playerImage'),
        playerScore: state.score.get('player'),
        opponentImage: state.players.get('opponentImage'),
        opponentScore: state.score.get('opponent')
    };
}

export default connect(mapStateToProps)(PlayerDisplayContainer);

const styles = {
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 50,
        marginLeft: 15,
        marginRight: 15
    }
}