import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import {
    setModalType,
    setModalVisible,
    decrementTimer,
    timeout
} from '../actionCreators';
import { mainTextColor, modalTypes } from '../constants';

class Timer extends Component {
    componentDidMount() {
        this.interval = setInterval(() => {
            this.props.decrementTimer();
            if (this.props.timer === 0 && !this.props.isPaused)
                this.timeOut();
        }, 1000);
    }

    isSolo() {
        return !this.props.opponentSocket;
    }

    roundOver() {
        this.props.setModalType(modalTypes.roundOver);
        this.props.setModalVisible(true);
    }

    handleDuelTimeout() {
        this.props.timeout(this.props.opponentSocket);
        if (this.props.opponentWord) return this.roundOver();
        this.props.setModalType(modalTypes.waiting);
        this.props.setModalVisible(true);
    }

    timeOut() {
        if (this.isSolo())
            return this.roundOver();
        this.handleDuelTimeout();
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return <View style={ styles.container }>
            <Text style={ styles.text }>
                { this.props.timer }
            </Text>
        </View>;
    }
}

function mapStateToProps (state) {
    return {
        timer: state.match.get('timer'),
        isPaused: state.match.get('isPaused'),
        opponentWord: state.opponent.get('word'),
        opponentSocket: state.opponent.get('socket')
    };
}

const actions = {
    setModalType,
    setModalVisible,
    decrementTimer,
    timeout
}
export default connect(mapStateToProps, actions)(Timer);

const styles = {
    container: {
        width: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent'
    },
    text: {
        fontFamily: 'roboto-light',
        fontSize: 30,
        textAlign: 'center',
        color: mainTextColor
    }
};