import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import {
    setModalType,
    setModalVisible,
    decrementTimer,
    timeout,
    setPlayer
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

    timeOut() {
        this.props.timeout(this.props.opponentSocket);
        if (this.props.opponentWord) {
            this.props.setModalType(modalTypes.roundOver);
            this.props.setModalVisible(true);
            return;
        }
        this.props.setModalType(modalTypes.waiting);
        this.props.setModalVisible(true);
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
    submitWord
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