import { Dimensions, StyleSheet } from 'react-native'
const WidthScreen = Dimensions.get('window').width
const HeightScreen=Dimensions.get('window').height
export default StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    width: '100%',
    height: '100%',
    flexDirection: 'column'
  },
  top:{
    flex: 1,
    flexDirection: 'row',
    marginLeft: 20,
    marginTop: 30,
    marginRight:20
  },
  avatar: {
    flex:7
  },
  body: {
    flex: 8,
    flexDirection: 'column-reverse'
  },
  buttonBottom: {
    flex: 6,
    flexDirection: 'row'
  },
  iconStyle: {
    width:60,
    height:60,
    borderRadius:10,
    flex: 3
  },
  text: {
    marginTop:20,
    fontSize: 16,
    color: '#212121',
    textAlign: 'center'
  },
  signout: {
    alignItems: 'center',
    marginRight: 10,
  }
})
