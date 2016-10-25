import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { connect } from 'react-redux';

import Button from '../Button';
import {
    setModalType,
    setRoute,
    setReady
} from '../../actionCreators';
import {
    mainColor,
    mainTextColor,
    timeOut,
    modalTypes
} from '../../constants';

class OpponentFound extends Component {
    componentDidMount() {
        this.timeout = setTimeout(this.handleReady.bind(this), timeOut);
    }

    componentWillUnmount() {
        clearTimeout(this.timeout);
    }

    handleReady() {
        const { matchId } = this.props;
        this.props.setModalType(modalTypes.waiting);
        this.props.setReady(matchId);
        this.props.setRoute('Duel');
    }

    render() {
        const source = this.props.opponentImage ?
            { uri: this.props.opponentImage } : require('../puppy.png');
        return <View style={ styles.container }>
            <Text style={ styles.text }>
                { this.props.opponentName }
            </Text>
            <Image source={ source }
                style={ styles.image } />
            <Button styles={ styles.buttonStyles }
                action={ this.handleReady.bind(this) }
                text={ 'Ready' } />
        </View>;
    }
}

function mapStateToProps (state) {
    return {
        opponentName: state.opponent.get('name'),
        opponentImage: state.opponent.get('image'),
        matchId: state.match.get('id')
    };
}

const actions = { setModalType, setRoute, setReady };
export default connect(mapStateToProps, actions)(OpponentFound);

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
    image: {
        width: 50,
        height: 50,
        borderRadius: 25,
        margin: 5
    },
    buttonStyles: {
        container: {
            backgroundColor: mainColor,
            padding: 10,
            margin: 10,
            alignItems: 'center',
            width: 175,
            marginTop: 20
        },
        text: {
            fontFamily: 'roboto-light',
            fontSize: 20,
            color: 'white',
            letterSpacing: 2
        }
    }
}