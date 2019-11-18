// FlatList cảnh báo
import React, { Component } from 'react'
import { View, FlatList } from 'react-native'
import styles from './Styles/WarningListStyles'
import { TTCB_LIST,PAKN_LIST } from '../Data/DataTest'
import WarningFlatList from './WarningFlatList'
class WarningList extends Component {
 
  render () {
    return (
      <View>
        <FlatList
              {...this.props}
              data= {TTCB_LIST}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item, index }) => {
                return <WarningFlatList {...this.props} item={item} index={index} />
              }}
            />
      </View>
    )
  }
}

export default WarningList
