import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity, Button } from 'react-native'
import Modal from 'react-native-modal'
import RequestItemStyle from './Styles/RequestItemStyle'

export default class RequestItem extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isModalVisible: false
    }
  }

  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  }
  componentWillUnmount() {
    this.setState({
      isModalVisible: false
    })
  }

  render() {
    let img = (this.props.item.data.avatarSource == null || this.props.item.data.avatarSource == '') ? null :
      <TouchableOpacity
        onPress={this.toggleModal}
      >
        <Image
          source={{ uri: 'data:image/jpeg;base64,' + this.props.item.data.avatarSource }}
          style={{
            width: (this.props.item.data.response == null ? 200 : this.props.item.data.response.width * 0.5),
            height: (this.props.item.data.response == null ? 200 : this.props.item.data.response.height * 0.5),
            borderRadius: 5
          }}
        />
        <Modal 
          isVisible={this.state.isModalVisible}
          hasBackdrop={true}
          backdropColor={'#2d3436'}
          onBackButtonPress={this.toggleModal}
        >
          <TouchableOpacity
            onPress={this.toggleModal}>
            <View style={RequestItemStyle.modalViewContainer}>
              {/* <Text style={RequestItemStyle.modalText}>Bấm nút BACK để quay trở lại màn hình</Text> */}
              <Image
                source={{ uri: 'data:image/jpeg;base64,' + this.props.item.data.avatarSource }}
                style={{
                  width: (this.props.item.data.response == null ? 200 : this.props.item.data.response.width * 0.5),
                  height: (this.props.item.data.response == null ? 200 : this.props.item.data.response.height * 0.5),
                  borderRadius: 5
                }}
              />
            </View>
          </TouchableOpacity>
          
        </Modal>
      </TouchableOpacity>

    return (
      <View style={RequestItemStyle.container}>
        <View style={RequestItemStyle.addLine}></View>
        <TouchableOpacity
          style={RequestItemStyle.container}
          underlayColor='transparent'
          onPress={() => {
            this.props.navigation.push('RequestDetailScreen', { items: this.props.item.data })
            // requestDetailRef.child(this.props.item.data).update({
            //   'view': this.props.item.data.view + 1
            // })
          }}
        >
          <View style={RequestItemStyle.viewStyle}>
            <View style={RequestItemStyle.imageContainer}>
              <Text style={RequestItemStyle.titeText}>{this.props.item.data.title}</Text>
              {img}
            </View>
            <Text style={RequestItemStyle.text}>Người gửi: {this.props.item.data.sender}</Text>
            <Text style={RequestItemStyle.contentText}>Nội dung: {this.props.item.data.content}</Text>
            {/* <Text style={RequestItemStyle.text}>Lượt xem: {this.props.item.data.view}</Text> */}
            <View style={RequestItemStyle.bottomContainer}>
              <Text style={RequestItemStyle.text}>{this.props.item.data.time}</Text>
              <Text style={RequestItemStyle.statusText}>{this.props.item.data.status}</Text>
            </View>
          </View>

          <View style={RequestItemStyle.absoluteContainer}>
            <Text style={RequestItemStyle.absoluteText}>{this.props.item.data.category}</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}
