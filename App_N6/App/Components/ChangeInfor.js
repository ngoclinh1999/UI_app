import React, { Component } from 'react'
import { View, Text, Alert, StatusBar,Image,BackHandler, ToastAndroid } from 'react-native'
import { Avatar, Button, Input } from 'react-native-elements'
import styles from './Styles/ChangeInforStyles'
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
class ChangeInfor extends Component {
  constructor(props) {
    super(props)  
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this)
    this.state = {
        hoten: '',
        gtinh: '',
        ngsinh: '',
        phone: '',
        email: '',
        id: '',
        avatar: ''
    }
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
        this.setState({avatar : response.data})
      }
    })
  }
  render () {
    return (
      <View style={styles.container}>
       <StatusBar translucent = {true} backgroundColor='transparent' barStyle="dark-content"/>
        <CustomHeader
          title={'Chỉnh sửa thông tin'}
          add={'No'}
          admin ={'No'}
          send={'No'}
          {...this.props}
        />
        <View style={styles.spaceavatar}  > 
          <Avatar
            style={styles.avatar}
            rounded = {true}
            source={ source = { uri: 'data:image/jpeg;base64,' + this.state.avatar }}
            showEditButton = {true}
            editButton = {{size: 18}}
            onEditPress = {()=> this.editAvatar()}
          />
        </View>
        <View style={{flexDirection: 'column', marginLeft: 10, height: 200 }}>
          <View style = {{flexDirection: 'row'}}>
                  <View style = {{width: 100}}>
                  <Text style={styles.text}>Họ tên:</Text>
                  </View>
                  <View>
                  <Input 
                      inputContainerStyle={styles.textInput}
                      returnKeyType='go'
                      onChangeText={(hoten) => this.setState({ hoten })}
                      value={this.state.hoten} 
                  />
                  </View>
          </View>
          <View style = {{flexDirection: 'row'}}>
              <View style = {{width: 100}}>
              <Text style={styles.text}>Ngày sinh: </Text>
              </View>
              <View>
              <Input 
                  inputContainerStyle={styles.textInput}
                  returnKeyType='go'
                  onChangeText={(ngsinh) => this.setState({ ngsinh })}
                  value={this.state.ngsinh} 
              />
              </View>
          </View>
          <View style = {{flexDirection: 'row'}}>
              <View style = {{width: 100}}>
              <Text style={styles.text}>Giới tính: </Text>
              </View>
              <View>
              <Input 
                  inputContainerStyle={styles.textInput}
                  returnKeyType='go'
                  onChangeText={(gtinh) => this.setState({ gtinh })}
                  value={this.state.gtinh} 
              />
              </View>
          </View>
          <View style = {{flexDirection: 'row'}}>
              <View style = {{width: 100}}>
              <Text style={styles.text}>Điện thoại: </Text>
              </View>
              <View>
              <Input 
                  inputContainerStyle={styles.textInput}
                  returnKeyType='go'
                  onChangeText={(phone) => this.setState({ phone })}
                  value={this.state.phone} 
              />
              </View>
          </View>
          <View style = {{flexDirection: 'row'}}>
            <View style = {{width: 110}}>
              <Text style={styles.segif1}>Email: </Text>
            </View>
            <View>
            <Text style={styles.segif1}>{this.state.email}</Text>
            </View>
          </View>
          
          
        </View>
        <View style = {styles.spacechangepass} >
          <Button buttonStyle={styles.changepass}
            title='Cập nhật'
            onPress={() => this.update()}
          />
        </View>
      </View>
    )
  }
}
export default withNavigation(ChangeInfor)
