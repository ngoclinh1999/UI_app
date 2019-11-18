// Body phần chuyên mục
import React, { Component } from 'react'
import { View, Text, SafeAreaView,StatusBar, BackHandler, Dimensions, TextInput, KeyboardAvoidingView,ToastAndroid } from 'react-native'
import styles from './Styles/HomeCategoriesBodyStyles'
import CategoriesList from './CategoriesList'
import CustomHeader from './CustomHeader'
import { Button, Icon } from 'react-native-elements';
import Modal from 'react-native-modal'
class HomeCategoriesBody extends Component {
  constructor(props) {
    super(props)  
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    this.state={
      chuyenmuc: '',
      isVisible: false,
    }
  }
  componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
  }
  componentWillUnmount() { 
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
  }
  handleBackButtonClick() {
    
    this.props.navigation.navigate('HomeScreen');
    return true;
  }
  toggleModal = () => {
    if(this.state.chuyenmuc == '')
    {
      ToastAndroid.showWithGravity(
        'Trống!',
        ToastAndroid.SHORT,
        ToastAndroid.CENTER,
      )
    }
    else
    {
    this.setState({
      chuyenmuc: '',
      isVisible: false
    })
    ToastAndroid.showWithGravity(
      'Tạo thành công!',
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
    )
    }
    
  };
  myCallback = (dataFromChild) => {
    this.setState({ isVisible: dataFromChild });
  }
  render () {
    const WidthScreen = Dimensions.get('window').width;
    const HeightScreen = Dimensions.get('screen').height;
    return (
      <SafeAreaView style={styles.container}>
       <StatusBar translucent = {true} backgroundColor='transparent' barStyle="dark-content"/>
        <CustomHeader title={'Thông tin cảnh báo'} add={'Yess'} admin ={'Yes'} send={'No'} callbackFromParent={this.myCallback} {...this.props} />
        <View style={styles.body}>
          <View style={styles.bodyTop}>
            <Text style={styles.title}>Danh sách chuyên mục: </Text>
          </View>
          <View style={styles.bodyBottom}>
            <CategoriesList {...this.props} />
          </View>
        </View>
        <Modal
                style = {styles.modalStyle}
                isVisible = {this.state.isVisible}
                animationIn={'zoomIn'}
                animationOut={'zoomOut'}
                animationInTiming={800}
                animationOutTiming={600}
                //backdropColor= 'transparent'
                deviceHeight = {HeightScreen}
                avoidKeyboard = {true}
                onBackButtonPress ={() => {this.setState({isVisible: false})}}
           >
                <View style = {styles.viewStyle}>
                    <Text style={styles.text}>
                        Tạo chuyên mục
                    </Text>
                    <TextInput
                        style= {styles.textInput}
                        onChangeText = {(chuyenmuc)=> this.setState({chuyenmuc})}
                        value = {this.state.chuyenmuc}
                    />
                    <Button buttonStyle= {styles.buttonStyle}
                        title = 'Tạo'
                        onPress={()=>this.toggleModal()}
                    />
                    <View style = {styles.iconContainerStyle}>
                      <Icon
                          name='clear'
                          size={30}
                          color='red'
                          underlayColor={'transparent'}
                          iconStyle={styles.iconStyle}
                          onPress={() => {
                            this.setState({isVisible: false})
                          }}
                        />
                    </View>
                </View>
                
           </Modal> 
      </SafeAreaView>
    )
  }
}

export default HomeCategoriesBody
