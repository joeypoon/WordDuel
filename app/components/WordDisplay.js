import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import Swiper from 'react-native-swiper';

import {
    mainColor,
    secondaryColor,
    modalTypes
} from '../constants';

import {
    submitWord,
    resetActiveGrid,
    setModalType,
    setModalVisible,
    clearWord
} from '../actionCreators';

class WordDisplay extends Component {
    isValidSubmit() {
        return this.props.timer > 0 && this.props.word.length > 1;
    }

    handleMomentumScrollEnd(e, state, context) {
        if (state.index === 2) {
            this.handleClear();
        } else if (state.index === 0) {
            this.handleSubmit();
        }
    }

    handleClear() {
        this._swiper.scrollBy(-1);
        this.props.clearWord();
        this.props.resetActiveGrid();
    }

    handleSubmit() {
        this._swiper.scrollBy(1);
        if (this.isValidSubmit()) {
            this.props.setModalType(modalTypes.submittingWord);
            this.props.setModalVisible(true);
            this.props.submitWord(this.props.opponentSocket, this.props.word);
        }
    }

    render() {
        return (
            <View style={ styles.container }>
                <Swiper showsButtons={ true }
                    onMomentumScrollEnd={ this.handleMomentumScrollEnd.bind(this) }
                    showsPagination={ false }
                    ref={ (swiper) => { this._swiper = swiper; } }
                    index={ 1 }>
                    <View style={ [styles.textContainer, styles.submitContainer] }>
                        <Text style={ [styles.text, styles.whiteFont] }>
                            submit
                        </Text>
                    </View>
                    <View style={ styles.textContainer }>
                        <Text style={ styles.text }>
                            { this.props.word }
                        </Text>
                    </View>
                    <View style={ [styles.textContainer, styles.clearContainer] }>
                        <Text style={ [styles.text, styles.whiteFont] }>
                            clear
                        </Text>
                    </View>
                </Swiper>
            </View>
        );
    }
}

function mapStateToProps (state) {
    return {
        word: state.player.get('word'),
        timer: state.match.get('timer'),
        opponentSocket: state.opponent.get('socket')
    };
}

const actions = {
    submitWord,
    resetActiveGrid,
    setModalType,
    setModalVisible,
    clearWord
};
export default connect(mapStateToProps, actions)(WordDisplay);

const styles = {
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    clearContainer: {
        backgroundColor: secondaryColor
    },
    submitContainer: {
        backgroundColor: mainColor
    },
    text: {
        fontSize: 30,
        fontFamily: 'roboto-light',
        letterSpacing: -1,
        textAlign: 'center'
    },
    whiteFont: {
        color: 'white'
    }
};