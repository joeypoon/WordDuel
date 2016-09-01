import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';

import LetterGrid from './LetterGrid';
import WordDisplay from './WordDisplay';
import MenuButton from './MenuButton';
import RecentWords from './RecentWords';

import {loadLetterGrid} from '../action_creators';

class Battle extends Component {
    componentDidMount() {
        this.props.loadLetterGrid();
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.topBar}>
                    <MenuButton route={'Menu'} styles={styles.buttonStyles} />
                </View>
                <View style={styles.recentWordsContainer}>
                    <RecentWords />
                </View>
                <View style={styles.gridContainer}>
                    <WordDisplay />
                    <LetterGrid />
                </View>
            </View>
        );
    }
}

export default connect(null, {loadLetterGrid})(Battle);

const styles = {
    container: {
        flex: 1
    },
    topBar: {
        alignItems: 'flex-end'
    },
    recentWordsContainer: {
        alignItems: 'center',
        marginTop: 10
    },
    gridContainer: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    buttonStyles: {
        container: {
            width: 90,
        },
        text: {
            fontSize: 20,
            color: 'black',
            letterSpacing: 2,
            textAlign: 'center'
        }
    }
};