import React, { Component } from 'react'
import { View, SafeAreaView, ScrollView, Text, BackHandler, Image } from 'react-native'
import RequestDetailBodyStyle from './Styles/RequestDetailBodyStyle'

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
    const data = this.props.navigation.getParam('items', 'NO-DATA')
    return (
      <SafeAreaView style={RequestDetailBodyStyle.container}>
        <View style={RequestDetailBodyStyle.body}>
          <ScrollView>

            <View>
              <Text style={RequestDetailBodyStyle.title}>Tiêu đề: </Text>
              <View>
                <Text style={RequestDetailBodyStyle.text}> {data.title} </Text>
              </View>
            </View>

            <View>
              <Text style={RequestDetailBodyStyle.title}>Chuyên mục: </Text>
              <View>
                <Text style={RequestDetailBodyStyle.text}>{data.category} </Text>
              </View>
            </View>

            <View>
              <Text style={RequestDetailBodyStyle.title}>Thời gian đăng: </Text>
              <View>
                <Text style={RequestDetailBodyStyle.text}>{data.time} </Text>
              </View>
            </View>

            <View>
              <Text style={RequestDetailBodyStyle.title}>Nội dung: </Text>
              <View>
                <Text style={RequestDetailBodyStyle.text}>{data.content} </Text>
              </View>
            </View>

            <View>
              <Text style={RequestDetailBodyStyle.title}>Hình ảnh: </Text>
              <View>
                <Image source={{ uri: 'data:image/jpeg;base64,' + data.avatarSource }} />
              </View>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    )
  }
}
