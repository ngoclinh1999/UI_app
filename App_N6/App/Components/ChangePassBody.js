import React, { Component } from 'react'
import { Alert, View, ImageBackground, StatusBar,Text, Platform,ToastAndroid, BackHandler,ScrollView } from 'react-native'
import style from './Styles/ChangePassBodyStyle'
import CustomHeader from './CustomHeader'
import { Input, Button, Icon,CheckBox  } from 'react-native-elements'


export default class ChangePassBody extends Component {
  constructor(props){
    super(props);
    this.state = {
      pass: '',
      newpass: '',
      newpass2: ''
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
  ChangePass = () => {
      const {pass, newpass, newpass2} = this.state;
      if(newpass =='' || newpass2 == '' || pass == '') {
        ToastAndroid.showWithGravity(
            'Điền đầy đủ mật khẩu',
            ToastAndroid.SHORT,
            ToastAndroid.BOTTOM
          )
      }
      else{
        if(newpass != newpass2) {
            ToastAndroid.showWithGravity(
                'Mật khẩu mới không khớp',
                ToastAndroid.SHORT,
                ToastAndroid.BOTTOM
              )
          }
        else{
            Alert.alert(
                'Đổi mật khẩu thành công!',
                'Bạn có muốn đăng nhập lại không?',
                [
                  {
                    text: 'Đăng nhập lại',
                    onPress: () => this.props.navigation.navigate('LoginScreen'),
                    style: 'cancel'
                  },
                  {
                    text: 'Tiếp tục',
                    onPress: () => this.props.navigation.goBack(),
                  }
                ],
                {
                  cancelable: false
                }
              )
        }
      }
    
  }
  render () {
    return (
      <ScrollView keyboardDismissMode='on-drag'>
        <View style={style.wrap}>
        <StatusBar translucent = {true} backgroundColor='transparent'/>
        <CustomHeader
          title={'Đổi mật khẩu'}
          add={'No'}
          admin ={'No'}
          send={'No'}
          {...this.props}
        />
          <View style={style.bewraped}>
            <View style={style.form}>
                <Text style = {{fontSize : 20, marginLeft: 10}}>Mật khẩu cũ</Text>
                <Input
                inputContainerStyle={style.input}
                keyboardType='default'
                secureTextEntry={true}
                placeholder='........'
                placeholderTextColor='#E0E0E0'
                leftIcon={{ type: 'Fontisto', name: 'email', color:'#757575' }}
                leftIconContainerStyle = {{marginLeft: 0}}
                onChangeText={pass => this.setState({ pass })}
                value={this.state.pass}
            />
            </View>
            <View style = {style.form}>
                <Text style = {{fontSize : 20, marginLeft: 10}}>Mật khẩu mới</Text>
                <Input
                inputContainerStyle={style.input}
                keyboardType='default'
                secureTextEntry={true}
                placeholder='12345678'
                placeholderTextColor='#E0E0E0'
                leftIcon={{ type: 'AntDesign', name: 'lock', color:'#757575' }}
                leftIconContainerStyle = {{marginLeft: 0}}
                onChangeText={newpass => this.setState({ newpass })}
                value={this.state.newpass}
                />
            </View>
            <View style = {style.form}>
                <Text style = {{fontSize : 20, marginLeft: 10 }}>Nhập lại mật khẩu mới</Text>
                <Input
                inputContainerStyle={style.input}
                keyboardType='default'
                secureTextEntry={true}
                placeholder='12345678'
                placeholderTextColor='#E0E0E0'
                leftIcon={{ type: 'AntDesign', name: 'lock', color:'#757575' }}
                leftIconContainerStyle = {{marginLeft: 0}}
                onChangeText={newpass2 => this.setState({ newpass2 })}
                value={this.state.newpass2}
                /> 
            </View>    
            <View style={style.button}>
              <Button
                title='Xác nhận'
                titleStyle={{fontSize: 20 }}
                buttonStyle={style.buttonstyle}
                onPress = {()=> this.ChangePass()}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    )
  }
}
