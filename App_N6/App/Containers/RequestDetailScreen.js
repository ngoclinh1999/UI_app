import React, { Component } from 'react'
import RequestDetailBody from '../Components/RequestDetailBody'
import {StatusBar, View} from 'react-native'
import CustomHeader from '../Components/CustomHeader'

export default class RequestDetailScreen extends Component {
  render() {
    return (
      <View>
        <StatusBar translucent={true} backgroundColor='transparent' />
        <CustomHeader
          title={'Chi tiết cảnh báo'}
          add={'No'}
          admin={'No'}
          send={'No'}
          {...this.props}
        />
        <RequestDetailBody {...this.props} />
      </View>
    )
  }
}

