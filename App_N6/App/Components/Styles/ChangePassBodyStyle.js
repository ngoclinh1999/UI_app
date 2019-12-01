import { Dimensions, StyleSheet } from 'react-native'
const WithScreen = Dimensions.get('window').width
const HeightScreen = Dimensions.get('window').height
export default StyleSheet.create({
  wrap: {
    flex: 1
  },
  input: {
    height: 40,
    width: WithScreen * 0.7,
    marginTop: HeightScreen * 0.005,
    borderColor: 'gray',
    borderBottomWidth: 1,
  },
  bewraped: {
    marginTop: 20,
    flex: 1,
    alignItems: 'center',
    justifyContent:'center'
  },
  form:{
      marginLeft: 10,
      marginTop: 10
  },
  button: {
    marginTop: HeightScreen * 0.02,
    padding: 10,
    shadowRadius: 20,
    shadowOpacity: 0.5
  },
  buttonstyle: {
    width: WithScreen * 0.4,
    height: 50, 
  },
  text :{
    fontSize : 20, 
    marginRight : HeightScreen*0.8,
    marginTop:HeightScreen*0.5
  }

})