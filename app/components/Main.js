import React, { Component } from 'react';
import { View, Modal, Text } from 'react-native';
import { connect } from 'react-redux';

import Battle from './Battle';
import Menu from './Menu';
import CustomModal from './CustomModal';

export class Main extends Component {
    renderContent() {
        switch (this.props.route) {
            case 'Single':
                return <Battle players={ 1 } />;
            case 'Duel':
                return <Battle players={ 2 } />;
            default:
                return <Menu />;
        }
    }

    render() {
        return (
            <View style={ styles.container }>
                <CustomModal />
                { this.renderContent() }
            </View>
        );
    }
}

function mapStateToProps (state) {
    return {
        route: state.route
    };
}

export default connect(mapStateToProps)(Main);

const styles = {
    container: {
        paddingTop: 25,
        flex: 1
    }
};