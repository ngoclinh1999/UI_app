import React, { Component } from 'react'
import { Text, View, TouchableOpacity, Image } from 'react-native'
import styles from './Styles/WarningFlatListStyles'
export default class WarningFlatList extends Component {
  constructor () {
    super()
  }
  Count () {
    this.props.navigation.push('WarningDetailsScreen')
  }
  render () {
    return (
      <View
        style={{
          borderTopColor: 'white',
          borderTopWidth: this.props.index > 0 ? 15 : 7
        }}
      >
        <TouchableOpacity style={styles.viewStyle} onPress={() => this.Count()}>
          <View>
            <View style={{ alignItems: 'center' }}>
              <Text style={styles.title}>{this.props.item.tieude}</Text>
            </View>
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <View style={{ flex: 5 }}>
                <Text style={styles.text1}>{this.props.item.donvigui}</Text>
              </View>
              <View
                style={{
                  flex: 5,
                  justifyContent: 'flex-end',
                  alignItems: 'flex-end',
                  paddingRight: 10
                }}
              >
                <Text style={styles.text1}>{this.props.item.thoigiangui}</Text>
              </View>
            </View>
          </View>
          <View style={styles.position}>
            <Image
             source={(
              this.props.index ==0) ? require('../Images/CB-thoitiet.jpg'):
              (this.props.index ==1)?require('../Images/CB-xd1.jpg'):
              (this.props.index ==2)?require('../Images/CB-xd2.jpg'):
              (this.props.index ==3)?require('../Images/CB_gthong.jpg'):
              (this.props.index ==4)?require('../Images/CB-thoitiet.jpg'):
              require('../Images/PA_moitruong.jpg')
              }
              style={styles.media}
            />
          </View>
        </TouchableOpacity>
        <View
          style={{
            position: 'absolute',
            top: -10,
            left: 5,
            width: 170,
            height: 23,
            backgroundColor: '#00FFFF',
            alignItems: 'center'
          }}
        >
          <Text style={styles.text}>{this.props.item.chuyenmuc}</Text>
        </View>
      </View>
    )
  }
}
