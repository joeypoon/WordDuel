import React, { Component } from 'react';
import { Modal, View } from 'react-native';
import { connect } from 'react-redux';

import Button from './Button';
import BattleMenu from './modals/BattleMenu';
import GameOver from './modals/GameOver';
import RoundOver from './modals/RoundOver';
import Searching from './modals/Searching';
import OpponentFound from './modals/OpponentFound';
import BasicModal from './modals/BasicModal';
import {
    setRoute,
    setModalVisible
} from '../action_creators';

class CustomModal extends Component {
    cancelSearching() {
        // TODO cancel request
        this.props.setRoute('Menu');
        this.props.setModalVisible(false);
    }

    renderContent() {
        switch (this.props.modalType) {
            case 'battleMenu':
                return <BattleMenu />;
            case 'gameOver':
                return <GameOver />;
            case 'roundOver':
                return <RoundOver />;
            case 'searching':
                return <BasicModal
                    text={ 'Searching for opponent' }
                    animated={ true }
                    hasButton={ true }
                    buttonText={ 'Cancel' }
                    buttonAction={ this.cancelSearching.bind(this) } />;
            case 'opponentFound':
                return <OpponentFound />;
            case 'waiting':
                return <BasicModal
                    text={ 'Waiting for opponent' }
                    hasButton={ false }
                    animated={ true } />;
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

const actions = {
    setModalVisible,
    setRoute
}
export default connect(mapStateToProps, actions)(CustomModal);

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    }
};