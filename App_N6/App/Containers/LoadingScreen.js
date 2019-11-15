//Thông tin chi tiết của cảnh báo
import React, { Component } from 'react'
import LoadingBody from '../Components/LoadingBody'
class LoadingScreen extends Component {

    render() {
        return (
                <LoadingBody {...this.props}/>
        )
    }
}
export default LoadingScreen