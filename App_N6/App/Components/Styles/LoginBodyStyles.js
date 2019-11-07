import { Dimensions, StyleSheet } from 'react-native'
const WidthScreen = Dimensions.get('window').width
const HeightScreen = Dimensions.get('window').height
export default StyleSheet.create({
  wrap: {
    flex: 1,
    backgroundColor: '#f4f7f9',
    width:WidthScreen,
    height:HeightScreen
  },
  image: {
    marginTop:HeightScreen*0.05,
    justifyContent:'center',
    alignItems:'center',
  },
  logo: {
    width:150,
    height:150
  },
  input: {
    height: HeightScreen * 0.06,
    width: WidthScreen * 0.8,
    marginTop: HeightScreen * 0.021,
    borderColor: 'gray',
    padding: 2,
    borderBottomWidth: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bewraped: {
    flex: 2,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 35,
    color: 'black',
    textAlign: 'center',
    marginTop: HeightScreen * 0.07,
    marginBottom: HeightScreen * 0.04
  },
  button: {
    marginTop: HeightScreen * 0.05,
    shadowRadius: 20
  },
  buttonstyle: {
    width: WidthScreen * 0.8,
    height: HeightScreen * 0.07
  }, 
  containtext: {
    flex: 1,
    width: WidthScreen,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: HeightScreen * 0.02,
    marginBottom:WidthScreen*0.1
  }
})
