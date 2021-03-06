import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import PlayerDisplay from './PlayerDisplay';

class PlayerDisplayContainer extends Component {
    renderOpponent() {
        if (this.props.opponentImage)
            return <PlayerDisplay
                image={ this.props.opponentImage }
                score={ this.props.opponentScore } />;
        return <View />;
    }

    render() {
        return <View style={ styles.container }>
            { this.renderOpponent() }
            <PlayerDisplay
                image={ this.props.playerImage }
                score={ this.props.playerScore } />
        </View>
    }
}

function mapStateToProps (state) {
    return {
        playerImage: state.player.get('image'),
        playerScore: state.player.get('score'),
        opponentImage: state.opponent.get('image'),
        opponentScore: state.opponent.get('score')
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