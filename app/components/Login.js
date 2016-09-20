import React, { Component } from 'react';
import { View } from 'react-native';
import { LoginButton } from 'react-native-fbsdk';

import { setRoute } from '../action_creators';


export default class Login extends Component {
    render() {
        return <View style={ styles.container }>
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
        </View>;
    }
}

const styles = {
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center'
    }
};