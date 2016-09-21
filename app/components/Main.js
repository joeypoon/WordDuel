import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import Battle from './Battle';
import Menu from './Menu';
import CustomModal from './CustomModal';
import { setRoute } from '../action_creators';

export class Main extends Component {

    renderContent() {
        switch (this.props.route) {
            case 'Solo':
                return <Battle players={ 1 } />;
            case 'Duel':
                return <Battle players={ 2 } />;
            default:
                return <Menu />;
        }
    }

    renderTitle() {
        if (this.props.route === 'Menu')
            return <View style={ styles.titleContainer }>
                <Text style={ styles.title }>
                    Word Duel
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
        route: state.route
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
        fontSize: 42,
        letterSpacing: 1
    },
    content: {
        flex: 2
    }
};