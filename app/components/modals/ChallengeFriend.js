import React, { Component } from 'react';
import {
    View,
    Text,
    ListView,
    Image,
    TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import { ShareDialog } from 'react-native-fbsdk';

import Button from '../Button';

import {
    setModalVisible,
    challengeFriend,
    setModalType,
    setChallenger
} from '../../actionCreators';
import {
    mainColor,
    mainTextColor,
    modalTypes
} from '../../constants';
import { logEvent } from '../../utils';

const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
const shareLinkContent = {
    contentType: 'link',
    contentUrl: "http://word-dual.kaijudev.com",
    contentDescription: 'Play Word Dual with me!',
};

class ChallengeFriendBase extends Component {
    handleCancel() {
        this.props.setModalVisible(false);
    }

    handleChallenge(friend) {
        const player = {
            name: this.props.playerName,
            image: this.props.playerImage
        };
        this.props.challengeFriend(friend.facebookId, player);
        this.props.setChallenger(friend);
        this.props.setModalType(modalTypes.waitingForChallenge);
    }

    shareLinkWithShareDialog() {
        this.props.setModalVisible(false);
        ShareDialog.canShow(shareLinkContent)
            .then(canShow => {
                if (canShow) return ShareDialog.show(shareLinkContent);
            }).then(result => {
                if (result.isCancelled) {
                    logEvent('shareCancelled', null);
                } else {
                    logEvent('shareSuccess', null);
                }
            }, (error) => {
                logEvent('shareError', null, error);
            });
    }

    renderInviteButton() {
        return <Button text='Invite'
            action={ this.shareLinkWithShareDialog.bind(this) }
            styles={ styles.inviteButton } />;
    }

    renderRow(friend) {
        return <TouchableOpacity
            onPress={ this.handleChallenge.bind(this, friend) }>
            <View style={ styles.row }>
                <Image source={{ uri: friend.image }} style={ styles.image } />
                <Text style={ styles.text }>{ friend.name }</Text>
            </View>
        </TouchableOpacity>;
    }

    renderNoFriends() {
        return <View style={ styles.container }>
            <Text style={ styles.text }>
                No friends are available to challenge at this time.
                Invite more friends to play?
            </Text>
            { this.renderInviteButton() }
            { this.renderCancelButton() }
        </View>
    }

    renderCancelButton() {
        return <Button styles={ styles.buttonStyles }
            action={ this.handleCancel.bind(this) }
            text={ 'Cancel' } />
    }

    render() {
        if (!this.props.friends.length) return this.renderNoFriends();
        return <View style={ styles.container }>
            <ListView
                style={ styles.list }
                dataSource={ ds.cloneWithRows(this.props.friends) }
                renderRow={ this.renderRow.bind(this) }
                showsVerticalScrollIndicator={ false } />
            { this.renderCancelButton() }
        </View>;
    }
}

function mapStateToProps(state) {
    return {
        friends: state.player.get('friends'),
        playerName: state.player.get('name'),
        playerImage: state.player.get('image')
    };
}

const actions = {
    setModalVisible,
    challengeFriend,
    setModalType,
    setChallenger
};
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
        color: mainTextColor,
        textAlign: 'center'
    },
    list: {
        maxHeight: 200,
        width: 175
    },
    row: {
        flex: 1,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    buttonStyles: {
        container: {
            backgroundColor: mainColor,
            padding: 7,
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
    },
    image: {
        height: 40,
        width: 40,
        borderRadius: 20,
        marginRight: 5
    },
    inviteButton: {
        container: {
            backgroundColor: 'rgb(67, 95, 172)',
            padding: 7,
            margin: 10,
            width: 175,
            alignItems: 'center'
        },
        text: {
            fontSize: 20,
            color: 'white',
            letterSpacing: 1,
            fontFamily: 'roboto-light'
        }
    }
}