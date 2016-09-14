import React, { Component } from 'react';
import { View, Text, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import Swiper from 'react-native-swiper';

import {
    clearWord,
    submitWord,
    resetActiveGrid,
    setPlayerScore,
    resetTimer
} from '../action_creators';

class WordDisplay extends Component {
    handleMomentumScrollEnd(e, state, context) {
        if (state.index === 0) {
            this.handleClear();
        } else if (state.index === 2) {
            this.handleSubmit();
        }
    }

    getHeight() {
        // 30 (topbar) + 30 (playerdisplay) = 60
        return Dimensions.get('window').height/2 - 60;
    }

    handleClear() {
        this._swiper.scrollBy(1);
        this.props.clearWord();
        this.props.resetActiveGrid();
    }

    handleSubmit() {
        this._swiper.scrollBy(-1);
        if (this.props.timer > 0 && this.props.word.length > 0) {
            this.props.setPlayerScore(this.props.playerScore + this.props.word.length);
            this.props.submitWord();
            this.props.resetActiveGrid();
            this.props.resetTimer();
        }
    }

    render() {
        return (
            <View style={ styles.container }>
                <Swiper showsButtons={ true }
                    onMomentumScrollEnd={ this.handleMomentumScrollEnd.bind(this) }
                    showsPagination={ false }
                    ref={ (swiper) => { this._swiper = swiper; } }
                    index={ 1 }
                    contentContainer={ styles.swiperContainer }>
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
        playerScore: state.score.get('player'),
        timer: state.timer
    };
}

const actions = {
    clearWord,
    submitWord,
    resetActiveGrid,
    setPlayerScore,
    resetTimer
};
export default connect(mapStateToProps, actions)(WordDisplay);

const styles = {
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    swiperContainer: {
        height: null,
        width: null
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