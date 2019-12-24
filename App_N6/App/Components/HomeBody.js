import React, { Component } from 'react'
import { StatusBar, Text, View, Image, ImageBackground, BackHandler, Alert, TouchableOpacity } from 'react-native'
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
    this.admin = this.props.navigation.getParam('admin', 'No');
    //console.log(this.admin)
    return (
      <View style={styles.container}>
       <StatusBar translucent = {true} backgroundColor='transparent' barStyle="dark-content"/>
        <ImageBackground
          source={require("../Images/iphone-x-wallpaper-3.jpg")}
          style={styles.image}
          imageStyle={{opacity: 0.7}}
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
          </View>
          <View style={styles.body} >
            <Text style={{fontSize:35, fontWeight:'bold',color:'#00E676',marginBottom:30, marginLeft:20}}>Quản lý đô thị</Text>
          </View>
          <View style={styles.buttonBottom}>
            <View style={styles.iconStyle}>
              <TouchableOpacity
                style={styles.touchable}
                onPress={() => {
                  this.props.navigation.navigate("RequestScreen")
                }}
              >
                <Image
                  source = {require('../Images/report.png')}
                  style = {styles.image2}
                  resizeMode = 'contain'
                />
              </TouchableOpacity>
              <Text style={styles.text}>PAKN</Text>
            </View>
            <View style={styles.iconStyle}>
            <TouchableOpacity
                style={styles.touchable}
                onPress={() => {
                  this.props.navigation.navigate("WarningScreen",{admin: this.admin})
                }}
              >
                <Image
                  source = {require('../Images/notification.png')}
                  style = {styles.image2}
                  resizeMode = 'contain'
                />
              </TouchableOpacity>
              <Text style={styles.text}>TTCB</Text>
            </View>
            <View style={styles.iconStyle}>
            <TouchableOpacity
                style={styles.touchable}
                onPress={() => {
                  this.props.navigation.navigate("SearchScreen")
                }}
              >
                <Image
                  source = {require('../Images/search.png')}
                  style = {styles.image2}
                  resizeMode = 'contain'
                />
              </TouchableOpacity>
              <Text style={styles.text}>Tìm kiếm</Text>
            </View>
          </View>
        </ImageBackground>
      </View>
    )
  }
}
