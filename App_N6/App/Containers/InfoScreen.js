import React, { Component } from 'react'
import InfoBody from '../Components/InfoBody'
class InfoScreen extends Component {

    render() {
        return (
                <InfoBody {...this.props}/>
        );
    }
}
export default InfoScreen;