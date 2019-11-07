import React, { Component } from 'react'
import { StatusBar, Text, View, Image, ImageBackground, BackHandler, Alert } from 'react-native'
import { Icon, Avatar, Button } from 'react-native-elements'
import styles from './Styles/HomeBodyStyles'
export default class HomeBody extends Component {
  constructor(props){
    super(props);
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
  }
  componentDidMount(){
    BackHandler.addEventListener('hardwareBackPress',this.handleBackButton);
  }
  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
  }
  handleBackButtonClick() {
    BackHandler.exitApp();
  }
  handleBackButton=()=>{
    Alert.alert(
      'Thoát!',
      'Bạn có muốn thoát không?',[{
        text:'Hủy',
        onPress:()=>console.log('Cancel Pressed'),
        style:'cancel'
      },{
        text:'Đồng ý',
        onPress:()=>BackHandler.exitApp()
      },],{
        cancelable:false
      }
    )
    return true;
  }
  render () {
    return (
      <View style={styles.container}>
       <StatusBar translucent = {true} backgroundColor='transparent' barStyle="dark-content"/>
        <ImageBackground
          source={require("../Images/background.png")}
          style={styles.image}
        >
          <View style ={styles.top}>
            <View style = {styles.avatar}>
            <Avatar
            rounded
            icon={{ name: 'account-circle', size: 32, color: 'white' }}
            onPress={() => {
              this.props.navigation.navigate("InfoScreen")
            }}
          />
            </View> 
            <Button
                title= "Đăng nhập"
                titleStyle={{ fontSize: 18,color: 'white' }}
                type='clear'
                onPress={() => {
                  this.props.navigation.navigate("LoginScreen")
                }}
                disabledTitleStyle = {{color : 'transparent'}}
                style = {styles.signout}
              />  
          </View>
          <View style={styles.body} >
            <Text style={{fontSize:25,color:'white',marginBottom:30, marginLeft:20}}>Ứng dụng đô thị</Text>
          </View>
          <View style={styles.buttonBottom}>
            <View style={styles.iconStyle}>
              <Icon
                name='question-answer'
                color='white'
                underlayColor='transparent'
                size={50}              
                onPress={() => {
                  this.props.navigation.navigate("RequestScreen")
                }}
              />
              <Text style={styles.text}>PAKN</Text>
            </View>
            <View style={styles.iconStyle}>
              <Icon
                name='warning'
                type='FontAwesome'
                color='yellow'
                underlayColor='transparent'
                size={50}
                onPress={() => {
                  this.props.navigation.navigate("HouseWarningScreen")
                }}
              />
              <Text style={styles.text}>TTCB</Text>
            </View>
            <View style={styles.iconStyle}>
              <Icon
                name='search'
                type='FontAwesome'
                color='white'
                underlayColor='transparent'
                size={50}
                onPress={() => {
                  this.props.navigation.navigate("SearchScreen")
                }}
              />
              <Text style={styles.text}>Tìm kiếm</Text>
            </View>
          </View>
        </ImageBackground>
      </View>
    )
  }
}
