import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import Button from './Button';
import PlayerDisplay from './PlayerDisplay';
import { setModalVisible, setModalType } from '../action_creators';

class BattleTopBar extends Component {
    openMenu() {
        this.props.setModalVisible(true);
        this.props.setModalType('battleMenu');
    }

    render() {
        return <View style={ styles.container }>
            <PlayerDisplay
                name={ this.props.opponentName }
                level={ this.props.opponentLevel }
                score={ this.props.opponentScore }
                style={ { flex: 1 } } />
            <Button text={ 'Menu' }
                action={ this.openMenu.bind(this) }
                styles={ styles.buttonStyles } />
        </View>;
    }
}

function mapStateToProps (state) {
    return {
        opponentName: state.players.get('opponentName'),
        opponentLevel: state.players.get('opponentLevel'),
        opponentScore: state.score.get('opponent')
    };
}

export default connect(mapStateToProps, { setModalVisible, setModalType })(BattleTopBar);

const styles = {
    container: {
        height: 30,
        flexDirection: 'row'
    },
    buttonStyles: {
        container: {
            flex: 1,
            alignItems: 'flex-end',
            justifyContent: 'center',
        },
        text: {
            fontSize: 20,
            letterSpacing: 2,
            textAlign: 'center',
            marginRight: 10
        }
    }
}