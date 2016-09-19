import React, { Component } from 'react';
import { Modal, View } from 'react-native';
import { connect } from 'react-redux';

import Button from './Button';
import BattleMenu from './modals/BattleMenu';
import GameOver from './modals/GameOver';
import RoundOver from './modals/RoundOver';
import OpponentFound from './modals/OpponentFound';
import BasicModal from './modals/BasicModal';
import {
    setRoute,
    setModalVisible
} from '../action_creators';

class CustomModal extends Component {
    searchingAction() {
        // TODO cancel request
        this.props.setRoute('Menu');
        this.props.setModalVisible(false);
    }

    invalidWordAction() {
        this.props.setModalVisible(false);
    }

    renderContent() {
        switch (this.props.modalType) {
            case 'battleMenu':
                return <BattleMenu />;
            case 'gameOver':
                return <GameOver />;
            case 'roundOverSolo':
                return <RoundOver players={ 1 } />;
            case 'roundOverDuel':
                return <RoundOver players={ 2 } />;
            case 'searching':
                return <BasicModal
                    text={ 'Searching for opponent' }
                    hasLoading={ true }
                    hasButton={ true }
                    buttonText={ 'Cancel' }
                    buttonAction={ this.searchingAction.bind(this) } />;
            case 'opponentFound':
                return <OpponentFound />;
            case 'waiting':
                return <BasicModal
                    text={ 'Waiting for opponent' }
                    hasButton={ false }
                    hasLoading={ true } />;
            case 'submittingWord':
                return <BasicModal
                    text={ 'Submitting word' }
                    hasButton={ false }
                    hasLoading={ true } />;
            case 'invalidWord':
                return <BasicModal
                    text={ 'Invalid word' }
                    hasButton={ true }
                    hasLoading={ false }
                    buttonText={ 'Okay' }
                    buttonAction={ this.invalidWordAction.bind(this) } />;
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