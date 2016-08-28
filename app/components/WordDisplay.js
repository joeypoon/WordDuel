import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';

import OptionButton from './OptionButton';
import {clearWord, submitWord} from '../action_creators';

class WordDisplay extends Component {
    render() {
        return (
            <View style={styles.container}>
                <OptionButton text='Clear'
                    style={styles.button}
                    action={this.props.clearWord} />
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        {this.props.word}
                    </Text>
                </View>
                <OptionButton text='Submit'
                    style={styles.button}
                    action={this.props.submitWord} />
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        word: state.get('word')
    };
}

export default connect(mapStateToProps, {clearWord, submitWord})(WordDisplay);

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