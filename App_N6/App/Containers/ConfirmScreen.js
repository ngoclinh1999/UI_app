import React, { Component } from 'react';
import ConfirmBody from '../Components/ConfirmBody'
export default class ConfirmScreen extends Component {

    render() {
        return (
                <ConfirmBody {...this.props} />
        );
    }
}