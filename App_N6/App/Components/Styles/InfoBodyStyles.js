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
  segif: {
    fontSize: 18,
    marginBottom: 10,
    height: 30,
    color: 'black',
    borderBottomWidth : 0.1,
  },
  spacechangepass: {
    height:HeightScreen*0.3,
    backgroundColor: '#f3f4f7',
  }, 
  changepass: {
    width : WidthScreen*0.95,
    height : 35,
    marginLeft : 10,
    borderRadius : 12,
    marginTop : 10,
  },
  segif1: {
    fontSize: 18,
    marginBottom: 10,
    height: 30,
    color: 'black'
  }
})