import React, { Component } from 'react'
import { View, SafeAreaView, ScrollView, Text, BackHandler, Image,StatusBar } from 'react-native'
import RequestDetailBodyStyle from './Styles/RequestDetailBodyStyle'
import CustomHeader from './CustomHeader'

export default class RequestDetailBody extends Component {
  constructor(props) {
    super(props)  
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this)
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
  
  render() {
    return (
      <SafeAreaView style={RequestDetailBodyStyle.container}>
        <StatusBar translucent={true} backgroundColor='transparent' />
        <CustomHeader
          title={'Chi tiết cảnh báo'}
          add={'No'}
          admin={'No'}
          send={'No'}
          {...this.props}
          />
        <View style={RequestDetailBodyStyle.body}>
          <ScrollView>

            <View>
              <Text style={RequestDetailBodyStyle.title}>Tiêu đề: </Text>
              <View>
                <Text style={RequestDetailBodyStyle.text}> 
                Kiến nghị về việc chậm trễ xin phiếu xác nhận tại sở tư pháp TP Hà Nội 
                </Text>
              </View>
            </View>

            <View>
              <Text style={RequestDetailBodyStyle.title}>Chuyên mục: </Text>
              <View>
                <Text style={RequestDetailBodyStyle.text}>Thủ tục hành chính</Text>
              </View>
            </View>

            <View>
              <Text style={RequestDetailBodyStyle.title}>Thời gian đăng: </Text>
              <View>
                <Text style={RequestDetailBodyStyle.text}>13:20:25, 01/11/19 </Text>
              </View>
            </View>

            <View>
              <Text style={RequestDetailBodyStyle.title}>Nội dung: </Text>
              <View>
                <Text style={RequestDetailBodyStyle.text}>
                Tôi gửi phán ánh này, xin trình bày một việc như sau: Vào ngày 24/5/2019, tôi có nộp hồ sơ xin cấp phiếu lý lịch tư pháp tại Sở Tư pháp thành phố Hà Nội, đã được tiếp nhận hồ sơ, cấp Phiếu nhận và hẹn trả hồ sơ hành chính (MS: 121034 24975). Theo thông tin ghi tại phiếu hẹn, ngày 7/6/2019 là ngày hẹn trả kết quả hồ sơ. Tuy nhiên, đến nay (22/8/2019), khi tôi đã rất nhiều lần gọi điện thoại theo số (024)3354.6151 theo hướng dẫn tại phiếu hẹn trả kết quả, nhưng tôi chỉ nhận được câu trả lời là chưa có kết quả lý do công an quận Hai Bà Trưng, viện kiểm soát nhân dân thành phố hà nội và Toà án TP Hà nội chưa có phản hồi đối với công văn của Sở Tư pháp về việc xác minh lý lịch của tôi. Do đó, phiếu lý lịch tư pháp không được trả kết quả. Việc không nhận được kết quả đúng hẹn đã làm ảnh hưởng rất lớn đến công việc của tôi ( Cụ thể là tôi đã bị công ty cho nghỉ việc 2 tháng nay với lý do chưa cung cấp được phiếu xác minh lý lịch của sở tư pháp nộp cho công ty ). Vì vậy, tôi gửi phản ánh, kiến nghị này đến Hệ thống, kính mong các cấp có thẩm quyền giúp tôi được cấp phiếu lý lịch tư pháp. (Tôi xin gửi kèm đây Phiếu nhận và hẹn trả hồ sơ hành chính được Sở Tư pháp cấp ngày 24/5/2019) Tôi xin chân thành cảm ơn!
                </Text>
              </View>
            </View>

            <View>
              <Text style={RequestDetailBodyStyle.title}>Hình ảnh: </Text>
              <View style = {{marginLeft: 30}}>
                <Image 
                source={require('../Images/demo.png')} 
                resizeMode = 'contain'
                />
              </View>
            </View>
            <View>
              <Text style={RequestDetailBodyStyle.title}>Người gửi: </Text>
              <View>
                <Text style={RequestDetailBodyStyle.text}> 
                Hoàng Thế Anh
                </Text>
              </View>
            </View>
            <View>
              <Text style={RequestDetailBodyStyle.title}>Địa chỉ người gửi: </Text>
              <View>
                <Text style={RequestDetailBodyStyle.text}> 
                325 tổ 42 Phường Vĩnh Tuy, Quận Hai Bà Trưng, Hà Nội.
                </Text>
              </View>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    )
  }
}
