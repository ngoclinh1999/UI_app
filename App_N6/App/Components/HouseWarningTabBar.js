import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {Icon} from 'react-native-elements';

export default class HouseWarningTabBar extends Component {
  icons = [];

  constructor(props) {
    super(props);
    this.icons = [];
  }

  render() {
    return (
        <View style={styles.tabs}>
      {this.props.tabs.map((tab, i) => {
        return (
              <TouchableOpacity key={tab} onPress={() => this.props.goToPage(i)} style={styles.tab}>
              <Icon
                name={tab}
                size={30}
                color={this.props.activeTab === i ? '#f57d00' : 'rgb(204,204,204)'}
                ref={(icon) => { this.icons[i] = icon; }}
              />
              <Text style = {[styles.text, {color: this.props.activeTab === i ? '#410093' : 'rgb(204,204,204)'}]}> {tab === 'warning' ? 'Cảnh báo' : 'Chuyên mục'} </Text>
              </TouchableOpacity>
        )
      })}  
    </View>
    )
  }
}

const styles = StyleSheet.create({
  tab: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 10,
  },
  tabs: {
    height: 45,
    flexDirection: 'row',
    paddingTop: 5,
    borderWidth: 1,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderBottomColor: 'rgba(0,0,0,0.05)',
  },
  text: {
      fontSize:20
  }
});

