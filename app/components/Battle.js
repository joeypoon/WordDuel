import React, {Component} from 'react';
import {View, Text} from 'react-native';

import LetterGrid from './LetterGrid';
import WordDisplay from './WordDisplay';

export default class Battle extends Component {
    render() {
        return (
            <View style={styles.container}>
                <WordDisplay />
                <LetterGrid />
            </View>
        );
    }
}

const styles = {
    container: {
        flex: 1,
        justifyContent: 'flex-end'
    }
};