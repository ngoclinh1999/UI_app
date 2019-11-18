import React, { Component } from 'react'
import { View } from 'react-native'
import MainBody from '../Components/MainBody'

export default class MainScreen extends Component {

  render () {
    return (
      <View>
        <MainBody {...this.props} />
      </View>
    )
  }
}
