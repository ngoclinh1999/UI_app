// Body trang chủ phần cảnh báo
import React, { Component } from 'react'
import { Dimensions, View, SafeAreaView, StatusBar, BackHandler } from 'react-native'
import styles from './Styles/HomeWarningBodyStyles'
import { ButtonGroup, Button } from 'react-native-elements'
import WarningList from './WarningList'
import CustomHeader from './CustomHeader'
class HomeWarningBody extends Component {
  constructor () {
    super()
    this.state = {
      selectedIndex: 0,
    }
    this.updateIndex = this.updateIndex.bind(this);
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
  }
  componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
  }
 
  componentWillUnmount() { 
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
  }
  handleBackButtonClick() {
    
    this.props.navigation.goBack(null);
    return true;
  }
  updateIndex (selectedIndex) {
    this.setState({selectedIndex})
  }
  render () {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar translucent backgroundColor='transparent' barStyle="dark-content"/>
        <CustomHeader
          {...this.props}
          title={'Thông tin cảnh báo'}
          add={'Yes'}
          admin={'Yes'}
          send={'No'}
        />
        <View style={styles.body}>
        
          <ButtonGroup
            onPress={this.updateIndex}
            selectedIndex={this.state.selectedIndex}
            buttons={['Tất cả', 'Mới nhất', 'Phổ biến']}
            containerStyle={styles.buttonGroupContainerStyle}
            textStyle={styles.buttonGroupTextStyle}
            selectedButtonStyle={{backgroundColor: "#2196F3"}}
          />
          <View style={styles.bodyBottom}>
            <WarningList {...this.props} />
          </View>
        </View>
      </SafeAreaView>
    )
  }
}
export default HomeWarningBody
