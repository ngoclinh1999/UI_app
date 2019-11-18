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
    render() {
        return (
            <SafeAreaView style = {styles.container}>
                <CustomHeader title={'Tạo mật khẩu mới'} add={'No'} admin ={'No'} send={'No'} {...this.props} />
                <View style = {styles.form}>
                    <Text style = {styles.tittle}>Mật khẩu mới:</Text>
                    <Input inputContainerStyle = {styles.containerInput} secureTextEntry/>
                    <Text style = {styles.tittle}>Nhập lại mật khẩu:</Text>
                    <Input inputContainerStyle = {styles.containerInput} secureTextEntry/>
                    
                </View>
                    <Button 
                        title= 'Xác nhận' 
                        type = 'solid' 
                        containerStyle= {styles.buttonStyle} 
                        buttonStyle= {styles.button}
                        titleStyle = {{fontSize: 22}}
                        onPress= {()=> {this.props.navigation.navigate('LoginScreen')}}
                        />
            </SafeAreaView>
        );
    }
}

export default CreateNewPassBody;