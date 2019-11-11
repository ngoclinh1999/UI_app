import React, { Component } from 'react'
import { View } from 'react-native'
import CreateRequestBody from '../Components/CreateRequestBody'

export default class CreateRequestScreen extends Component {
    render() {
        return(
            <View>
                <CreateRequestBody {...this.props} />
            </View>
        )
    }
}