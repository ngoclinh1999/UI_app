import React, { Component } from 'react';
import {View} from 'react-native';
import {Icon} from 'react-native-elements'
import HomeWarningBody from './HomeWarningBody'
import HomeCategoriesBody from './HomeCategoriesBody'
import ScrollableTabView,{ScrollableTabBar} from 'react-native-scrollable-tab-view'
import HouseWarningTabBar from './HouseWarningTabBar'
class HouseWarning extends Component {

    render() {
        this.admin = this.props.navigation.getParam('admin', 'No')
        console.log(this.admin)
        return (
            <View style = {{flex:1}}>
                <ScrollableTabView
                    tabBarPosition = 'bottom'
                    tabBarTextStyle = {{fontSize: 20}}
                    initialPage={0}
                    renderTabBar={() => <HouseWarningTabBar />}
                >
                    <HomeWarningBody tabLabel="warning" admin = {this.admin} {...this.props}/>
                    <HomeCategoriesBody tabLabel="list" admin = {this.admin} {...this.props}/>
                </ScrollableTabView>
            </View>
        );
    }
}

export default HouseWarning;