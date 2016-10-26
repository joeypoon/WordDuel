import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import {
    setModalType,
    setModalVisible,
    decrementTimer,
    submitWord
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
        this.props.setModalType(modalTypes.submittingWord);
        this.props.setModalVisible(true);
        this.props.submitWord(this.props.opponentSocket, '');
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