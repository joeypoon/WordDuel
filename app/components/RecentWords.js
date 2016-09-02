import React, {Component} from 'react';
import {View, Text} from 'react-native';

export default class RecentWords extends Component {
    renderWords() {
        return this.props.words.map((word, index) => {
            return <Text key={index}
                style={styles.text}>
                {word}
            </Text>
        });
    }

    render() {
        return <View style={styles.container}>
            {this.renderWords()}
        </View>;
    }
}

const styles = {
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 30
    }
};