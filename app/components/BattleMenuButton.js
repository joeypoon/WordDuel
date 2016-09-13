import React, { Component } from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { connect } from 'react-redux';

import { setModalVisible, setModalType } from '../action_creators';

class BattleMenuButton extends Component {
    openMenu() {
        this.props.setModalVisible(true);
        this.props.setModalType('battleMenu');
    }

    render() {
        return <TouchableOpacity style={ styles.container }
            onPress={ this.openMenu.bind(this) }>
            <Image source={ require('./menu.png') }
                style={ styles.image } />
        </TouchableOpacity>
    }
}

export default connect(null, { setModalVisible, setModalType })(BattleMenuButton);

const styles = {
    container: {
        flex: 1,
        alignItems: 'flex-end',
        marginRight: 10
    },
    image: {
        height: 30,
        width: 30
    }
}