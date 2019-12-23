import React, { Component } from 'react'
import { TextInput, Text, View, Picker, StatusBar, Image, TouchableOpacity, BackHandler, ToastAndroid, SafeAreaView} from 'react-native'
import { Button } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler'
import CreateRequestBodyStyle from './Styles/CreateRequestBodyStyle'
import CustomHeader from './CustomHeader'
import ImagePicker from 'react-native-image-picker'
import {Category_LIST} from '../Data/DataTest'
const options = {
  title: 'Thêm ảnh mới',
  cancelButtonTitle: 'Huỷ',
  takePhotoButtonTitle: 'Chụp ảnh',
  chooseFromLibraryButtonTitle: 'Chọn ảnh từ thư viện',
  mediaType: 'photo',
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
}

export default class CreateRequestBody extends Component {

  constructor(props) {
    super(props) 
    this.state = {
      avatarSource: '',
      category: '',
      title: '',
      content: '',
      response: '',
      time: '',
      data: {},
    }
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
  }

  componentWillMount = async() =>{
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick)
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick)
  }

  showImage = () => {
    // console.log(this.state.avatarSource)
    imagePickerPressed = ImagePicker.showImagePicker(options, (response) => {

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data }
        this.setState({
          avatarSource: response.data,
        })
      }
    })
  }
  handleBackButtonClick() {
    this.props.navigation.goBack(null)
    return true;
  }
  pushData = () => {
    if (this.state.title == '' || this.state.content == '' || this.state.category == '') {
      ToastAndroid.showWithGravity(
        'Điền đầy đủ thông tin!',
        ToastAndroid.LONG,
        ToastAndroid.CENTER,
      )
    }
    else {
      ToastAndroid.showWithGravity(
        'Tạo thành công!',
        ToastAndroid.LONG,
        ToastAndroid.CENTER,
      );
      this.props.navigation.goBack();
    }
  }
  render() {
    return (
      <SafeAreaView style={CreateRequestBodyStyle.safeAreaViewContainer}>
        <ScrollView
          style={CreateRequestBodyStyle.scrollContainer}
        >
          <StatusBar translucent={true} backgroundColor='transparent' />
          <CustomHeader 
            title={'Tạo phản ánh'} 
            add={'No'} 
            admin={'No'} 
            send={'No'}  
            {...this.props}>

            </CustomHeader>

          <View
            style={CreateRequestBodyStyle.container}
          >
            <Text
              style={CreateRequestBodyStyle.inlineText}
            >Tiêu đề: </Text>

            <TextInput
              style={CreateRequestBodyStyle.inlineTextInput}
              placeholderTextColor='#7f8c8d'
              returnKeyType='go'
              onChangeText={(value) => this.setState({ title: value })}
              ref={this.titleTextInput}
            />

            <View
              style={CreateRequestBodyStyle.inlineSpace}
            >
            </View>

            <Text
              style={CreateRequestBodyStyle.inlineText}
            >Chuyên mục:</Text>
            <Picker
              selectedValue={this.state.category}
              style={CreateRequestBodyStyle.pickerStyle}
              mode='dropdown'
              onValueChange={(value, index) => {
                this.setState({ category: value })
              }}>
              <Picker.Item label='-chọn-' value='' color='#D3D3D3' />
              {Object.keys(Category_LIST).map((key) => {
                return (<Picker.Item label={Category_LIST[key].name} value={Category_LIST[key].name} key={key} />)
              })}
            </Picker>
            <Text
              style={CreateRequestBodyStyle.inlineTextExpand}
            >Nội dung:</Text>

            <TextInput
              style={CreateRequestBodyStyle.inlineTextInput}
              placeholderTextColor='#7f8c8d'
              returnKeyType='go'
              multiline={true}
              onChangeText={(value) => this.setState({ content: value })}
              ref={this.myTextInput}
            />
            <Text
              style={CreateRequestBodyStyle.inlineTextExpand}
            >Hình ảnh: </Text>
            <View style={CreateRequestBodyStyle.containerImagePicker}>
              <Button
                buttonStyle={CreateRequestBodyStyle.inlineImagePicker}
                title='Thêm hình ảnh phản ánh'
                type='outline'
                underlayColor='transparent'
                onPress={this.showImage}
              />
            </View>
          </View>

          <View style={CreateRequestBodyStyle.imageContainer}>
          <Image 
                source={ source = { uri: 'data:image/jpeg;base64,' + this.state.avatarSource }}
                style={{
                  width : this.state.avatarSource == '' ? 0 : 200,
                  height : this.state.avatarSource == '' ? 0 : 200
                }} 
                />
          </View>
          

          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', marginTop: 20 }}>
            <Button
              type='solid'
              title='Tạo Phản Ánh'
              onPress={this.pushData}
            />
          </View>

        </ScrollView>
      </SafeAreaView> 
    )
  }
}