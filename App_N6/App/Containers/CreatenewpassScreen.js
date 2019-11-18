import React, { Component } from 'react'
import { View } from 'react-native'
import CreateNewPassBody from '../Components/CreateNewPassBody'

export default class CreatenewpassScreen extends Component {
    render() {
        return(
                <CreateNewPassBody {...this.props} />
        )
    }
}