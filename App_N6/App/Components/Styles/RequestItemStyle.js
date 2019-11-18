import { Dimensions,StyleSheet } from 'react-native'
export default StyleSheet.create({
  text: {
    fontSize: 16,
    color: 'black',
    paddingLeft: 10,
    marginBottom: 3
  },
  text1: {
    fontSize: 16,
    color: 'gray',
    paddingLeft: 10,
    marginBottom: 3
  },
  title: {
    marginTop: 150,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 3
  },
  viewStyle: {
    flex: 1,
    flexDirection: 'column',
    borderRadius: 10,
    backgroundColor: '#F7F7F7'
  },
  media: {
    height: 150,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    width: Dimensions.get('window').width*0.9
  },
  position: {
    position: 'absolute',
  }
})
