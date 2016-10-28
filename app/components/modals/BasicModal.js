import React, { Component } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';

import Button from '../Button';
import { setModalType } from '../../actionCreators';
import { mainColor, mainTextColor, modalTypes } from '../../constants';

class BasicModal extends Component {
    componentDidMount() {
        if (!this.props.hasButton)
            setTimeout(() => {
                // create time out modal
                this.props.setModalType(modalTypes.playerDisconnect);
            }, 10000);
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

export default connect(null, { setModalType })(BasicModal);

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