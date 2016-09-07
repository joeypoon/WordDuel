import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import { decrementTimer, resetTimer } from '../action_creators';

class Timer extends Component {
    componentDidMount() {
        this.props.resetTimer();
        this.interval = setInterval(() => {
            this.props.decrementTimer();
        }, 1000);
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
        timer: state.timer
    };
}

export default connect(mapStateToProps, { decrementTimer, resetTimer })(Timer);

const styles = {
    container: {
        width: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 30,
        textAlign: 'center'
    }
};