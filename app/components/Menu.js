import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { LoginButton } from 'react-native-fbsdk';

import Button from './Button';
import { setRoute } from '../action_creators';

const menuItems = ['Solo', 'Duel', 'Logout'];

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

    render() {
        return (
            <View style={ styles.container }>
                <LoginButton
                  publishPermissions={["publish_actions"]}
                  onLoginFinished={
                    (error, result) => {
                      if (error) {
                        alert("Login failed with error: " + result.error);
                      } else if (result.isCancelled) {
                        alert("Login was cancelled");
                      } else {
                        alert("Login was successful with permissions: " + result.grantedPermissions)
                      }
                    }
                  }
                  onLogoutFinished={() => alert("User logged out")}/>
                <View style={ styles.buttonContainer }>
                    { this.renderButtons() }
                </View>
            </View>
        );
    }
}

export default connect(null, { setRoute })(Menu);

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    titleContainer: {
        flex: 2,
        justifyContent: 'center'
    },
    title: {
        fontSize: 40,
        letterSpacing: 2
    },
    buttonContainer: {
        flex: 3,
        justifyContent: 'flex-start'
    },
    buttonStyles: {
        container: {
            backgroundColor: '#16a085',
            padding: 10,
            margin: 10,
            width: 175,
            alignItems: 'center'
        },
        text: {
            fontSize: 25,
            color: 'white',
            letterSpacing: 1
        }
    }
};