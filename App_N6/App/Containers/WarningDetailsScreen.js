//Thông tin chi tiết của cảnh báo
import React, { Component } from 'react';
import {View} from 'react-native';
import WarningDetailsBody from '../Components/WarningDetailsBody';
class WarningDetailsScreen extends Component {

    render() {
        return (
                <WarningDetailsBody {...this.props}/>
        );
    }
}
export default WarningDetailsScreen;