import React, {Component} from 'react';
import {View} from 'react-native';

import Letter from './Letter';

const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't'];

export default class LetterRow extends Component {
    renderRow() {
        return letters.slice(0, 5).map((letter, index) => {
            return <Letter
                letter={letter}
                key={index} />
            });
    }

    render() {
        return (
            <View style={styles.container}>
                {this.renderRow()}
            </View>
        );
    }
}

const styles = {
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'nowrap'
    }
};