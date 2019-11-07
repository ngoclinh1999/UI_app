//Thông tin chi tiết của cảnh báo
import React, { Component } from 'react';
import SignUpBody from '../Components/SignUpBody';
class SignUpScreen extends Component {

    render() {
        return (
                <SignUpBody {...this.props}/>
        );
    }
}
export default SignUpScreen;