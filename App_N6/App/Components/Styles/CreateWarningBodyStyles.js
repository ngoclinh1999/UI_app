import { Dimensions, StyleSheet } from 'react-native'

const HeightScreen = Dimensions.get('window').height
const WidthScreen = Dimensions.get('window').width

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  body: {
    flex: 8,
    marginLeft: WidthScreen * 0.05
  },
  bottom: {
    flex: 0.5,
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 5
  },
  textInput: {
    marginBottom: HeightScreen * 0.02,
    width: WidthScreen * 0.9,
    borderBottomWidth: 0.5,
    paddingLeft: 10
  },
  title: {
    fontSize: 20,
    textAlign: 'left',
    color: 'black'
  },
  piker: {
    height:  HeightScreen * 0.05,
    width: WidthScreen * 0.9
  },
  button: {
    marginTop: HeightScreen*0.05,
    marginBottom: HeightScreen*0.05,
    width: WidthScreen*0.45,
    height: HeightScreen*0.065,
    alignItems: 'center'
  },
  buttonTitle: {
    fontSize:25
  },
  buttonMedia:{
    marginTop: HeightScreen*0.05,
    marginBottom: HeightScreen*0.02,
    width: WidthScreen*0.6,
    height: HeightScreen*0.05,
    alignItems: 'center'
  },
  viewMedia: {
    alignItems:'center',
    justifyContent: 'center',
    marginBottom: HeightScreen*0.03,
  }
})
