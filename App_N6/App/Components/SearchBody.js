import React, { Component } from 'react'

import { View, TextInput, Alert, StatusBar, Image, BackHandler } from 'react-native'
import { Button, Icon, Input } from 'react-native-elements'
import Style from './Styles/SearchBodyStyles'
import CustomHeader from './CustomHeader'
export default class SearchBody extends Component {
  constructor(props) {
    super(props)  
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
      <View>
       <StatusBar translucent = {true} backgroundColor='transparent' barStyle="dark-content"/>
        <CustomHeader 
          title={'Tìm kiếm'} 
          back={'Yes'} 
          add = {'No'} 
          admin ={'No'} 
          send={'No'}
          {...this.props}/>
       <View >       
         <TextInput
          style={Style.textinput}
          placeholder='Nhập từ khóa'
          placeholderTextColor='gray'
          Icon = "search"
         >
         </TextInput>
       </View>
        <View style={Style.spaceButton}>
          <Button
            style={Style.button}
            title='Tìm kiếm'
            onPress={() => {}}
          />
        </View>
      </View>
    )
  }
}
