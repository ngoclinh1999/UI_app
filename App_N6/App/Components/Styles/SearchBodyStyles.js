import { StyleSheet, Dimensions } from 'react-native'
export default (Style = StyleSheet.create({
  textinput: {
    color: 'black',
    height: 45,
    width: Dimensions.get('window').width - 60,
    borderWidth: 1,
    margin: 30,
    borderRadius: 16,
    marginBottom: 15,
    paddingLeft : 30
  },
  spaceButton: {
    alignItems: 'center',
    margin: 20
  },
  button: {
    height: 45,
    width: Dimensions.get('window').width*0.4,
    borderRadius: 10
  }
}))
