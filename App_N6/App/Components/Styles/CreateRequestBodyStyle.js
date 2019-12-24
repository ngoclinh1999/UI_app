import { StyleSheet, Dimensions } from 'react-native'

const SCREEN_WIDTH = Dimensions.get('window').width
const SCREEN_HEIGHT = Dimensions.get('window').height

export default StyleSheet.create({
  safeAreaViewContainer: {
  },
  scrollContainer: {

  },
  container: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center'
  },
  inlineText: {
    marginTop: 10,
    marginLeft: 15,
    marginRight: 15,
    color: '#546E7A',
    fontSize: 20,
    textAlign: 'left'
  },
  inlineTextExpand: {
    marginLeft: 15,
    marginRight: 15,
    color: '#546E7A',
    fontSize: 20,
    textAlign: 'left'
  },
  inlineTextInput: {
    color: 'black',
    paddingLeft: 5,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 0,
    borderBottomColor: '#95a5a6',
    borderBottomWidth: 1,
  },
  inlineSpace: {
    margin: 10,
  },
  inlineIcon: {
    width: 50,
    height: 50
  },
  pickerStyle: {
    height: 50,
    width: 300,
    marginLeft: 15,
    marginRight: 15
  },
  containerImagePicker: {
    marginTop: SCREEN_HEIGHT*0.05,
    marginBottom: SCREEN_HEIGHT*0.05,
    alignItems: 'center'
  },
  inlineImagePicker: {
  },
  inlineSpaceButton: {
    marginLeft: SCREEN_WIDTH * 0.2,
    marginRight: SCREEN_WIDTH * 0.2,
    marginTop: SCREEN_HEIGHT * 0.2
  },
  inlineButtonCreate: {
    backgroundColor: '#487eb0'
  },
  image: {
    width: 200,
    height: 200
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 5
  }
})