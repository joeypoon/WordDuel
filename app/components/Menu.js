import React, {Component} from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';

import MenuButton from './MenuButton';

const menuItems = ['Battle'];

export default class Menu extends Component {
    renderButtons() {
        return menuItems.map((route, index) => {
            return <MenuButton
                route={route}
                key={index} />;
        });
    }

    render() {
        return (
            <View style={styles.container}>
                {this.renderButtons()}
            </View>
        );
    }
}

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
};