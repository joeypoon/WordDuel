import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import LetterGrid from './LetterGrid';
import WordDisplay from './WordDisplay';
import Button from './Button';
import RecentWordsContainer from './RecentWordsContainer';
import Timer from './Timer';

import { loadLetterGrid, setRoute } from '../action_creators';

class Battle extends Component {
    componentDidMount() {
        this.props.loadLetterGrid();
    }

    render() {
        return (
            <View style={ styles.container }>
                <View style={ styles.topBar }>
                    <View style={ { flex: 1 } } />
                    <Timer />
                    <Button text={ 'Menu' }
                        action={ this.props.setRoute.bind(null, 'Menu') }
                        styles={ styles.buttonStyles } />
                </View>
                <RecentWordsContainer players={ this.props.players } />
                <WordDisplay />
                <LetterGrid />
            </View>
        );
    }
}

export default connect(null, { loadLetterGrid, setRoute })(Battle);

const styles = {
    container: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    buttonStyles: {
        container: {
            flex: 1,
            alignItems: 'flex-end',
            justifyContent: 'center',
            paddingRight: 15
        },
        text: {
            fontSize: 20,
            letterSpacing: 2,
            textAlign: 'center'
        }
    },
    topBar: {
        height: 30,
        flexDirection: 'row'
    }
};