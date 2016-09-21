import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { LoginButton } from 'react-native-fbsdk';

import Button from './Button';
import { setRoute } from '../action_creators';

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

    handleLoginFinished(error, result) {
        if (error) {
            alert("Login failed with error: " + result.error);
        } else if (result.isCancelled) {
            alert("Login was cancelled");
        } else {
            alert("Login was successful with permissions: " + result.grantedPermissions);
        }
    }

    renderLoginButton() {
        if (!this.props.playerId)
            return <View style={{ margin: 10 }}>
                <LoginButton
                    publishPermissions={ ["publish_actions"] }
                    onLoginFinished={ this.handleLoginFinished.bind(this) }
                    onLogoutFinished={ () => alert("User logged out") } />
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
        playerId: state.players.get('playerId')
    };
}

export default connect(null, { setRoute })(Menu);

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