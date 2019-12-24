import {StyleSheet} from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  body: {
    justifyContent: 'center', 
    alignItems: 'center',
    marginBottom: 10
  },
  title: {
    fontSize: 22,
    textAlign: 'left',
    color: '#546E7A',
    paddingLeft: 10,
    marginBottom: 5,
    marginTop: 10,
    fontWeight: 'bold'
  },
  text: {
    fontSize: 18,
    color: '#616161',
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
})