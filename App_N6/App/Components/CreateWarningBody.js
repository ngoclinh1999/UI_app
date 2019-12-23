// Body tạo cảnh báo
import React, { Component } from 'react'
import {
  Dimensions,
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TextInput,
  StatusBar,
  Picker,
  ToastAndroid,
  BackHandler,
  KeyboardAvoidingView,
  Image
} from 'react-native'
import styles from './Styles/CreateWarningBodyStyles'
import { Button } from 'react-native-elements'
import CustomHeader from './CustomHeader'
import ImagePicker from 'react-native-image-picker'
import {Category_LIST} from '../Data/DataTest'
const options = {
  title: 'Thêm ảnh mới',
  cancelButtonTitle: 'Huỷ',
  takePhotoButtonTitle: 'Chụp ảnh',
  chooseFromLibraryButtonTitle: 'Chọn ảnh từ thư viện',
  mediaType: 'photo',
  maxWidth: 600,
  maxHeight: 400,
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
}

class CreateWarningBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      tieude: '',
      chuyenmuc: '',
      noidung: '',
      donvigui: '',
      mucdo: '',
      vitri: '',
      thoigian: '',
      time: '',
      luotxem: 0,
      data: [],
      avatarSource: '',
    }
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
  }
  componentWillMount(){
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
  }
  componentWillUnmount() { 
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
  }
  handleBackButtonClick() {
    
    this.props.navigation.goBack(null);
    return true;
  }
  addWarning(){
    if(this.state.chuyenmuc == '' ||this.state.donvigui == '' ||this.state.mucdo == ''
       || this.state.noidung == '' ||this.state.tieude == '' ||this.state.vitri == '' ){
        ToastAndroid.showWithGravity(
          'Điền đầy đủ thông tin!',
          ToastAndroid.SHORT,
          ToastAndroid.CENTER,
        );
    }
    else {
    ToastAndroid.showWithGravity(
      'Tạo thành công!',
      ToastAndroid.SHORT,
      ToastAndroid.CENTER
    );
    this.props.navigation.goBack();
    }
  }
  showImage = () => {
    // console.log(this.state.avatarSource)
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
          avatarSource: response.data,
        })
      }
    })
  }
  render () {
    return (
      <SafeAreaView style={styles.container}>
      <StatusBar translucent = {true} backgroundColor='transparent'/>
        <CustomHeader title={'Tạo cảnh báo'} add={'No'} admin ={'No'} send={'No'} {...this.props} />
        <View style={styles.body}>
          <ScrollView>
            <KeyboardAvoidingView behavior="padding">
            <Text style={styles.title}>Tiêu đề: </Text>
            <TextInput
              style={styles.textInput}
              returnKeyType='go'
              onChangeText={(tieude) => this.setState({ tieude })}
              value={this.state.tieude}
            />
            <Text style={styles.title}>Chuyên mục: </Text>
            <Picker
              selectedValue={this.state.chuyenmuc}
              style={styles.piker}
              mode='dropdown'
              onValueChange={(value) => { this.setState({ chuyenmuc: value }) }}>
              <Picker.Item label='-chọn-' value='' color='#D3D3D3' />
              {Object.keys(Category_LIST).map((key) => {
            return (<Picker.Item label={Category_LIST[key].name} value={Category_LIST[key].name} key={key}/>)
            })}
            </Picker>
            <Text style={styles.title}>Nội dung: </Text>
            <TextInput
              style={styles.textInput}
              multiline
              returnKeyType='go'
              textAlignVertical='top'
              onChangeText={(noidung) => this.setState({ noidung })}
              value={this.state.noidung}
            />
            <Text style={styles.title}>Hình ảnh: </Text>
            <View style = {styles.viewMedia}>
            <Button
                buttonStyle= {styles.buttonMedia}
                title='Thêm hình ảnh'
                type='outline'
                underlayColor='transparent'
                onPress={this.showImage}
              />
              <Image 
                source={ source = { uri: 'data:image/jpeg;base64,' + this.state.avatarSource }}
                style={{
                  width : this.state.avatarSource == '' ? 0 : 200,
                  height : this.state.avatarSource == '' ? 0 : 200
                }} 
                />
            </View>
            <Text style={styles.title}>Đơn vị gửi: </Text>
            <TextInput
              style={styles.textInput}
              returnKeyType='go'
              onChangeText={(donvigui) => this.setState({ donvigui })}
              value={this.state.donvigui}
            />
            <Text style={styles.title}>Mức độ: </Text>
            <TextInput
              style={styles.textInput}
              returnKeyType='go'
              onChangeText={(mucdo) => this.setState({ mucdo })}
              value={this.state.mucdo}
            />
            <Text style={styles.title}>Vị trí: </Text>
            <TextInput
              style={styles.textInput}
              returnKeyType='go'
              onChangeText={(vitri) => this.setState({ vitri })}
              value={this.state.vitri}
            />
            <Button
              title='Tạo'
              titleStyle = {styles.buttonTitle}
              buttonStyle={styles.button}
              containerStyle={{ alignItems: 'center' }}
              onPress={() => { this.addWarning() }}
            />
            </KeyboardAvoidingView>
          </ScrollView>
        </View>
      </SafeAreaView>
    )
  }
}

export default CreateWarningBody
