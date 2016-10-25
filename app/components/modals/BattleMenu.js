import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { AppEventsLogger } from 'react-native-fbsdk';

import Button from '../Button';
import {
    setModalVisible,
    setRoute,
    clearOpponent
} from '../../actionCreators';
import { logEvent } from '../../utils/facebookUtils';
import { mainColor, mainTextColor } from '../../constants';

class BattleMenu extends Component {
    handleQuit() {
        logEvent('Quit battle');
        this.props.setModalVisible(false);
        this.props.setRoute('Menu');
        this.props.clearOpponent();
        // emit to server;
    }

    render() {
        return <View style={ styles.container }>
            <Button styles={ styles.buttonStyles }
                action={ this.handleQuit.bind(this) }
                text={ 'Quit' } />
            <Button styles={ styles.buttonStyles }
                action={ this.props.setModalVisible.bind(null, false) }
                text={ 'Cancel' } />
        </View>;
    }
}

const actions = {
    setModalVisible,
    setRoute,
    clearOpponent
}
export default connect(null, actions)(BattleMenu);

const styles = {
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 25
    },
    buttonStyles: {
        container: {
            backgroundColor: mainColor,
            padding: 10,
            margin: 10,
            width: 175,
            alignItems: 'center'
        },
        text: {
            fontSize: 20,
            fontFamily: 'roboto-light',
            color: 'white',
            letterSpacing: 2
        }
    }
};