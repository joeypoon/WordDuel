import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { connect } from 'react-redux';
import { LoginButton } from 'react-native-fbsdk';
import { socket } from '../socket';

import Button from './Button';
import {
    setRoute,
    clearPlayer,
    setModalVisible,
    setModalType,
    searchOpponent,
    requestLetterGrid
} from '../action_creators';
import { requestData, logEvent } from '../utils/facebookUtils';
import { mainColor, mainTextColor, modalTypes } from '../constants';
import { requestAd } from '../utils/adMobUtils';

const menuItems = ['Solo', 'Duel'];

class Menu extends Component {
    pleaseLogin() {
        this.props.setModalType(modalTypes.pleaseLogin);
        this.props.setModalVisible(true);
    }

    noConnection() {
        this.props.setModalType(modalTypes.noConnection);
        this.props.setModalVisible(true);
    }

    handleLogin(error, result) {
        if (error) {
            logEvent('error', null, result.error)
        } else {
            requestData();
        }
    }

    handleLogout(error, result) {
        if (error) {
            logEvent('error', null, result.error)
        } else {
            this.props.clearPlayer();
        }
    }

    handleSoloRoute() {
        if (!socket.connected) return this.noConnection();
        this.props.requestLetterGrid();
    }

    handleDuelRoute() {
        if (!socket.connected) return this.noConnection();
        if (!this.props.facebookId) return this.pleaseLogin();
        this.props.setModalType(modalTypes.searching);
        this.props.setModalVisible(true);
        this.props.searchOpponent(this.props.facebookId);
    }

    renderPlayer() {
        if (this.props.playerName && this.props.playerImage)
            return <View style={ styles.playerInfo }>
                <Image source={{ uri: this.props.playerImage }} style={ styles.image } />
                <Text style={ styles.text }>Hey { this.props.playerName }</Text>
            </View>;
    }

    renderButtons() {
        return menuItems.map((route, index) => {
            if (route === 'Duel')
                return <Button
                    text={ route }
                    key={ index }
                    action={ this.handleDuelRoute.bind(this) }
                    styles={ styles.buttonStyles } />;
            return <Button
                text={ route }
                key={ index }
                action={ this.handleSoloRoute.bind(this) }
                styles={ styles.buttonStyles } />;
        });
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
        playerName: state.player.get('name'),
        playerImage: state.player.get('image'),
        facebookId: state.player.get('facebookId')
    };
}

const actions = {
    setRoute,
    clearPlayer,
    setModalVisible,
    setModalType,
    searchOpponent,
    requestLetterGrid
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