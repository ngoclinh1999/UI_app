//Danh sách cảnh báo theo 1 chuyên mục
import React, { Component } from 'react';
import {View} from 'react-native';
import ChangeInfor from '../Components/ChangeInfor';
class ChangeInforScreen extends Component {

    render() {
        return (
            <View>
                <ChangeInfor {...this.props}/>
            </View>
        );
    }
}

export default ChangeInforScreen;