import { Dimensions, StyleSheet } from 'react-native'

const HeightScreen = Dimensions.get('window').height
const WidthScreen = Dimensions.get('screen').width

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  body: {
    marginTop: HeightScreen*0.05,
    marginLeft: WidthScreen * 0.075,
    marginRight: WidthScreen * 0.075,
    height: HeightScreen * 0.8
  }
})
