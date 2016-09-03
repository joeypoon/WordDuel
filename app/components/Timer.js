import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import { decrementTimer } from '../action_creators';

class Timer extends Component {
    constructor(props) {
        super(props);
        this.interval = setInterval(() => {
            this.props.decrementTimer.call(this);
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

export default connect(mapStateToProps, { decrementTimer })(Timer);

const styles = {
    container: {
        flex: 1,
        width: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 30,
        textAlign: 'center'
    }
};