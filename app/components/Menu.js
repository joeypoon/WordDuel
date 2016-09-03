import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import Button from './Button';
import { setRoute } from '../action_creators';

const menuItems = ['Single', 'Duel'];

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
                { this.renderButtons() }
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
    buttonStyles: {
        container: {
            backgroundColor: '#16a085',
            borderRadius: 5,
            paddingTop: 10,
            paddingBottom: 10,
            paddingLeft: 30,
            paddingRight: 30,
            margin: 10,
            width: 175,
            alignItems: 'center'
        },
        text: {
            fontSize: 30,
            color: 'white',
            letterSpacing: 2
        }
    }
};