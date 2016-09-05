import React, { Component } from 'react';
import { Modal, View } from 'react-native';
import { connect } from 'react-redux';

import Button from './Button';
import { setModalVisible, setRoute } from '../action_creators';

class CustomModal extends Component {
    handleQuit() {
        this.props.setModalVisible(false);
        this.props.setRoute('Menu');
    }

    renderContent() {
        if (this.props.type === 'battle') {
            return <View style={ styles.innerContainer }>
                <Button styles={ styles.buttonStyles }
                    action={ this.handleQuit.bind(this) }
                    text={ 'Quit' } />
                <Button styles={ styles.buttonStyles }
                    action={ this.props.setModalVisible.bind(null, false) }
                    text={ 'Cancel' } />
            </View>;
        }
    }

    render() {
        return <Modal visible={ this.props.visible }
            animationType={ 'fade' }
            transparent={ true }
            onRequestClose={ () => { console.log("Modal has been closed.") } }>
            <View style={ styles.container }>
                { this.renderContent() }
            </View>
        </Modal>;
    }
}

function mapStateToProps (state) {
    return {
        visible: state.modalVisible
    };
}

export default connect(mapStateToProps, { setModalVisible, setRoute })(CustomModal);

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    innerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: 'white',
        padding: 25
    },
    buttonStyles: {
        container: {
            backgroundColor: '#16a085',
            borderRadius: 5,
            paddingTop: 10,
            paddingBottom: 10,
            paddingLeft: 30,
            paddingRight: 30,
            margin: 10,
            width: 175,
            alignItems: 'center'
        },
        text: {
            fontSize: 30,
            color: 'white',
            letterSpacing: 2
        }
    }
};