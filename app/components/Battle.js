import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import LetterGrid from './LetterGrid';
import WordDisplay from './WordDisplay';
import BattleTopBar from './BattleTopBar'
import PlayerDisplayContainer from './PlayerDisplayContainer';

import { requestLetterGrid } from '../actionCreators';

class Battle extends Component {
    componentDidMount() {
        if (this.props.players === 1) this.props.requestLetterGrid();
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={ styles.topContainer }>
                    <WordDisplay players={ this.props.players } />
                    <BattleTopBar players={ this.props.players } />
                </View>
                <PlayerDisplayContainer players={ this.props.players } />
                <LetterGrid />
            </View>
        );
    }
}

const actions = {
    requestLetterGrid
};

export default connect(null, actions)(Battle);

const styles = {
    container: {
        flex: 1
    },
    topContainer: {
        flex: 1,
        flexDirection: 'column-reverse'
    }
};