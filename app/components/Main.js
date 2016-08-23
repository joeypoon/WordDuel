import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';

import Battle from './Battle';
import Menu from './Menu';

const route = 'Battle';

export default class Main extends Component {
    renderContent() {
        switch (route) {
            case 'Battle':
                return <Battle />;
            default:
                return <Menu />;
        }
    }

    render() {
        return (
            <View style={styles.container}>
                {this.renderContent()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});