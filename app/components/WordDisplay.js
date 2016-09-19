import React, { Component } from 'react';
import { View, Text, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import Swiper from 'react-native-swiper';

import {
    clearWord,
    submitWord,
    resetActiveGrid,
    setModalType,
    setModalVisible,
} from '../action_creators';

class WordDisplay extends Component {
    handleMomentumScrollEnd(e, state, context) {
        if (state.index === 0) {
            this.handleClear();
        } else if (state.index === 2) {
            this.handleSubmit();
        }
    }

    handleClear() {
        this._swiper.scrollBy(1);
        this.props.clearWord();
        this.props.resetActiveGrid();
    }

    handleSubmit() {
        this._swiper.scrollBy(-1);
        if (this.props.timer > 0 && this.props.word.length > 0) {
            this.props.submitWord();
            this.props.setModalType('submittingWord');
            this.props.setModalVisible(true);
            if (this.props.players === 2) {
                setTimeout(() => this.props.setModalType('roundOverDuel'), 1000);
            } else {
                setTimeout(() => this.props.setModalType('roundOverSolo'), 1000);
            }
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
                    <View style={ [styles.textContainer, styles.clearContainer] }>
                        <Text style={ styles.text }>
                            clear
                        </Text>
                    </View>
                    <View style={ styles.textContainer }>
                        <Text style={ styles.text }>
                            { this.props.word }
                        </Text>
                    </View>
                    <View style={ [styles.textContainer, styles.submitContainer] }>
                        <Text style={ styles.text }>
                            submit
                        </Text>
                    </View>
                </Swiper>
            </View>
        );
    }
}

function mapStateToProps (state) {
    return {
        word: state.wordDisplay,
        timer: state.timer.get('time')
    };
}

const actions = {
    clearWord,
    submitWord,
    resetActiveGrid,
    setModalType,
    setModalVisible,
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
        backgroundColor: '#e74c3c'
    },
    submitContainer: {
        backgroundColor: '#27ae60'
    },
    text: {
        fontSize: 30,
        letterSpacing: 3,
        textAlign: 'center'
    }
};