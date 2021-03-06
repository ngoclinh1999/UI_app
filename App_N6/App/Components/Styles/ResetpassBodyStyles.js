import { Dimensions, StyleSheet } from 'react-native'
const WithScreen = Dimensions.get('window').width
const HeightScreen = Dimensions.get('window').height
export default StyleSheet.create({
  wrap: {
    flex: 1,
  },
  input: {
    height: 45,
    width: WithScreen * 0.8,
    marginTop: HeightScreen * 0.005,
    borderColor: 'gray',
    borderBottomWidth: 1,
  },
  bewraped: {
    marginTop: 30,
    marginLeft: 20,
  },
  button: {
    marginTop: HeightScreen * 0.04,
    alignItems: 'center'
  },
  buttonstyle: {
    width: WithScreen * 0.4,
    height: 50, 
  },
})
