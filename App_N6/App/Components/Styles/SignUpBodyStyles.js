import { Dimensions, StyleSheet } from 'react-native'
const WithScreen = Dimensions.get('window').width
const HeightScreen = Dimensions.get('window').height
export default StyleSheet.create({
  wrap: {
    flex: 1
  },
  image: { 
    flex: 1
  },
  backIcon: {
    alignItems: 'flex-start',
    marginLeft: 10,
    marginTop: 20
  },
  input: {
    height: 40,
    width: WithScreen * 0.9,
    marginTop: HeightScreen * 0.005,
    borderColor: 'gray',
    marginLeft: 10 ,
    borderBottomWidth: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bewraped: {
    marginTop: 30,
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center'
  },
  button: {
    marginTop: HeightScreen * 0.02,
    padding: 10,
    shadowRadius: 20,
    shadowOpacity: 0.5
  },
  buttonstyle: {
    width: WithScreen * 0.8,
    height: HeightScreen * 0.07,
    
  },
  checkboxtext: {
    fontSize : 16,
    marginTop :11
  },
  checkboxspace :{
    flexDirection : 'row',
    marginTop :20
  }
})
