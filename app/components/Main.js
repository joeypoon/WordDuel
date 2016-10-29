import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import Battle from './Battle';
import Menu from './Menu';
import CustomModal from './CustomModal';
import { mainTextColor } from '../constants';

export class Main extends Component {
    renderContent() {
        switch (this.props.route) {
            case 'Battle':
                return <Battle />;
            default:
                return <Menu />;
        }
    }

    renderTitle() {
        if (this.props.route === 'Menu')
            return <View style={ styles.titleContainer }>
                <Text style={ styles.title }>
                    Word Dual
                </Text>
            </View>;
    }

    render() {
        return (
            <View style={ styles.container }>
                { this.renderTitle() }
                <View style={ styles.content }>
                    { this.renderContent() }
                </View>
                <CustomModal />
            </View>
        );
    }
}

function mapStateToProps (state) {
    return {
        route: state.game.get('route')
    };
}

export default connect(mapStateToProps)(Main);

const styles = {
    container: {
        paddingTop: 25,
        flex: 1
    },
    titleContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontFamily: 'roboto',
        fontSize: 48,
        color: mainTextColor,
        letterSpacing: -3
    },
    content: {
        flex: 2
    }
};