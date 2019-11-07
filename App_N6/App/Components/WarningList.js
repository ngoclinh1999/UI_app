// FlatList cảnh báo
import React, { Component } from 'react'
import { View, FlatList } from 'react-native'
import styles from './Styles/WarningListStyles'
import { TTCB_LIST } from '../Data/DataTest'
import WarningFlatList from './WarningFlatList'
class WarningList extends Component {
 
  render () {
    const data = this.props.items
    return (
      <View>
        <FlatList
          {...this.props}
          data={data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => {
            return <WarningFlatList item={item} index={index} {...this.props}/>
          }}
        />
      </View>
    )
  }
}

export default WarningList
