import React, { Component } from 'react'
import { Alert, View, ImageBackground, StatusBar,Text, Platform,ToastAndroid, BackHandler,ScrollView } from 'react-native'
import style from './Styles/ResetpassBodyStyles'
import CustomHeader from './CustomHeader'
import { Input, Button, Icon,CheckBox  } from 'react-native-elements'


export default class ResetpassBody extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      checked: false
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
  ResetPass = () => {
    this.props.navigation.navigate('ConfirmScreen',{screen : 'CreatenewpassScreen'})
  }
  render () {
    return (
      <ScrollView keyboardDismissMode='on-drag'>
        <View style={style.wrap}>
        <StatusBar translucent = {true} backgroundColor='transparent'/>
        <CustomHeader
          title={'Quên mật khẩu'}
          add={'No'}
          admin ={'No'}
          send={'No'}
          {...this.props}
        />
          <View style={style.bewraped}>
            <Text style = {{fontSize : 20, marginLeft: 10 }}>Email</Text>
            <Input
              inputContainerStyle={style.input}
              keyboardType='email-address'
              placeholder='abc@gmail.com'
              placeholderTextColor='gray'
              leftIcon={{ type: 'Fontisto', name: 'email', color: '#757575' }}
              containerStyle={{ alignItems: 'flex-start' }}
              leftIconContainerStyle = {{marginLeft: 0}}
              onChangeText={email => this.setState({ email })}
              value={this.state.email}
            />           
          </View>
          <View style={style.button}>
              <Button
                title='Xác nhận'
                titleStyle={{fontSize: 20 }}
                buttonStyle={style.buttonstyle}
                onPress = {()=> this.ResetPass()}
              />
            </View>
        </View>
      </ScrollView>
    )
  }
}
