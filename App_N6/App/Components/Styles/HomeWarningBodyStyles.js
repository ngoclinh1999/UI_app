import { Dimensions, StyleSheet } from 'react-native'

const HeightScreen = Dimensions.get('screen').height
const WidthScreen = Dimensions.get('screen').width

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    flex: 9,
    flexDirection: 'column',
    marginLeft: WidthScreen * 0.05,
    width: WidthScreen * 0.9,
  },
  bodyBottom:{ 
    marginTop: HeightScreen * 0.02, 
    height: HeightScreen * 0.73
  },
  buttonGroupContainerStyle: {
    height: HeightScreen * 0.05,
    elevation: 3,
    borderRadius: 5
  },
  buttonGroupTextStyle: {
    fontSize: 20,
    color: 'gray'
  },
 
})
