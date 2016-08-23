import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';

import Button from './Button';

const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't'];

export default class LetterGrid extends Component {
    renderGrid() {
        return letters.map((letter, index) => {
            return <Button text={letter}
                key={index}
                styles={buttonStyles} />;
        });
    }

    render() {
        return (
            <View style={styles.container}>
                {this.renderGrid()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap'
    }
});

const buttonStyles = {
    container: {
        backgroundColor: '#f39c12',
        flex: 1,
        height: 75,
        width: 75,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 30,
        color: 'white'
    }
};