import { Dimensions, StyleSheet } from 'react-native'
const HeightScreen = Dimensions.get('window').height
const WidthScreen = Dimensions.get('window').width

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  body: {
    flex: 7
  },
  title: {
    fontSize: 22,
    textAlign: 'left',
    color: 'black',
    paddingLeft: 10,
    marginBottom: 5,
    marginTop: 10,
    fontWeight: 'bold'
  },
  text: {
    fontSize: 18,
    color: 'black',
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 2
  },
  modalStyle: {
    flex:1,
      backgroundColor: 'transparent',
      justifyContent: 'center',
      alignItems: 'center',
  },
  viewMedia: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  media: {
    width: 300,
    height:300
  },
  bottom: {
    height: HeightScreen*0.05
  },
  iconStyle: {
    position: 'absolute',
    right: 10,
    top: -15
  }
})
