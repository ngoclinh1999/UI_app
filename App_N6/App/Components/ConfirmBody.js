import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  ToastAndroid,
  ImageBackground,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
  BackHandler
} from 'react-native'
import CodeInput from 'react-native-confirmation-code-input'
import { Icon } from 'react-native-elements'

import styles from './Styles/ConfirmBodyStyles'
export default class ConfirmBody extends Component {
  constructor (props) {
    super(props)
    this.state = {
      code: '',
      screen: ''
    }
  }
  componentWillMount(){ 
    const screen = this.props.navigation.getParam('screen', '')
      this.setState({
        screen: screen
    })
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
  }
  componentWillUnmount() { 
      BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
  }
  handleBackButtonClick() {
      this.props.navigation.goBack();
      return true;
  }
  
  _onFinishCheckingCode (isValid, code) {
    this.setState({code: ''});
    this.refs.codeInputRef.clear();
    this.props.navigation.navigate(this.state.screen)

  }
  render () {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar
          translucent
          backgroundColor='transparent'
          barStyle='dark-content'
        />
        <ImageBackground
          style={{ width: '100%', height: '100%' }}
          source={require("../Images/check_email.png")}
        >
          <View style={styles.titleWrapper}>
            <View style={styles.iconBack}>
              <Icon
                name='arrow-back'
                type='AntDesign'
                size={25}
                color='white'
                underlayColor='transparent'
                onPress={() => {this.props.navigation.goBack()}}
              />
            </View>
            <View style={styles.titles}>
              <Text style={styles.title}>Xác thực email</Text>
            </View>
          </View>

          <View style={styles.space} />

          <View style={styles.inputWrapper}>
            <View style={styles.codeTop}>
              <Text style={styles.inputLabel}>
                Một mã xác thực đã được gửi đến email của bạn
              </Text>
              <Text style={styles.inputLabel}>
                Nhập mã xác thực để tiếp tục
              </Text>
            </View>
            <CodeInput
              ref='codeInputRef'
              keyboardType='numeric'
              codeLength={4}
              className={'border-b'}
              compareWithCode=''
              space={15}
              autoFocus={true}
              containerStyle={styles.codeMid}
              codeInputStyle={{
                borderBottomColor: 'gray',
                color: 'black',
                fontSize: 30
              }}
              onFulfill={(isValid, code) =>
                this._onFinishCheckingCode(isValid, code)
              }
              onCodeChange={code => {
                this.state.code = code
              }}
            />
            <View style={styles.codeBottom}>
              <Text style={styles.noCode}>Bạn chưa nhận được mã?</Text>
              <TouchableOpacity style={{ height: 40 }}>
                <Text style={{ marginLeft: 5, color: '#1976D2' }}>Gửi lại</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </SafeAreaView>
    )
  }
}
