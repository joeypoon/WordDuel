import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';

import LetterGrid from './LetterGrid';
import WordDisplay from './WordDisplay';
import MenuButton from './MenuButton';
import RecentWordsContainer from './RecentWordsContainer';
import Timer from './Timer';

import {loadLetterGrid} from '../action_creators';

class Battle extends Component {
    componentDidMount() {
        this.props.loadLetterGrid();
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.test}>
                    <View style={{flex: 1}} />
                    <Timer />
                    <MenuButton route={'Menu'} styles={styles.buttonStyles} />
                </View>
                <RecentWordsContainer players={this.props.players} />
                <WordDisplay />
                <LetterGrid />
            </View>
        );
    }
}

export default connect(null, {loadLetterGrid})(Battle);

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
    test: {
        height: 30,
        flexDirection: 'row'
    }
};