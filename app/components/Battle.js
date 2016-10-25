import React from 'react';
import { View } from 'react-native';

import LetterGrid from './LetterGrid';
import WordDisplay from './WordDisplay';
import BattleTopBar from './BattleTopBar'
import PlayerDisplayContainer from './PlayerDisplayContainer';

export default function Battle(props) {
    return <View style={styles.container}>
            <View style={ styles.topContainer }>
                <WordDisplay />
                <BattleTopBar />
            </View>
            <PlayerDisplayContainer />
            <LetterGrid />
        </View>;
}

const styles = {
    container: {
        flex: 1
    },
    topContainer: {
        flex: 1,
        flexDirection: 'column-reverse'
    }
};