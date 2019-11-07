//Thông tin chi tiết của cảnh báo
import React, { Component } from 'react';
import LoginBody from '../Components/LoginBody'
class LoginScreen extends Component {

    render() {
        return (
                <LoginBody {...this.props}/>
        );
    }
}
export default LoginScreen;