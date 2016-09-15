import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import Button from '../Button';
import { setModalVisible } from '../../action_creators';

class Searching extends Component {
    handleCancel() {
        // TODO cancel request
        this.props.setModalVisible(false);
    }

    render() {
        return <View style={ styles.container }>
            <Text style={ styles.text }>
                Searching...
            </Text>
            <Button styles={ styles.buttonStyles }
                action={ this.handleCancel.bind(this) }
                text={ 'Cancel' } />
        </View>;
    }
}

export default connect(null, { setModalVisible })(Searching);

const styles = {
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 25
    },
    text: {
        fontSize: 25,
        margin: 5
    },
    buttonStyles: {
        container: {
            backgroundColor: '#16a085',
            padding: 10,
            margin: 10,
            alignItems: 'center',
            width: 175
        },
        text: {
            fontSize: 20,
            color: 'white',
            letterSpacing: 2
        }
    }
}