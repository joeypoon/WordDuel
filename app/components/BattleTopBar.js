import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import PlayerDisplay from './PlayerDisplay';
import BattleMenuButton from './BattleMenuButton';

class BattleTopBar extends Component {

    render() {
        return <View style={ styles.container }>
            <PlayerDisplay
                name={ this.props.opponentName }
                level={ this.props.opponentLevel }
                score={ this.props.opponentScore }
                style={ { flex: 1 } } />
            <BattleMenuButton />
        </View>;
    }
}

function mapStateToProps (state) {
    return {
        opponentName: state.players.get('opponentName'),
        opponentLevel: state.players.get('opponentLevel'),
        opponentScore: state.score.get('opponent')
    };
}

export default connect(mapStateToProps)(BattleTopBar);

const styles = {
    container: {
        height: 30,
        flexDirection: 'row'
    }
}