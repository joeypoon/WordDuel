import React, {Component} from 'react';
import {View} from 'react-native';

import Letter from './Letter';

export default class LetterRow extends Component {
    renderRow() {
        return this.props.row.map((letter, index) => {
            return <Letter
                letter={letter}
                active={this.props.activeGrid[letter.position]}
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