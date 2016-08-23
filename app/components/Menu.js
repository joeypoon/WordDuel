import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {connect} from 'react-redux';

import {setRoute} from '../action_creators';
import Button from './Button';

const menuItems = ['Battle'];

export class Menu extends Component {
    renderButtons() {
        return menuItems.map((item, index) => {
            return <Button text={item}
                key={index}
                styles={buttonStyles}
                action={this.props.setRoute} />;
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

export default connect(null, {setRoute})(Menu);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

const buttonStyles = {
    container: {
        backgroundColor: '#f39c12',
        borderRadius: 5,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 30,
        paddingRight: 30,
        margin: 10
    },
    text: {
        fontSize: 30,
        color: 'white'
    }
};