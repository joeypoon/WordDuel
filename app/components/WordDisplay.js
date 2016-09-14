import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

class WordDisplay extends Component {
    render() {
        return (
            <View style={ styles.container }>
                <Text style={ styles.text }>
                    { this.props.word }
                </Text>
            </View>
        );
    }
}

function mapStateToProps (state) {
    return {
        word: state.wordDisplay
    };
}

export default connect(mapStateToProps)(WordDisplay);

const styles = {
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 30,
        letterSpacing: 3,
        textAlign: 'center'
    }
};