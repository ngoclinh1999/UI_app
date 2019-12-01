import { Dimensions, StyleSheet, } from 'react-native'
const WidthScreen = Dimensions.get('window').width
const HeightScreen = Dimensions.get('window').height

export default styles = StyleSheet.create({
  container: {
    flex: 1
  },
  spaceavatar: {
    alignItems: 'center',
    height : HeightScreen *0.35,
    marginBottom :15,
    borderBottomWidth : 0.5,
  },
  avatar: {
    width: 140,
    height: 140,
    marginTop : 40,
    borderWidth: 1,
    borderColor: '#29B6F6',
    
  },
  segif: {
    fontSize: 18,
    marginBottom: 10,
    height: 30,
    color: 'black',
    borderBottomWidth : 0.1,
  },
  segif1: {
    fontSize: 18,
    marginBottom: 10,
    height: 30,
    color: 'black'
  },
  menu: {
    position: 'absolute',
    right: 10,
    bottom: 10
  }
})