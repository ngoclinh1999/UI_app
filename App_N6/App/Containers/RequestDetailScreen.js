import React, { Component } from 'react'
import RequestDetailBody from '../Components/RequestDetailBody'


export default class RequestDetailScreen extends Component {
  render() {
    return (
        <RequestDetailBody {...this.props} />
    )
  }
}

