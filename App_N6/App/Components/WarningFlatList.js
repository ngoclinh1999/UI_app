import React, { Component } from 'react'
import { Text, View, TouchableOpacity, Image } from 'react-native'
import styles from './Styles/WarningFlatListStyles'
export default class WarningFlatList extends Component {
  constructor () {
    super()
  }
  Count(){
    this.props.navigation.push('WarningDetailsScreen', {items : this.props.item.data})
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
              <Text style={styles.title}>{this.props.item.data.tieude}</Text>
              </View>
                <View style = {{flex:1, flexDirection: 'row'}}>
                  <View style = {{flex:5}}>
                    <Text style={styles.text1}>
                      {this.text}
                    </Text>
                  </View>
                  <View style = {{flex:5, justifyContent: 'flex-end', alignItems: 'flex-end', paddingRight: 10}}>
                    <Text style={styles.text1}>
                      {this.props.item.data.time}
                    </Text>
                  </View>
                </View>
              
              </View>
              <View style = {styles.position}>
              <Image 
                    source={ source = { uri: 'data:image/jpeg;base64,' + this.props.item.data.avatarSource }}
                    style={styles.media}
                  />
              </View>
              
          </TouchableOpacity>
          <View style = {{position: 'absolute', top: -10, left: 5, width: 170, height: 23, backgroundColor: '#00FFFF', alignItems: 'center'}}>
              <Text style={styles.text}>{this.props.item.data.chuyenmuc}</Text>
              </View>
        </View>
      )
    }
  }
