//Trang chủ phần cảnh báo
import React, { Component } from 'react'
import {View} from 'react-native'
import HomeWarningBody from '../Components/HomeWarningBody'
class HomeWarningScreen extends Component {

    render() {
        return (
            <View>
                <HomeWarningBody {...this.props}/>
            </View>
        )
    }
}

export default HomeWarningScreen;