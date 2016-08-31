import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';

import LetterGrid from './LetterGrid';
import WordDisplay from './WordDisplay';
import {loadLetterGrid} from '../action_creators';

class Battle extends Component {
    componentDidMount() {
        this.props.loadLetterGrid();
    }

    render() {
        return (
            <View style={styles.container}>
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
    }
};