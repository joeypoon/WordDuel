import React, {Component} from 'react';
import {View} from 'react-native';

import LetterRow from './LetterRow';

export default class LetterGrid extends Component {

    render() {
        return (
            <View>
                <LetterRow />
                <LetterRow />
                <LetterRow />
                <LetterRow />
            </View>
        );
    }
}