
import React, { Component } from 'react'
import HomeBody from '../Components/HomeBody'
class HomeScreen extends Component {

    render() {
        return (
                <HomeBody {...this.props}/>
        )
    }
}
export default HomeScreen;