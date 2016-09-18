import React, { Component } from 'react';
import { Modal, View } from 'react-native';
import { connect } from 'react-redux';

import Button from './Button';
import BattleMenu from './modals/BattleMenu';
import GameOver from './modals/GameOver';
import RoundOver from './modals/RoundOver';
import Searching from './modals/Searching';
import OpponentFound from './modals/OpponentFound';
import Waiting from './modals/Waiting';

class CustomModal extends Component {
    renderContent() {
        switch (this.props.modalType) {
            case 'battleMenu':
                return <BattleMenu />;
            case 'gameOver':
                return <GameOver />;
            case 'roundOver':
                return <RoundOver />;
            case 'searching':
                return <Searching />;
            case 'opponentFound':
                return <OpponentFound />;
            case 'waiting':
                return <Waiting />;
        }
        return <View />;
    }

    render() {
        return <Modal visible={ this.props.visible }
            animationType={ 'fade' }
            transparent={ true }
            onRequestClose={ () => { console.log("Modal has been closed.") } }>
            <View style={ styles.container }>
                { this.renderContent() }
            </View>
        </Modal>;
    }
}

function mapStateToProps (state) {
    return {
        visible: state.modal.get('isVisible'),
        modalType: state.modal.get('modalType')
    };
}

export default connect(mapStateToProps)(CustomModal);

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    }
};