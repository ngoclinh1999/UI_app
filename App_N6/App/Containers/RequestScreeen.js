import React, { Component } from 'react'
import { View } from 'react-native'
import RequestBody from '../Components/RequestBody'

export default class RequestScreen extends Component {

  render () {
    return (
        <RequestBody {...this.props} />
    )
  }
}
