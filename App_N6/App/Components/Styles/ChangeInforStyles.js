import { Dimensions, StyleSheet, } from 'react-native'
const WidthScreen = Dimensions.get('window').width
const HeightScreen = Dimensions.get('window').height

export default styles = StyleSheet.create({
  container: {
    flex: 1
  },
  spaceavatar: {
    alignItems: 'center',
    backgroundColor : 'white',
    height : HeightScreen *0.35,
    marginBottom :15,
    borderBottomWidth : 0.5
  },
  avatar: {
    width: 140,
    height: 140,
    marginTop : 40,
    borderRadius: 40
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
    height: 30,
    color: 'black',
  },
  spacechangepass: {
    marginTop: 10,
    height:HeightScreen*0.3,
    alignItems: 'center'
  }, 
  changepass: {
    width : WidthScreen*0.4,
    height : 50,
    marginLeft : 10,
    borderRadius : 5,
    marginTop : 10,
  },
  segif1: {
    fontSize: 18,
    marginBottom: 10,
    height: 30,
    color: 'black'
  },
  textInput: {
    width: WidthScreen * 0.55,
    height: 30,
    borderWidth: 0.5,
    paddingLeft: 10,
  }
})