import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import {
    decrementTimer,
    resetTimer,
    setModalVisible,
    setModalType,
    validateWord
} from '../action_creators';
import { mainTextColor } from '../constants';

class Timer extends Component {
    componentDidMount() {
        this.props.resetTimer();
        this.interval = setInterval(() => {
            this.props.decrementTimer();
            if (this.props.timer === 0 && !this.props.isPaused)
                this.timeOut();
        }, 1000);
    }

    timeOut() {
        this.props.validateWord('');
        if (this.props.players === 2) {
            this.props.setModalType('roundOverDuel');
        } else {
            this.props.setModalType('roundOverSolo');
        }
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
        isPaused: state.match.get('isPaused')
    };
}

const actions = {
    decrementTimer,
    resetTimer,
    setModalVisible,
    setModalType,
    validateWord
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