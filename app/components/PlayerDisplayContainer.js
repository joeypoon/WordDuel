import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import PlayerDisplay from './PlayerDisplay';

class PlayerDisplayContainer extends Component {
    render() {
        return <View style={ styles.container }>
            <PlayerDisplay
                source={ this.props.opponentImage }
                score={ this.props.opponentScore } />
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
        opponentImage: state.players.get('playerImage'),
        opponentScore: state.score.get('player')
    };
}

export default connect(mapStateToProps)(PlayerDisplayContainer);

const styles = {
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 50,
        margin: 7
    }
}