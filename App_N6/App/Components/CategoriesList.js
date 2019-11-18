// FlatList chuyên mục
import React, { Component } from 'react'
import { Text, View, FlatList, TouchableOpacity } from 'react-native'
import CategoriesFlatList from './CategoriesFlatList'
import {Category_LIST} from '../Data/DataTest'
class CategoriesList extends Component {
  render() {
    return (
      <View>
        <FlatList
          data={Category_LIST}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => {
            return (
              <CategoriesFlatList item={item} index={index} {...this.props} />
            )
          }}
        />
      </View>
    )
  }
}

export default CategoriesList
