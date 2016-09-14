import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import Swiper from 'react-native-swiper';

class WordDisplay extends Component {
    handleMomentumScrollEnd(e, state, context) {
        console.log(state, context.state);
        state.index = 1;
    }

    render() {
        return (
            <View style={ styles.container }>
                <Swiper showsButtons={ true }
                    onMomentumScrollEnd={ this.handleMomentumScrollEnd.bind(this) }
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
        word: state.wordDisplay
    };
}

export default connect(mapStateToProps)(WordDisplay);

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