import React, { Component } from 'react'
import HouseWarning from '../Components/HouseWarning'
class HouseWarningScreen extends Component {

    render() {
        return (
                <HouseWarning {...this.props}/>
        );
    }
}
export default HouseWarningScreen;