// Body thông tin chi tiết cảnh báo
import React, { Component } from 'react'
import { Dimensions,View, Text, SafeAreaView, ScrollView, StatusBar, BackHandler, Image, TouchableOpacity, Alert } from 'react-native'
import {Icon} from 'react-native-elements'
import styles from './Styles/WarningDetailsBodyStyles'
import CustomHeader from './CustomHeader'
import Modal from 'react-native-modal'
class WarningDetailsBody extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isVisible: false,
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
  render () {
    const data = this.props.navigation.getParam('items', 'NO-DATA')
    console.log(data)   
    return (
      <SafeAreaView style={styles.container}>
       <StatusBar 
        translucent = {true} 
        backgroundColor='transparent'
        hidden = {this.state.isVisible == true ? true : false}
        />
        <CustomHeader 
          title={'Chi tiết cảnh báo'} 
          add={'No'} 
          admin ={'No'} 
          send={'No'}
          {...this.props} />
        <View style={styles.body}>
          <ScrollView>
            <View>
              <Text style={styles.title}>Tiêu đề: </Text>
              <View>
                <Text style={styles.text}> {data.tieude} </Text>
              </View>
            </View>
            <View>
              <Text style={styles.title}>Chuyên mục: </Text>
              <View>
                <Text style={styles.text}>{data.chuyenmuc} </Text>
              </View>
            </View>
            <View>
              <Text style={styles.title}>Thời gian đăng: </Text>
              <View>
                <Text style={styles.text}>{data.thoigian} </Text>
              </View>
            </View>
            <View>
              <Text style={styles.title}>Nội dung: </Text>
              <View>
                <Text style={styles.text}>{data.noidung} </Text>
              </View>
            </View>
            <View>
              <Text style={styles.title}>Hình ảnh: </Text>
              <View style = {styles.viewMedia}>
              <TouchableOpacity
                onPress = {()=> {this.setState({isVisible : true})}}
              >
                <View >
                <Image 
                  source={ source = { uri: 'data:image/jpeg;base64,' + data.avatarSource }}
                  style={styles.media}
                  resizeMode = 'contain' 
                />
                </View>
              </TouchableOpacity>
              </View>
            </View>
            <View>
              <Text style={styles.title}>Mức độ: </Text>
              <View>
                <Text style={styles.text}>{data.mucdo} </Text>
              </View>
            </View>
            <View>
              <Text style={styles.title}>Vị trí: </Text>
              <View>
                <Text style={styles.text}>{data.vitri} </Text>
              </View>
            </View>
            <View>
              <Text style={styles.title}>Đơn vị gửi: </Text>
              <View>
                <Text style={styles.text}>{data.donvigui} </Text>
              </View>
            </View>
            <View>
              <Text style={styles.title}>Lượt xem: </Text>
              <View>
                <Text style={styles.text}>{data.luotxem} </Text>
              </View>
            </View>
            <View style={styles.bottom}></View>
          </ScrollView>
        </View>
        <Modal
            style = {styles.modalStyle}
            isVisible = {this.state.isVisible}
            animationIn={'zoomIn'}
            animationOut={'zoomOut'}
            animationInTiming={1500}
            animationOutTiming={1000}
            backdropOpacity = {1}
            deviceHeight = {Dimensions.get('screen').height}
            avoidKeyboard = {true}
            onBackButtonPress ={() => {this.setState({isVisible: false})}}
        >
                <View>
                <Image 
                  source={ source = { uri: 'data:image/jpeg;base64,' + data.avatarSource }}
                  style = {{width : Dimensions.get('window').width, height: Dimensions.get('window').height*0.5}}
                  resizeMode = 'contain'
                />
                </View>
                <View style={styles.iconStyle}>
                  <Icon
                    name='clear'
                    size={40}
                    color='white'
                    underlayColor={'transparent'}
                    onPress={() => {
                      this.setState({isVisible: false})
                    }}
                  />
                </View>
           </Modal> 
      </SafeAreaView>
    )
  }
}

export default WarningDetailsBody
