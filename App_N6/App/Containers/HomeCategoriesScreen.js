//Danh sách các chuyên mục
import React, { Component } from 'react'
import {View} from 'react-native'
import HomeCategoriesBody from '../Components/HomeCategoriesBody'
class HomeCategoriesScreen extends Component {

    render() {
        return (
            <View>
                <HomeCategoriesBody {...this.props}/>
            </View>
        )
    }
}

export default HomeCategoriesScreen;