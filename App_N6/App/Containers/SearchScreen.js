//Thông tin chi tiết của cảnh báo
import React, { Component } from 'react';
import SearchBody from '../Components/SearchBody';
class SearchScreen extends Component {

    render() {
        return (
                <SearchBody {...this.props}/>
        );
    }
}
export default SearchScreen;