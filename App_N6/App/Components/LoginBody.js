import React, { Component } from 'react';
import {SafeAreaView,View, Text, Image, BackHandler, Alert, ToastAndroid, StatusBar, ScrollView} from 'react-native'
import {Button, Input} from 'react-native-elements'
import styles from './Styles/LoginBodyStyles'

export default class BackgroundImage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      admin: '',
      errorMessage: ''
    }
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this)
  }
  componentWillMount () {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton)
  }
  componentWillUnmount () {
    BackHandler.removeEventListener(
      'hardwareBackPress',
      this.handleBackButtonClick
    )
  }
  handleBackButtonClick () {
    BackHandler.exitApp()
  }
  handleBackButton = () => {
    Alert.alert(
      'Thoát!',
      'Bạn có muốn thoát không?',
      [
        {
          text: 'Hủy',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel'
        },
        {
          text: 'Đồng ý',
          onPress: () => BackHandler.exitApp()
        }
      ],
      {
        cancelable: false
      }
    )
    return true
  }
  handleLogin = () => {
    const { email, password } = this.state
    if (email.trim() != '' && password.trim() != '') {
      if (email.toLowerCase() == 'admin@gmail.com' && password.toLowerCase() == 'admin'){
        this.props.navigation.push('HomeScreen', {admin: 'Yes'})
      }
      else{ this.props.navigation.push('HomeScreen', {admin: 'No'});}
      this.setState({
        email: '',
        password: ''
      })
    } else {
      ToastAndroid.showWithGravity(
        'Hãy nhập tài khoản, mật khẩu',
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM
      )
    }
  }
  render () {
    return (
      <SafeAreaView style = {{flex: 1}}>
        <ScrollView contentContainerStyle = {styles.container}>
                <StatusBar translucent = {true} backgroundColor='transparent' barStyle="dark-content"/>
                <View style = {styles.top} >
                    <Image 
                        source = {require('../Images/Logo.png')}
                        style = {styles.image}
                    />
                </View>
                <View style = {styles.bottom}>
                <View style = {styles.form}>
                    <Text style = {styles.title}> ĐĂNG NHẬP</Text>
                    <Text style = {styles.text1}> Email</Text>
                    <Input
                        inputContainerStyle={styles.input}
                        keyboardType='email-address'
                        leftIcon={{ type: 'sFontisto', name: 'email', color:'#757575' }}
                        containerStyle={{alignItems:'center' }}
                        leftIconContainerStyle={{ marginLeft: 0 }}
                        onChangeText={email => this.setState({ email })}
                        value={this.state.email}
                    />
                    <Text style = {styles.text2}> Mật khẩu</Text>
                    <Input
                        inputContainerStyle={styles.input}
                        keyboardType='default'
                        secureTextEntry = {true}
                        leftIcon={{ type: 'AntDesign', name: 'lock', color:'#757575' }}
                        containerStyle={{alignItems:'center' }}
                        leftIconContainerStyle={{ marginLeft: 0 }}
                        onChangeText={password => this.setState({ password })}
                        value={this.state.password}
                    />
                    <Button 
                        type = 'solid'
                        title = 'Đăng nhập'
                        titleStyle={{fontSize: 20 }}
                        containerStyle = {styles.containerButton}
                        buttonStyle = {styles.button}
                        onPress={() => {
                            this.handleLogin()
                        }}
                    />
                    <View style={styles.containtext}>
                        <Button
                            title='Đăng ký'
                            titleStyle={{ color: '#4DD0E1', fontSize: 16 }}
                            type='clear'
                            onPress={() => this.props.navigation.navigate('SignUpScreen')}
                        />
                        <Button
                            title='Quên mật khẩu?'
                            titleStyle={{ color: '#BDBDBD',fontSize: 16 }}
                            type='clear'
                            onPress={() =>
                            this.props.navigation.navigate('ResetpassScreen')
                            }
                        />
                    </View>
                </View>
                </View>
                
            </ScrollView>
      </SafeAreaView>
    )
  }
}
