import React, { Component } from 'react'
import { Alert, View, Image, StatusBar,Text, Platform,ToastAndroid, BackHandler,ScrollView, SafeAreaView } from 'react-native'
import styles from './Styles/SignUpBodyStyles'
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
      <SafeAreaView style = {{flex: 1}}>
        <ScrollView contentContainerStyle = {styles.container}>
                <StatusBar translucent = {true} backgroundColor='transparent' barStyle="dark-content"/>
                <View style = {styles.top} >
                    <Icon
                        name='keyboard-backspace'
                        type='MaterialIcons'
                        size={30}
                        color='white'
                        underlayColor="transparent"
                        containerStyle={styles.backIcon}
                        onPress={() => {
                            this.props.navigation.goBack()
                        }}
                    />
                    <Image 
                        source = {require('../Images/Logo.png')}
                        style = {styles.image}
                    />
                </View>
                <View style = {styles.bottom}>
                    <View style = {styles.form}>
                        <Text style = {styles.title}> ĐĂNG KÝ</Text>
                        <Text style = {styles.text1}> Email</Text>
                        <Input
                            inputContainerStyle={styles.input}
                            keyboardType='email-address'
                            leftIcon={{ type: 'sFontisto', name: 'email', color:'#757575', size:20 }}
                            containerStyle={{alignItems:'center' }}
                            leftIconContainerStyle={{ marginLeft: 0 }}
                            onChangeText={email => this.setState({ email })}
                            value={this.state.email}
                        />
                        <Text style = {styles.text2}> Mật khẩu</Text>
                        <Input
                            inputContainerStyle={styles.input}
                            keyboardType='email-address'
                            secureTextEntry={true}
                            leftIcon={{ type: 'AntDesign', name: 'lock', color:'#757575', size:20 }}
                            containerStyle={{alignItems:'center' }}
                            leftIconContainerStyle={{ marginLeft: 0 }}
                            onChangeText={password => this.setState({ password })}
                            value={this.state.password}
                        />
                        <Text style = {styles.text3}> Nhập lại Mật khẩu</Text>
                        <Input
                            inputContainerStyle={styles.input}
                            keyboardType='email-address'
                            secureTextEntry={true}
                            leftIcon={{ type: 'AntDesign', name: 'lock', color:'#757575', size:20 }}
                            containerStyle={{alignItems:'center' }}
                            leftIconContainerStyle={{ marginLeft: 0 }}
                            onChangeText={confirm => this.setState({ confirm })}
                            value={this.state.confirm}
                        />
                        <Button 
                            type = 'solid'
                            title = 'Đăng ký'
                            titleStyle={{fontSize: 20 }}
                            containerStyle = {styles.containerButton}
                            buttonStyle = {styles.Button}
                            onPress={() => {
                                this.handleSignUp()
                            }}
                        />
                        
                    </View>
                </View>
                
            </ScrollView>
      </SafeAreaView>
    )
  }
}
