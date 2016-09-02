import React, {Component} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {connect} from 'react-redux';

import {setRoute} from '../action_creators';

class Button extends Component {
    handlePress() {
        this.props.setRoute(this.props.route);
    }

    render() {
        return (
            <TouchableOpacity onPress={this.handlePress.bind(this)} style={this.props.styles.container}>
                <Text style={this.props.styles.text}>
                    {this.props.route}
                </Text>
            </TouchableOpacity>
        );
    }
}

export default connect(null, {setRoute})(Button);