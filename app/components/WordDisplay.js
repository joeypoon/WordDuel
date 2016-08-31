import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';

import OptionButton from './OptionButton';
import {clearWord, submitWord, resetActiveGrid} from '../action_creators';

class WordDisplay extends Component {
    submitWord() {
        this.props.submitWord();
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

export default connect(mapStateToProps, {clearWord, submitWord, resetActiveGrid})(WordDisplay);

const styles = {
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 70
    },
    textContainer: {
        flex: 3,
        alignItems: 'center'
    },
    text: {
        fontSize: 30,
        padding: 15,
        letterSpacing: 3,
    },
    button: {
        flex: 1
    }
};