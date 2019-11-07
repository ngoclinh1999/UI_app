import { Dimensions, StyleSheet } from 'react-native'

const HeightScreen = Dimensions.get('screen').height
const WidthScreen = Dimensions.get('window').width

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    flex: 8,
    flexDirection: 'column'
  },
  bodyTop: {
    marginTop: WidthScreen * 0.03,
    marginBottom: WidthScreen * 0.03,
    marginLeft: WidthScreen * 0.05,
  },
  bodyBottom: {
    marginTop: HeightScreen * 0.05,
    marginLeft: WidthScreen * 0.05,
    marginRight: WidthScreen * 0.05,
    //height: HeightScreen * 0.6
  },
  title: {
    fontSize: 20,
    textAlign: 'left'
  },
  modalStyle: {
    flex:1,
      backgroundColor: 'transparent',
      padding: 20,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
      borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  viewStyle: {
    backgroundColor: 'white',
    padding: 20,
    alignItems: 'center',
    borderRadius: 10,
    width: WidthScreen*0.75,
    height: HeightScreen*0.3
  },
  text: {
    fontSize: 20,
    color: 'black',
    fontWeight:'bold',
    justifyContent:'center'
  },
  textInput:{
    width: WidthScreen*0.6,
    height: HeightScreen*0.06,
    marginTop:HeightScreen*0.05,
    marginBottom:HeightScreen*0.05,
    borderWidth: 1,
    padding: 5
  },
  buttonStyle: {
    width: WidthScreen*0.4,
    height: HeightScreen*0.06
  },
  iconContainerStyle: {
    position: 'absolute',
    top: -10,
    right: -10
  },
  iconStyle:{
    backgroundColor: 'white',
    borderRadius:15
  }
})
