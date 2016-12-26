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
    ExperienceModal,
    ChallengeFriend,
    ShowChallenger
} from './modals';
import {
    resetActiveGrid,
    setRoute,
    setModalVisible,
    setModalType,
    clearWord,
    cancelSearch,
    setMatchId,
    clearOpponent,
    setTimerPause,
    clearChallenger,
    challengeResponse
} from '../actionCreators';
import { modalTypes } from '../constants';

class CustomModal extends Component {
    searchingAction() {
        this.props.cancelSearch(this.props.facebookId);
        this.props.setMatchId(null);
        this.props.clearOpponent();
        this.props.setRoute('Menu');
        this.props.setModalVisible(false);
    }

    invalidWordAction() {
        this.props.resetActiveGrid();
        this.props.clearWord();
        this.props.setModalVisible(false);
    }

    playerDisconnectAction() {
        this.props.setModalType(modalTypes.gameOver);
    }

    closeModal() {
        this.props.setModalVisible(false);
    }

    pauseTimer() {
        this.props.setTimerPause(true);
    }

    challengeDeclined() {
        this.props.clearChallenger();
        this.closeModal();
    }

    cancelChallengeRequest() {
        this.props.challengeResponse(null, 0, this.props.challengerSocket);
        this.challengeDeclined();
    }

    renderContent() {
        switch (this.props.modalType) {
            case modalTypes.battleMenu:
                return <BattleMenu />;
            case modalTypes.gameOver:
                return <GameOver />;
            case modalTypes.roundOver:
                return <RoundOver />;
            case modalTypes.searching:
                return <BasicModal
                    text={ 'Searching for opponent' }
                    hasLoading={ true }
                    hasButton={ true }
                    buttonText={ 'Cancel' }
                    buttonAction={ this.searchingAction.bind(this) } />;
            case modalTypes.opponentFound:
                return <OpponentFound />;
            case modalTypes.waiting:
                return <BasicModal
                    text={ 'Waiting for opponent' }
                    hasButton={ false }
                    actions={ [ this.pauseTimer.bind(this) ] }
                    hasLoading={ true } />;
            case modalTypes.submittingWord:
                return <BasicModal
                    text={ 'Submitting word' }
                    hasButton={ false }
                    hasLoading={ true } />;
            case modalTypes.invalidWord:
                return <BasicModal
                    text='Invalid word'
                    hasButton={ true }
                    hasLoading={ false }
                    buttonText='Okay'
                    buttonAction={ this.invalidWordAction.bind(this) } />;
            case modalTypes.playerDisconnect:
                return <BasicModal
                    text={ 'Opponent disconnected' }
                    hasButton={ true }
                    hasLoading={ false }
                    actions={ [ this.pauseTimer.bind(this) ] }
                    buttonText={ 'Okay' }
                    buttonAction={ this.playerDisconnectAction.bind(this) } />;
            case modalTypes.noConnection:
                return <BasicModal
                    text={ 'No connection. Please try again in a bit.' }
                    hasButton={ true }
                    hasLoading={ false }
                    buttonText={ 'Okay' }
                    buttonAction={ this.closeModal.bind(this) } />;
            case modalTypes.pleaseLogin:
                return <BasicModal
                    text={ 'Please login first' }
                    hasButton={ true }
                    hasLoading={ false }
                    buttonText={ 'Okay' }
                    buttonAction={ this.closeModal.bind(this) } />;
            case modalTypes.loading:
                return <BasicModal
                    text={ 'Loading' }
                    hasButton={ false }
                    hasLoading={ true } />;
            case modalTypes.experience:
                return <ExperienceModal />;
            case modalTypes.challengeFriend:
                return <ChallengeFriend />;
            case modalTypes.waitingForChallenge:
                return <BasicModal
                    text={ 'Waiting for opponent.' }
                    hasButton={ true }
                    hasLoading={ true }
                    buttonText={ 'Cancel' }
                    buttonAction={ this.cancelChallengeRequest.bind(this) } />;
            case modalTypes.challengeDeclined:
                return <BasicModal
                    text={ 'Challenge declined.' }
                    hasButton={ true }
                    hasLoading={ false }
                    buttonText={ 'Okay' }
                    buttonAction={ this.challengeDeclined.bind(this) } />;
            case modalTypes.showChallenger:
                return <ShowChallenger />;
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
        visible: state.game.get('modalVisible'),
        modalType: state.game.get('modalType'),
        facebookId: state.player.get('facebookId'),
        challengerSocket: state.challenge.get('socket')
    };
}

const actions = {
    resetActiveGrid,
    setRoute,
    setModalVisible,
    setModalType,
    clearWord,
    cancelSearch,
    setMatchId,
    clearOpponent,
    setTimerPause,
    clearChallenger,
    challengeResponse
};
export default connect(mapStateToProps, actions)(CustomModal);

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    }
};