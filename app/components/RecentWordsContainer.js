import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import RecentWords from './RecentWords';

class RecentWordsContainer extends Component {
    renderRecentWords() {
        if (this.props.players === 1) {
            return <RecentWords words={this.props.userWords} />;
        } else if (this.props.players === 2) {
            return <View style={styles.container}>
                <RecentWords words={this.props.userWords} />
                <RecentWords words={this.props.opponentWords} />
            </View>
        }
    }

    render() {
        return <View style={styles.container}>
            {this.renderRecentWords()}
        </View>;
    }
}

function mapStateToProps (state) {
    return {
        userWords: state.recentWords,
        opponentWords: state.opponentWords
    };
}

export default connect(mapStateToProps)(RecentWordsContainer);

const styles = {
    container: {
        flex: 1,
        flexDirection: 'row'
    }
};