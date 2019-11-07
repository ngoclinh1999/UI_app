import React, { Component } from 'react'
import { View, Text, Alert, StatusBar,Image,BackHandler  } from 'react-native'
import { Avatar, Button } from 'react-native-elements'
import styles from './Styles/InfoBodyStyles'
import CustomHeader from './CustomHeader'
import { withNavigation } from 'react-navigation'
import ImagePicker from 'react-native-image-picker'

const options = {
  title: 'Select Avatar',
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
  componentDidMount(){
    
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
  render () {
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
            style={styles.avatar}
            rounded = {true}
            source={ source = { uri: 'data:image/jpeg;base64,' + this.state.temp.avatar }}
            showEditButton = {true}
            editButton = {{size: 18}}
            onEditPress = {()=> this.editAvatar()}
          />
        </View>
        <View style={{ flexDirection: 'column', marginLeft: 10  }}>
          <Text style={styles.segif}>Họ tên: {this.state.temp.hoten}</Text>
          <Text style={styles.segif}>Ngày sinh : {this.state.temp.ngsinh}</Text>
          <Text style={styles.segif}>Giới tính : {this.state.temp.gtinh}</Text>
          <Text style={styles.segif}>Điện thoại : {this.state.temp.phone}</Text>
          <Text style={styles.segif1}>Email : {this.state.temp.email}</Text>
        </View>
        <View style = {styles.spacechangepass} >
          <Button buttonStyle={styles.changepass}
            title='Đổi thông tin'
            onPress={() => { this.props.navigation.navigate('ChangeInforScreen', {data: this.state.temp})
            }}
          />
        </View>
      </View>
    )
  }
}
export default withNavigation(InforBody)
