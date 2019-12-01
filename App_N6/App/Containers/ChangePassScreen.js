import React, { Component } from 'react';
import ChangePassBody from '../Components/ChangePassBody'
export default class ChangePassScreen extends Component {

    render() {
        return (
                <ChangePassBody {...this.props} />
        );
    }
}