import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import styles from './Styles/CategoriesFlatListStyles'

export default class FlatListItem extends Component {
  render () {
    return (
      <TouchableOpacity
        onPress={() =>{

        }}
        style={styles.viewStyle}
      >
        <Text style={styles.text}>{this.props.item.data.chuyenmuc}</Text>
      </TouchableOpacity>
      
    )
  }
}
