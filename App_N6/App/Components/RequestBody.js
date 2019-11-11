import React, { Component } from 'react'
import { View, FlatList, SafeAreaView, StatusBar, BackHandler } from 'react-native'
import Modal from 'react-native-modal'
import { ButtonGroup } from 'react-native-elements'
import RequestBodyStyle from './Styles/RequestBodyStyle'
import RequestItem from './RequestItem'
import CustomHeader from './CustomHeader'

export default class RequestBody extends Component {

  constructor (props) {
    super(props)
    this.state = {
      selectedIndex: 0,
      data: [],
      sortedData: []
    }
    this.updateIndex = this.updateIndex.bind(this);
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
  }
  componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
  }
  componentWillUnmount(){
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick)
  }
  handleBackButtonClick() {
    this.props.navigation.goBack(null)
    return true;
  }
  updateIndex (selectedIndex) {
    this.setState({selectedIndex})
  }
  render () {
    let items = Object.values(this.state.sortedData)
    const buttons = ['Tất cả', 'Mới nhất', 'Phổ biến']
    return (      
      <SafeAreaView style={RequestBodyStyle.safeAreaView}>
       <StatusBar translucent = {true} backgroundColor='transparent' barStyle="dark-content"/>
        <CustomHeader
          {...this.props}
          title={'Phản ánh kiến nghị'}
          add={'Yes'}
          admin ={'No'}
        />
        <View style={RequestBodyStyle.container}>
          <View style={RequestBodyStyle.buttonContainer}>
            <ButtonGroup
              containerStyle={RequestBodyStyle.containerButtonGroup}
              onPress={this.updateIndex}
              selectedIndex={this.state.selectedIndex}
              underlayColor='gray'
              selectedTextStyle={RequestBodyStyle.selectedTextStyle}
              buttons={buttons}
              textStyle={RequestBodyStyle.buttonGroupTextStyle}
            />
          </View>
         
          <View style={RequestBodyStyle.containerFlatItem}>
            <FlatList
              {...this.props}
              data={items}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item, index }) => {
                return <RequestItem {...this.props} item={item} index={index} />
              }}
            />
          </View>
        </View>
      </SafeAreaView>
    )
  }
}

