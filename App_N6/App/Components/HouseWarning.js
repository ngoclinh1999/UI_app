import React, { Component } from 'react';
import {View} from 'react-native';
import {Icon} from 'react-native-elements'
import HomeWarningBody from './HomeWarningBody'
import HomeCategoriesBody from './HomeCategoriesBody'
import ScrollableTabView,{ScrollableTabBar} from 'react-native-scrollable-tab-view'
import HouseWarningTabBar from './HouseWarningTabBar'
class HouseWarning extends Component {

    render() {
        return (
            <View style = {{flex:1}}>
                <ScrollableTabView
                    tabBarPosition = 'bottom'
                    tabBarTextStyle = {{fontSize: 20}}
                    initialPage={0}
                    renderTabBar={() => <HouseWarningTabBar />}
                >
                    <HomeWarningBody tabLabel="warning" {...this.props}/>
                    <HomeCategoriesBody tabLabel="list" {...this.props}/>
                </ScrollableTabView>
            </View>
        );
    }
}

export default HouseWarning;