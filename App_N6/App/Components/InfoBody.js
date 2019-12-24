import React, { Component } from 'react'
import { View, Text, Alert, StatusBar,Image,BackHandler  } from 'react-native'
import { Avatar, Button, Icon } from 'react-native-elements'
import styles from './Styles/InfoBodyStyles'
import CustomHeader from './CustomHeader'
import { withNavigation } from 'react-navigation'
import ImagePicker from 'react-native-image-picker'
import {INFO} from '../Data/DataTest'
import Menu,{MenuItem, MenuDivider} from 'react-native-material-menu';
const options = {
  title: 'Chọn ảnh đại diện',
  cancelButtonTitle: 'Huỷ',
  takePhotoButtonTitle: 'Chụp ảnh',
  chooseFromLibraryButtonTitle: 'Chọn ảnh từ thư viện',
  mediaType: 'photo',
  maxWidth: 300,
  maxHeight: 300,
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
}
class InforBody extends Component {
  constructor(props) {
    super(props)
    this.state = {
      avatar: '',
      temp: []
    }  
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this)
  }
  componentWillMount() { 
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
  }
  componentWillUnmount() { 
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
  }
  handleBackButtonClick() {
    this.props.navigation.goBack(null)
    return true;
  }
  editAvatar(){
    imagePickerPressed = ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response)

      if (response.didCancel) {
        console.log('User cancelled image picker')
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error)
      } else {
        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data }
        this.setState({
          'avatar' : response.data
        })
      }
    })
  }
  _settingMenu = null;

  setMenuRef = ref => {
    this._settingMenu = ref;
  };

  hideMenu = () => {
    this._settingMenu.hide();
  };

  showMenu = () => {
    this._settingMenu.show();
  };
  exit = () =>{
    this.hideMenu();
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
  editInfo = () => {
    this.hideMenu();
    this.props.navigation.navigate('ChangeInforScreen');
  }
  editPass = () =>{
    this.hideMenu();
    this.props.navigation.navigate('ChangePassScreen')
  }
  logOut = () =>{
    this.hideMenu();
    Alert.alert(
      'Thoát!',
      'Bạn có muốn đăng xuất không không?',
      [
        {
          text: 'Hủy',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel'
        },
        {
          text: 'Đồng ý',
          onPress: () => this.props.navigation.navigate('LoginScreen')
        }
      ],
      {
        cancelable: false
      }
    )
    return true
    
  }
  render () {
    const data = Object.values(INFO)
    return (
      <View style={styles.container}>
       <StatusBar translucent = {true} backgroundColor='transparent' barStyle="dark-content"/>
        <CustomHeader
          title={'Thông tin tài khoản'}
          add={'No'}
          admin ={'No'}
          send={'No'}
          {...this.props}
        />
        <View style={styles.spaceavatar}  > 
          <Avatar
            containerStyle={styles.avatar}
            rounded
            source={(this.state.avatar == '') ? require('../Images/Logo.png'):source = { uri: 'data:image;base64,' + this.state.avatar}}
            showEditButton = {true}
            editButton = {{size: 18}}
            onEditPress = {()=> this.editAvatar()}
          />
          <View style = {styles.menu}>
          <Menu
                ref={this.setMenuRef}
                button={
                  <Icon
                    name="settings"
                    type="AntDesign"
                    size={25}
                    color="#29B6F6"
                    underlayColor="transparent"
                    onPress={this.showMenu}
                  />
                }
              >
                <MenuItem onPress={this.editInfo}>Chỉnh sửa thông tin</MenuItem>
                <MenuDivider />
                <MenuItem onPress={this.editPass}>Đổi mật khẩu</MenuItem>
                <MenuDivider />
                <MenuItem onPress={this.logOut}>Đăng xuất</MenuItem>
                <MenuDivider />
                <MenuItem onPress={this.exit}>Thoát</MenuItem>
            </Menu>
          </View>
        </View>
        <View style={{ flexDirection: 'column', marginLeft: 10  }}>
          <Text style={styles.segif}>Họ tên: {data[0].name}</Text>
          <Text style={styles.segif}>Ngày sinh : {data[0].dob}</Text>
          <Text style={styles.segif}>Giới tính : {data[0].gender}</Text>
          <Text style={styles.segif}>Điện thoại : {data[0].phone}</Text>
          <Text style={styles.segif}>Địa chỉ : {data[0].address}</Text>
          <Text style={styles.segif1}>Email : {data[0].email}</Text>
        </View>
      </View>
    )
  }
}
export default withNavigation(InforBody)
