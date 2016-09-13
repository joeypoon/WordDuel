import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import PlayerDisplay from './PlayerDisplay';
import BattleMenuButton from './BattleMenuButton';
import Timer from './Timer';

class BattleTopBar extends Component {

    render() {
        return <View style={ styles.container }>
            <View style={ styles.flexOne } />
            <Timer style={ styles.flexOne } />
            <BattleMenuButton style={ styles.flexOne } />
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
    },
    flexOne: {
        flex: 1
    }
}