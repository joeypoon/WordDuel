import React, {Component} from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';

import Battle from './Battle';
import Menu from './Menu';

export class Main extends Component {
    renderContent() {
        switch (this.props.route) {
            case 'Battle':
                return <Battle />;
            default:
                return <Menu />;
        }
    }

    render() {
        return (
            <View style={styles.container}>
                {this.renderContent()}
            </View>
        );
    }
}

function mapStateToProps (state) {
    return {
        route: state.get('route')
    };
}

export default connect(mapStateToProps)(Main);

const styles = {
    container: {
        flex: 1
    }
};