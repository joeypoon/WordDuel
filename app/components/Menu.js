import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { LoginButton, AccessToken } from 'react-native-fbsdk';

import Button from './Button';
import { setRoute, setFBToken } from '../action_creators';

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
            alert("Login failed with error: " + result.error);
        } else {
            AccessToken.getCurrentAccessToken()
                .then(data => {
                    this.props.setFBToken(data.accessToken.toString());
                    console.log(this.props.fbToken);
                });
        }
    }

    handleLogout() {
        this.props.setFBToken(null);
        console.log(this.props.fbToken);
    }

    renderLoginButton() {
        return <View style={{ margin: 10 }}>
            <LoginButton
                publishPermissions={ ["publish_actions"] }
                onLoginFinished={ this.handleLogin.bind(this) }
                onLogoutFinished={ this.handleLogout.bind(this) } />
        </View>;
    }

    render() {
        return (
            <View style={ styles.container }>
                <View style={ styles.buttonContainer }>
                    { this.renderButtons() }
                    { this.renderLoginButton() }
                </View>
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        fbToken: state.players.get('fbToken')
    };
}

export default connect(mapStateToProps, { setRoute, setFBToken })(Menu);

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonContainer: {
        flex: 3,
        justifyContent: 'flex-start'
    },
    buttonStyles: {
        container: {
            backgroundColor: '#16a085',
            padding: 7,
            margin: 10,
            width: 180,
            alignItems: 'center'
        },
        text: {
            fontSize: 15,
            color: 'white',
            letterSpacing: 1
        }
    }
};