//Danh sách cảnh báo theo 1 chuyên mục
import React, { Component } from 'react';
import {View} from 'react-native';
import CategoriesBody from '../Components/CategoriesBody';
class CategoriesScreen extends Component {

    render() {
        return (
                <CategoriesBody {...this.props}/>
        );
    }
}

export default CategoriesScreen;