// FlatList chuyên mục
import React, { Component } from 'react'
import { Text, View, FlatList, TouchableOpacity } from 'react-native'
import CategoriesFlatList from './CategoriesFlatList'
class CategoriesList extends Component {
  render() {
    const data = this.props.items
    return (
      <View>
        <FlatList
          data={data}
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
