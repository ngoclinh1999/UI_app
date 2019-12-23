import React, { Component } from 'react';
import {
    View,
    Text,
    SafeAreaView,
    StatusBar,
    ToastAndroid,
    BackHandler,
    KeyboardAvoidingView,
} from 'react-native'
import styles from './Styles/CreatNewPassBodyStyles'
import { Button, Input } from 'react-native-elements'
import CustomHeader from './CustomHeader'
class CreateNewPassBody extends Component {
    constructor(){
        super();
        this.state = {
            newpass1: '',
            newpass2: ''
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
    updatePass(){
        const {newpass1, newpass2} = this.state;
        if(newpass1 =='' || newpass2 == '') {
            ToastAndroid.showWithGravity(
                'Điền đầy đủ mật khẩu',
                ToastAndroid.SHORT,
                ToastAndroid.BOTTOM
              )
        }
        else {
            if(newpass1 != newpass2) {
                ToastAndroid.showWithGravity(
                    'Mật khẩu không khớp',
                    ToastAndroid.SHORT,
                    ToastAndroid.BOTTOM
                  )
            }
            else {
                ToastAndroid.showWithGravity(
                    'Thành công!',
                    ToastAndroid.SHORT,
                    ToastAndroid.BOTTOM
                );
                this.props.navigation.navigate('LoginScreen')
            }
        }
    }
    render() {
        return (
            <SafeAreaView style = {styles.container}>
                <CustomHeader title={'Tạo mật khẩu mới'} add={'No'} admin ={'No'} send={'No'} {...this.props} />
                <View style = {styles.form}>
                    <Text style = {styles.tittle}>Mật khẩu mới:</Text>
                    <Input 
                        inputContainerStyle = {styles.containerInput} 
                        secureTextEntry
                        eftIconContainerStyle = {{marginLeft: 0}}
                        leftIcon={{ type: 'AntDesign', name: 'lock', color:'#757575' }}
                        onChangeText={newpass1 => this.setState({ newpass1})}
                        value={this.state.newpass1}
                        />
                    <Text style = {styles.tittle}>Nhập lại mật khẩu:</Text>
                    <Input 
                        inputContainerStyle = {styles.containerInput} 
                        secureTextEntry
                        eftIconContainerStyle = {{marginLeft: 0}}
                        leftIcon={{ type: 'AntDesign', name: 'lock', color:'#757575' }}
                        onChangeText={newpass2 => this.setState({ newpass2 })}
                        value={this.state.newpass2}
                        />
                    
                </View>
                    <Button 
                        title= 'Xác nhận' 
                        type = 'solid' 
                        containerStyle= {styles.buttonStyle} 
                        buttonStyle= {styles.button}
                        titleStyle = {{fontSize: 22}}
                        onPress= {()=> {this.updatePass()}}
                        />
            </SafeAreaView>
        );
    }
}

export default CreateNewPassBody;