import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity, Button } from 'react-native'
import styles from './Styles/RequestItemStyle'

export default class RequestItem extends Component {
  constructor () {
    super()
  }
  Count(){
    this.props.navigation.push('RequestDetailScreen')
  }
    render () {
      return (
        <View style = {{borderTopColor:'white', borderTopWidth: this.props.index > 0 ? 15 :7}}>
          <TouchableOpacity
          style = {styles.viewStyle}
           onPress = { () => this.Count()}
          >
              <View>
              <View style ={{alignItems: 'center',}}>
              <Text style={styles.title}>{this.props.item.tieude}</Text>
              </View>
                <View style = {{flex:1, flexDirection: 'row'}}>
                  <View style = {{flex:5}}>
                    <Text style={styles.text1}>
                      {this.props.item.nguoigui}
                    </Text>
                  </View>
                  <View style = {{flex:5, justifyContent: 'flex-end', alignItems: 'flex-end', paddingRight: 10}}>
                    <Text style={styles.text1}>
                      {this.props.item.thoigiangui}
                    </Text>
                  </View>
                </View>
              
              </View>
              <View style = {styles.position}>
              <Image 
                    source={(
                      this.props.index ==0) ? require('../Images/PA-den.jpg'):
                      (this.props.index ==1)?require('../Images/PA-Thpham.jpg'):
                      (this.props.index ==2)?require('../Images/PA_canhquan1.jpg'):
                      (this.props.index ==3)?require('../Images/PA_moitruong.jpg'):
                      (this.props.index ==4)?require('../Images/PA_canhquan1.jpg'):
                      require('../Images/PA_moitruong.jpg')}
                    style={styles.media}
                  />
              </View>
              
          </TouchableOpacity>
          <View style = {{position: 'absolute', top: -10, left: 5, width: 170, height: 23, backgroundColor: '#00FFFF', alignItems: 'center'}}>
              <Text style={styles.text}>{this.props.item.chuyenmuc}</Text>
              </View>
        </View>
      )
    }
}
