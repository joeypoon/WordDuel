import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import LetterGrid from './LetterGrid';

export default class Battle extends Component {
    render() {
        return (
            <View>
                <LetterGrid />
            </View>
        );
    }
}