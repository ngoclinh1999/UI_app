// Body danh sách cảnh báo theo 1 chuyên mục
import React, { Component } from 'react'
import { View, SafeAreaView, StatusBar,BackHandler } from 'react-native'
import styles from './Styles/CategoriesBodyStyles'
import WarningList from './WarningList'
import CustomHeader from './CustomHeader'

class CategoriesBody extends Component {
  constructor(props) {
    super();
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this)
  }
  componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
  }
  componentWillUnmount() { 
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
  }
  handleBackButtonClick() {
    this.props.navigation.goBack(null)
    return true;
  }
  render () {
    this.category = this.props.navigation.getParam('category','') 
    return (
      <SafeAreaView style={styles.container}>
       <StatusBar translucent = {true} backgroundColor='transparent'/>
        <CustomHeader title={this.category} add={'No'} admin ={'No'} send = {'No'} {...this.props} />
        <View style={styles.body}>
            <WarningList {...this.props} />
        </View>
      </SafeAreaView>
    )
  }
}

export default CategoriesBody
