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

    render() {
        return (
            <View style={ styles.container }>
                { this.renderContent() }
                <CustomModal />
            </View>
        );
    }
}

function mapStateToProps (state) {
    return {
        route: state.game.get('route'),
        facebookId: state.player.get('facebookId')
    };
}

export default connect(mapStateToProps)(Main);

const styles = {
    container: {
        flex: 1
    }
};