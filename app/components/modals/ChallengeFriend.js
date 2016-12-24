import React, { Component } from 'react';
import { View, Text, ListView } from 'react-native';
import { connect } from 'react-redux';

import Button from '../Button';
import { ChallengeFriendRow } from './index';

import { setModalVisible } from '../../actionCreators';
import { mainColor, mainTextColor } from '../../constants';

const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
// const fakeFriends = [{ name: 'foo', id: 1 }, { name: 'bar', id: 2 }]

class ChallengeFriendBase extends Component {
    handleCancel() {
        this.props.setModalVisible(false);
    }

    handlePress(id) {
        console.log(id);
    }

    renderRow(row) {
        return <Text
            style={ [ styles.row, styles.text ] }
            onPress={ this.handlePress.bind(this, row.id) }>
            { row.first_name }
        </Text>;
    }

    render() {
        return <View style={ styles.container }>
            <ListView
                dataSource={ ds.cloneWithRows(this.props.friends) }
                renderRow={ this.renderRow.bind(this) } />
            <Button styles={ styles.buttonStyles }
                action={ this.handleCancel.bind(this) }
                text={ 'Cancel' } />
        </View>;
    }
}

function mapStateToProps(state) {
    return {
        friends: state.player.get('friends')
    };
}

const actions = { setModalVisible };
export const ChallengeFriend = connect(mapStateToProps, actions)(ChallengeFriendBase);


const styles = {
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 25
    },
    text: {
        fontFamily: 'roboto-light',
        fontSize: 25,
        margin: 5,
        color: mainTextColor
    },
    row: {
        height: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonStyles: {
        container: {
            backgroundColor: mainColor,
            padding: 10,
            margin: 10,
            alignItems: 'center',
            width: 175
        },
        text: {
            fontFamily: 'roboto-light',
            fontSize: 20,
            color: 'white',
            letterSpacing: 2
        }
    }
}