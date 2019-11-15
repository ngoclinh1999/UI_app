//Tạo cảnh báo
import React, { Component } from 'react'
import CreateWarningBody from '../Components/CreateWarningBody'
class CreateWarningScreen extends Component {

    render() {
        return (
            <CreateWarningBody {...this.props}/>
        );
    }
}

export default CreateWarningScreen;