import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import LetterRow from './LetterRow';

class LetterGrid extends Component {
    renderRows() {
        return this.props.grid.map((row, index) => {
            return <LetterRow key={ index }
                activeGrid={ this.props.activeGrid }
                row={ row } />
        });
    }

    render() {
        return <View>{ this.renderRows() }</View>;
    }
}

function mapStateToProps(state) {
    return {
        grid: state.match.get('letterGrid'),
        activeGrid: state.match.get('activeGrid')
    };
}

export default connect(mapStateToProps)(LetterGrid);
