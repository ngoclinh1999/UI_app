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
                <Text style={styles.text}> Không dùng nước Viwasupco để nấu ăn </Text>
              </View>
            </View>
            <View>
              <Text style={styles.title}>Chuyên mục: </Text>
              <View>
                <Text style={styles.text}>Sức khoẻ người dân </Text>
              </View>
            </View>
            <View>
              <Text style={styles.title}>Thời gian đăng: </Text>
              <View>
                <Text style={styles.text}>15/10/2019 16:26 GMT+7  </Text>
              </View>
            </View>
            <View>
              <Text style={styles.title}>Nội dung: </Text>
              <View>
                <Text style={styles.text}>
                Chiều 15/10, tại cuộc họp báo về hiện tượng nước sạch có mùi lạ, Ủy ban Nhân dân Thành phố Hà Nội đã chính thức đưa ra khuyến cáo đối với người dân.

                Theo đó, trong thời gian trước mắt, khi Công ty Cổ phần đầu tư nước sạch sông Đà chưa súc xả, thau được toàn bộ hệ thống nước tại các bể của gia đình, khu chung cư, các bể tăng áp, người dân có sử dụng nước thuộc vùng do Công ty Cổ phần Viwaco, Công ty Trách nhiệm hữu hạn Một thành viên nước sạch Hà Đông cung cấp, chỉ nên dùng nguồn nước này để tắm giặt, không sử dụng để nấu ăn, uống. Người dân muốn nấu ăn, uống tạm sẽ thời dùng nước chai, bình do các đơn vị khác cung cấp.

                Cùng với đó, để cung cấp kịp thời nước sạch cho người dân khu vực bị ảnh hưởng, Thành phố Hà Nội sẽ bố trí các xe téc của Công ty Nước sạch Hà Nội túc trực để sẵn sàng chở nước đến cung cấp cho người dân theo nhu cầu.
                 </Text>
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
                  source={require('../Images/nuocsach.jpg')}
                  style={styles.media}
                  resizeMode = 'contain' 
                />
                </View>
              </TouchableOpacity>
              </View>
            </View>
            <View>
              <Text style={styles.title}>Vị trí: </Text>
              <View>
                <Text style={styles.text}> Hà Nội </Text>
              </View>
            </View>
            <View>
              <Text style={styles.title}>Đơn vị gửi: </Text>
              <View>
                <Text style={styles.text}>Ủy ban Nhân dân Thành phố Hà Nội </Text>
              </View>
            </View>
            <View>
              <Text style={styles.title}>Lượt xem: </Text>
              <View>
                <Text style={styles.text}>150 </Text>
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
                  source={require('../Images/nuocsach.jpg')}
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
