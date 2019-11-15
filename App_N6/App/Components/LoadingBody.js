import React from 'react'
import { View, Text, ActivityIndicator } from 'react-native'

import styles from './Styles/LoadingBodyStyles'
export default class Loading extends React.Component {

  componentDidMount() {
    setTimeout(()=>{
      this.props.navigation.navigate('HomeScreen');
    },2000)
  }
  render() {
    return (
      <View style={styles.container}>
        <View style = {styles.view}>
          <Text style = {styles.text1}> Chào mừng bạn đến với</Text>
          <Text style = {styles.text2}> Đô thị thông minh</Text>
        </View>
        <ActivityIndicator size= {70} />
      </View>
    )
  }
}
