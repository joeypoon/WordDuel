import React, {Component} from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {connect} from 'react-redux';

import {setRoute} from '../action_creators';

class Button extends Component {
    handlePress() {
        this.props.setRoute(this.props.route);
    }

    render() {
        return (
            <TouchableOpacity style={styles.container}
                onPress={this.handlePress.bind(this)}>
                <Text style={styles.text}>
                    {this.props.route}
                </Text>
            </TouchableOpacity>
        );
    }
}

export default connect(null, {setRoute})(Button);

const styles = {
    container: {
        backgroundColor: '#f39c12',
        borderRadius: 5,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 30,
        paddingRight: 30,
        margin: 10
    },
    text: {
        fontSize: 30,
        color: 'white'
    }
};