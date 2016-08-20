import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';

import Button from './Button';

const menuItems = ['Battle'];

export default class Menu extends Component {
    renderButtons() {
        return menuItems.map((item, index) => {
            return <Button text={item} key={index} />;
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    }
});