import React, { Component } from 'react';
import {
    View,
    TextInput,
    TouchableOpacity,
    Text,
    Dimensions
} from 'react-native';
import { connect } from 'react-redux';

import { setRoute } from '../action_creators';

class Login extends Component {
    render() {
        return <View style={ styles.container }>
            <Text>Facebook</Text>
            <View style={ styles.inputContainer }>
                <TextInput placeholder='email' style={ styles.input } />
            </View>
            <View style={ styles.inputContainer }>
                <TextInput placeholder='password'
                    secureTextEntry={ true }
                    style={ styles.input } />
            </View>
            <TouchableOpacity style={ styles.button }
                onPress={ this.props.setRoute.bind(this, 'Menu') }>
                <Text style={ styles.text }>
                    Login
                </Text>
            </TouchableOpacity>
        </View>;
    }
}

export default connect(null, { setRoute })(Login);

const styles = {
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    inputContainer: {
        height: 50,
        margin: 10,
        borderBottomWidth: 1,
        borderColor: 'lightgray',
        justifyContent: 'flex-end'
    },
    input: {
        fontSize: 25,
        width: (Dimensions.get('window').width * 0.75),
        padding: 15,
        borderBottomWidth: 1,
        alignSelf: 'center'
    },
    button: {
        backgroundColor: '#16a085',
        padding: 10,
        margin: 10,
        marginTop: 25,
        width: 150,
        alignItems: 'center'
    },
    text: {
        fontSize: 25,
        color: 'white',
        letterSpacing: 1
    }
};