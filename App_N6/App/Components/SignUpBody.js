import React, { Component } from 'react'
import { Alert, View, ImageBackground, StatusBar,Text, Platform,ToastAndroid, BackHandler,ScrollView } from 'react-native'
import style from './Styles/SignUpBodyStyles'
// import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Button, Icon,CheckBox  } from 'react-native-elements'

export default class SignUpBody extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '',
      confirm: '',
      errorMessage: '',
      checked : false
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
  handleSignUp = () => {
    this.props.navigation.navigate('ConfirmScreen',{screen : 'HomeScreen'})
  }
  render () {
    return (
      <ScrollView keyboardDismissMode='on-drag'>
        <View style={style.wrap}>
        <StatusBar translucent = {true} backgroundColor='transparent'/>
          <View>
            <Icon
              name='arrow-back'
              type='AntDesign'
              size={25}
              color='black'
              containerStyle={style.backIcon}
              onPress={() => {
                this.props.navigation.goBack()
              }}
            />
          </View>
          <View style={style.bewraped}>
            <Text style = {{fontSize : 20, marginLeft : 20 }}>Email</Text>
            <Input
              inputContainerStyle={style.input}
              keyboardType='email-address'
              placeholder='abc@gmail.com'
              placeholderTextColor='gray'
              leftIcon={{ type: 'Fontisto', name: 'email' }}
              containerStyle={{ alignItems: 'flex-start' }}
              leftIconContainerStyle = {{marginLeft: 0}}
              onChangeText={email => this.setState({ email })}
              value={this.state.email}
            />
               <Text style = {{fontSize : 20, marginLeft : 20, marginTop: 20 }}>Mật khẩu</Text>
            <Input
              inputContainerStyle={style.input}
              keyboardType='default'
              placeholder='1234'
              placeholderTextColor='gray'
              leftIcon={{ type: 'AntDesign', name: 'lock' }}
              secureTextEntry
              containerStyle={{ alignItems: 'flex-start' }}
              leftIconContainerStyle = {{marginLeft: 0}}
              onChangeText={password => this.setState({ password })}
              value={this.state.password}
            />
               <Text style = {{fontSize : 20, marginLeft : 20,height : 30 ,marginTop : 20, width : 120 }}>Xác nhận </Text>
            <Input
              inputContainerStyle={style.input}
              keyboardType='default'
              placeholder='1234'
              placeholderTextColor='gray'
              leftIcon={{ type: 'AntDesign', name: 'lock' }}
              secureTextEntry
              containerStyle={{ alignItems: 'flex-start' }}
              leftIconContainerStyle = {{marginLeft: 0}}
              onChangeText={confirm => this.setState({ confirm })}
              value={this.state.confirm}
            />
           <View style =  {style.checkboxspace}>
              <CheckBox checked = {this.state.checked}  onPress= {() => this.setState({checked: !this.state.checked })}  />
              <Text style = {style.checkboxtext}>Đồng ý với các điểu khoản của chúng tôi</Text> 
            </View>
            <View style={style.button}>
              <Button
                title='Đăng kí'
                buttonStyle={style.buttonstyle}
                onPress = {()=> this.handleSignUp()}
              />
              <Button
                title='Đã có tài khoản?Đăng nhập'
                buttonStyle={{alignItems:'center', marginTop:10,marginBottom : 105   }}
                type='clear'
                onPress={() => this.props.navigation.navigate('LoginScreen')}
              />
            </View>
          </View>
      </View>
      </ScrollView>
    )
  }
}
