import React, { Component } from 'react'
import { Alert, Text, View, StatusBar, Image, BackHandler,ScrollView,ToastAndroid} from 'react-native'
import style from './Styles/LoginBodyStyles'
import { Input, Button } from 'react-native-elements'

export default class BackgroundImage extends Component {

  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '',
      errorMessage: ''
      
    }
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
  handleLogin = () => {
    const { email, password } = this.state
    if(email.trim() != "" && password.trim() != "") {
        this.props.navigation.push('HomeScreen')
    } else {
      ToastAndroid.showWithGravity(
        'Hãy nhập tài khoản, mật khẩu',
        ToastAndroid.SHORT,
        ToastAndroid.CENTER,
      )
    }
  }
  render () {
    return (
      <ScrollView keyboardDismissMode='on-drag'>
        <View style={style.wrap}>
          <StatusBar translucent = {true} backgroundColor='transparent' barStyle="dark-content"/>
          <View style={style.bewraped}>
            <View style={style.image}>
            <Text style={style.text}>Đô thị thông minh</Text>
              <Image  source={{uri:"https://png.pngtree.com/element_origin_min_pic/16/07/25/115795870337220.jpg"}}
                      style={style.logo}></Image>
             
            </View>
            <Input
              inputContainerStyle={style.input}
              keyboardType='email-address'
              placeholder='Nhập email'
              placeholderTextColor='gray'
              leftIcon={{ type: 'sFontisto', name: 'email' }}
              containerStyle={{ alignItems: 'center' }}
              leftIconContainerStyle = {{marginLeft: 0}}
              onChangeText={email => this.setState({ email })}
              value={this.state.email}
            />
            <Input 
              inputContainerStyle={style.input}
              keyboardType='default'
              placeholder='Nhập mật khẩu'
              placeholderTextColor='gray'
              leftIcon={{ type: 'AntDesign', name: 'lock' }}
              secureTextEntry
              containerStyle={{ alignItems: 'center' }}
              leftIconContainerStyle = {{marginLeft: 0}}
              onChangeText={password => this.setState({ password })}
              value={this.state.password}
            />
            <View style={style.button}>
              <Button
                title='Đăng nhập'
                buttonStyle={style.buttonstyle}
                onPress={()=> {this.handleLogin()}}
              />
            </View>
            <View style={style.containtext}>
              <Button
                title='Đăng ký'
                titleStyle={{ color: 'black' }}
                type='clear'
                onPress={() => this.props.navigation.navigate('SignUpScreen')}
              />
              <Button
                title='Quên mật khẩu?'
                titleStyle={{ color: 'black' }}
                type='clear'
                onPress={()=>this.props.navigation.navigate('ResetpassScreen')}
              />
            </View>
          </View>
      </View>
      </ScrollView>
      
    )
  }
}
