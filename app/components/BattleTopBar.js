import React from 'react';
import { View } from 'react-native';

import BattleMenuButton from './BattleMenuButton';
import Timer from './Timer';

export default function(props) {
    return <View style={ styles.container }>
        <View style={ styles.flexOne } />
        <Timer style={ styles.flexOne } />
        <BattleMenuButton style={ styles.flexOne } />
    </View>;
}

const styles = {
    container: {
        height: 40,
        flexDirection: 'row',
        alignItems: 'center'
    },
    flexOne: {
        flex: 1
    }
}