import React, { Component } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';

import Button from '../Button';
import { mainColor, mainTextColor } from '../../constants';
import { setTimerPause } from '../../actionCreators';

class BasicModal extends Component {
    constructor(props) {
        super(props);
        props.setTimerPause(true);
    }

    renderLoading() {
        if (this.props.hasLoading)
            return <ActivityIndicator
                animating={ true }
                size={ 'large' }
                color={ mainColor } />
    }

    renderButton() {
        if (this.props.hasButton)
            return <Button styles={ styles.buttonStyles }
                action={ this.props.buttonAction.bind(this) }
                text={ this.props.buttonText } />
    }

    render() {
        return <View style={ styles.container }>
            { this.renderLoading() }
            <Text style={ styles.text }>
                { this.props.text }
            </Text>
            { this.renderButton() }
        </View>;
    }
}

const actions = [ setTimerPause ];
export default connect(null, actions)(BasicModal);

const styles = {
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 25
    },
    text: {
        fontFamily: 'roboto-light',
        fontSize: 25,
        margin: 5,
        color: mainTextColor
    },
    buttonStyles: {
        container: {
            backgroundColor: mainColor,
            padding: 10,
            margin: 10,
            alignItems: 'center',
            width: 175
        },
        text: {
            fontFamily: 'roboto-light',
            fontSize: 20,
            color: 'white',
            letterSpacing: 2
        }
    }
}