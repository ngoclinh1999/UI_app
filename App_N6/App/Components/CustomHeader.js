import React, {Component} from 'react';
import styles from './Styles/CustomHeaderStyles';
import {Header, Icon} from 'react-native-elements';

class Back extends Component {
  render() {
    const title = this.props.title
    return (
      <Icon
        name="arrow-back"
        type="AntDesign"
        size={25}
        color="white"
        underlayColor="transparent"
        onPress={() => {
          if (title == 'Thông tin cảnh báo'|| title == 'Phản ánh kiến nghị') {
              return this.props.navigation.navigate('HomeScreen')
            } else return this.props.navigation.goBack()
        }}
      />
    );
  }
}

class Add extends Component {
  render() {
    const title = this.props.title
    const add = this.props.add
    return (
      <Icon
        name="add"
        type="AntDesign"
        size={25}
        color="white"
        underlayColor="transparent"
        onPress={() => {
          if (title == 'Thông tin cảnh báo') {
              if(add == 'Yes') {return this.props.navigation.navigate('CreateWarningScreen')}
              else if(add == 'Yess') {
                  this.iVisible = true
                  return this.props.callbackFromParent(this.iVisible)
                }
            } else if (title == 'Phản ánh kiến nghị') {
              return this.props.navigation.navigate('CreateRequestScreen')
            }
        }}
      />
    );
  }
}
export default class CustomHeader extends Component {
  render() {
    const title = this.props.title;
    const add = this.props.add;
    const admin = this.props.admin;

    if (add === 'No') {
      return (
        <Header
          centerComponent={{text: title, style: styles.titleStyle }}
          leftComponent={<Back {...this.props} />}
          containerStyle={styles.header}
        />
      );
    } else {
      if (admin === 'No' && title === 'Thông tin cảnh báo') {
        return (
          <Header
            centerComponent={{text: title, style: styles.titleStyle }}
            leftComponent={<Back {...this.props} />}
            containerStyle={styles.header}
          />
        )
      } else {
        return (
          <Header
            centerComponent={{text: title, style: styles.titleStyle }}
            leftComponent={<Back {...this.props} />}
            rightComponent={<Add {...this.props} />}
            containerStyle={styles.header}
          />
        )
      }
    }
  }
}