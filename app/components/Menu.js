import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { connect } from 'react-redux';
import { LoginButton } from 'react-native-fbsdk';

import Button from './Button';
import {
    setRoute,
    setPlayerToken,
    setPlayerName,
    setPlayerImage
} from '../action_creators';
import { requestData, logEvent, fetchToken } from '../utils/facebookUtils';
import { mainColor, mainTextColor } from './constants/colors';

const menuItems = ['Solo', 'Duel'];

class Menu extends Component {
    renderButtons() {
        return menuItems.map((route, index) => {
            return <Button
                text={ route }
                key={ index }
                action={ this.props.setRoute.bind(null, route) }
                styles={ styles.buttonStyles } />;
        });
    }

    handleLogin(error, result) {
        if (error) {
            logEvent('error', null, result.error)
        } else {
            fetchToken();
            requestData();
        }
    }

    handleLogout(error, result) {
        if (error) {
            logEvent('error', null, result.error)
        } else {
            this.props.setPlayerToken(null);
            this.props.setPlayerName(null);
            this.props.setPlayerImage(null);
        }
    }

    renderPlayer() {
        if (this.props.playerName && this.props.playerImage)
            return <View style={ styles.playerInfo }>
                <Image source={{ uri: this.props.playerImage }} style={ styles.image } />
                <Text style={ styles.text }>Hey { this.props.playerName }</Text>
            </View>;
    }

    renderLoginButton() {
        return <View style={ styles.fbLoginContainer }>
            <LoginButton
                publishPermissions={ ["publish_actions"] }
                onLoginFinished={ this.handleLogin.bind(this) }
                onLogoutFinished={ this.handleLogout.bind(this) } />
        </View>;
    }

    render() {
        return (
            <View style={ styles.container }>
                { this.renderPlayer() }
                <View style={ styles.buttonContainer }>
                    { this.renderButtons() }
                    { this.renderLoginButton() }
                </View>
            </View>
        );
    }
}

function mapStateToProps (state) {
    return {
        playerName: state.players.get('playerName'),
        playerImage: state.players.get('playerImage')
    };
}

const actions = {
    setRoute,
    setPlayerToken,
    setPlayerName,
    setPlayerImage
}
export default connect(mapStateToProps, actions)(Menu);

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    fbLoginContainer: {
        margin: 14,
        transform: [{ scale: 1.2 }],
        alignItems: 'center',
        justifyContent: 'center'
    },
    playerInfo: {
        alignItems: 'center'
    },
    image: {
        height: 80,
        width: 80,
        borderRadius: 40
    },
    text: {
        textAlign: 'center',
        margin: 10,
        fontSize: 20,
        letterSpacing: 1,
        fontFamily: 'roboto-light',
        letterSpacing: -1,
        color: mainTextColor
    },
    buttonContainer: {
        flex: 1,
        justifyContent: 'flex-start'
    },
    buttonStyles: {
        container: {
            backgroundColor: mainColor,
            padding: 7,
            margin: 10,
            width: 215,
            alignItems: 'center'
        },
        text: {
            fontSize: 20,
            color: 'white',
            letterSpacing: 1,
            fontFamily: 'roboto-light'
        }
    }
};