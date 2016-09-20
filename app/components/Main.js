import React, { Component } from 'react';
import { View, Modal, Text } from 'react-native';
import { connect } from 'react-redux';

import Battle from './Battle';
import Menu from './Menu';
import CustomModal from './CustomModal';
import Login from './Login';
import { setRoute } from '../action_creators';

export class Main extends Component {
    // componentDidMount() {
    //     if (!this.props.playerId) {
    //         this.props.setRoute('Logout');
    //     }
    // }

    renderContent() {
        switch (this.props.route) {
            case 'Logout':
                return <Login />;
            case 'Solo':
                return <Battle players={ 1 } />;
            case 'Duel':
                return <Battle players={ 2 } />;
            default:
                return <Menu />;
        }
    }

    renderTitle() {
        if (this.props.route === 'Menu' ||
            this.props.route === 'Logout') {
            return <View style={ styles.titleContainer }>
                <Text style={ styles.title }>
                    Word Duel
                </Text>
            </View>
        }
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
        route: state.route,
        playerId: state.players.get('playerId')
    };
}

export default connect(mapStateToProps, { setRoute })(Main);

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
        fontSize: 40,
        letterSpacing: 1
    },
    content: {
        flex: 2
    }
};