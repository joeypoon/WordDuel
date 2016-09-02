import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';

class RecentWords extends Component {
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

function mapStateToProps (state) {
    return {
        words: state.recentWords
    };
}

export default connect(mapStateToProps)(RecentWords);

const styles = {
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 30
    }
}