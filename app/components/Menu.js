import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { LoginButton, ShareDialog } from 'react-native-fbsdk';
import { socket } from '../socket';

import Button from './Button';
import {
    setRoute,
    logout,
    setModalVisible,
    setModalType,
    searchOpponent,
    newRound,
    setTimerPause,
    clearChallenger
} from '../actionCreators';
import {
    requestData,
    logEvent,
    requestFriends
} from '../utils';
import { mainColor, mainTextColor, modalTypes } from '../constants';

const menuItems = ['Solo', 'Dual'];

class Menu extends Component {
    componentWillUnmount() {
        this.props.clearChallenger();
    }

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
            this.props.logout();
            this.props.clearChallenger();
        }
    }

    handleSoloRoute() {
        if (!socket.connected) return this.noConnection();
        this.props.setRoute('Battle');
        this.props.newRound();
        this.props.setTimerPause(false);
    }

    handleDuelRoute() {
        if (!socket.connected) return this.noConnection();
        if (!this.props.facebookId) return this.pleaseLogin();
        this.props.setModalType(modalTypes.searching);
        this.props.setModalVisible(true);
        this.props.searchOpponent(this.props.facebookId);
    }

    handleChallengerPress() {
        this.props.setModalType(modalTypes.showChallenger);
        this.props.setModalVisible(true);
    }

    renderPlayer() {
        if (this.props.playerName && this.props.playerImage)
            return <View style={ styles.playerInfo }>
                <Image source={{ uri: this.props.playerImage }} style={ styles.image } />
                <Text style={ [ styles.text, styles.playerName ] }>Hey { this.props.playerName }</Text>
                <Text style={ [ styles.text, styles.level] }>Lv.{ this.props.playerLevel }</Text>
            </View>;
    }

    renderButtons() {
        return menuItems.map((route, index) => {
            if (route === 'Dual')
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
                readPermissions={ [ "user_friends" ] }
                onLoginFinished={ this.handleLogin.bind(this) }
                onLogoutFinished={ this.handleLogout.bind(this) } />
        </View>;
    }

    renderChallengeButton() {
        if (this.props.facebookId)
            return <Button text='Challenge'
                action={ requestFriends }
                styles={ styles.shareButton } />;
    }

    renderChallenger() {
        if (this.props.showChallenger)
            return <View style={ styles.challengeContainer }>
                <TouchableOpacity style={ styles.challengeButtonContainer }
                    onPress={ this.handleChallengerPress.bind(this) }>
                    <Text style={ styles.text }>New Challenger</Text>
                    <View style={ styles.challengerContainer }>
                        <Image source={{ uri: this.props.challengerImage }} style={ styles.challengerImage } />
                        <Text style={ styles.text }>
                            { this.props.challengerName.substring(0, 10) }
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>;
    }

    render() {
        return (
            <View style={ styles.container }>
                { this.renderPlayer() }
                <View style={ styles.buttonContainer }>
                    { this.renderButtons() }
                    { this.renderChallengeButton() }
                    { this.renderLoginButton() }
                    { this.renderChallenger() }
                </View>
            </View>
        );
    }
}

function mapStateToProps (state) {
    return {
        playerName: state.player.get('name'),
        playerImage: state.player.get('image'),
        playerLevel: state.player.get('level'),
        facebookId: state.player.get('facebookId'),
        showChallenger: state.challenge.get('shouldShow'),
        challengerName: state.challenge.get('name'),
        challengerImage: state.challenge.get('image')
    };
}

const actions = {
    setRoute,
    logout,
    setModalVisible,
    setModalType,
    searchOpponent,
    newRound,
    setTimerPause,
    clearChallenger
}
export default connect(mapStateToProps, actions)(Menu);

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    fbLoginContainer: {
        margin: 10,
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
        fontFamily: 'roboto-light',
        letterSpacing: -1,
        color: mainTextColor,
        backgroundColor: 'transparent'
    },
    level: {
        margin: 0,
        padding: 0,
        marginBottom: 10
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
    },
    shareButton: {
        container: {
            backgroundColor: 'rgb(67, 95, 172)',
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
    },
    playerName: {
        marginBottom: 0
    },
    challengeContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    challengeButtonContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center'
    },
    challengerContainer: {
        flexDirection: 'row',
        marginTop: -7,
        marginBottom: 10
    },
    challengerImage: {
        height: 40,
        width: 40,
        borderRadius: 20
    }
};