import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';

import OptionButton from './OptionButton';
import {clearWord, submitWord, resetActiveGrid, addToRecentWords} from '../action_creators';

class WordDisplay extends Component {
    submitWord() {
        this.props.submitWord();
        // TODO addToRecentWords after submitWord post 200
        this.props.addToRecentWords(this.props.word);
        this.props.resetActiveGrid();
    }

    clearWord() {
        this.props.clearWord();
        this.props.resetActiveGrid();
    }

    render() {
        return (
            <View style={styles.container}>
                <OptionButton text='Clear'
                    style={styles.button}
                    action={this.clearWord.bind(this)} />
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {this.props.word}
                    </Text>
                </View>
                <OptionButton text='Submit'
                    style={styles.button}
                    action={this.submitWord.bind(this)} />
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        word: state.wordDisplay
    };
}

export default connect(mapStateToProps, {clearWord, submitWord, resetActiveGrid, addToRecentWords})(WordDisplay);

const styles = {
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 70
    },
    textContainer: {
        flex: 3,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 30,
        letterSpacing: 3,
        textAlign: 'center'
    },
    button: {
        flex: 1
    }
};