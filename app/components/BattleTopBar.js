import React from 'react';
import { View } from 'react-native';

import BattleMenuButton from './BattleMenuButton';
import Timer from './Timer';

export default function() {
    return <View style={ styles.container }>
        <View style={ styles.flexOne } />
        <Timer style={ styles.flexOne }
            players={ this.props.players } />
        <BattleMenuButton style={ styles.flexOne } />
    </View>;
}

const styles = {
    container: {
        height: 30,
        flexDirection: 'row'
    },
    flexOne: {
        flex: 1
    }
}