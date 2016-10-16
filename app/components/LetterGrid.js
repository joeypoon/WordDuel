import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import LetterRow from './LetterRow';

class LetterGrid extends Component {
    renderRows() {
        return this.props.grid.map((row, index) => {
            return <LetterRow key={ index }
            row={ row }
            activeGrid={ this.props.activeGrid } />
        });
    }

    render() {
        return <View>{ this.renderRows() }</View>;
    }
}

function mapStateToProps(state) {
    return {
        grid: state.letterGrid,
        activeGrid: state.activeGrid
    };
}

export default connect(mapStateToProps)(LetterGrid);
