import React from 'react'
import { View, Image, ActivityIndicator } from 'react-native'

import styles from './Styles/LoadingBodyStyles'
export default class Loading extends React.Component {

  componentDidMount() {
    setTimeout(()=>{
      this.props.navigation.navigate('LoginScreen');
    },2000)
  }
  render() {
    return (
      <View style={styles.container}>
        <View style = {styles.view}>
          <Image
            source= {require('../Images/Logo.png')}
            />
        </View>
        <ActivityIndicator size= {70} />
      </View>
    )
  }
}
