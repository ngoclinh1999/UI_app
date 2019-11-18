import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
      },
      titleWrapper: {
        flexDirection: 'row',
        flex: 2,
        marginTop: 10
      },
      space:{
        flex: 1.5,
      },
      title: {
        color: 'white',
        fontSize: 28,
        fontWeight: '200',
        paddingVertical: 10,
      },
      titles: {
        flex: 9,
        alignItems: 'center'
      },
      iconBack:{
        marginTop:15,
        flex: 1
      },
      inputWrapper: {
        flex: 7.5,
        flexDirection: 'column',
        paddingVertical: 20,
        paddingHorizontal: 20,
      },
      inputLabel: {
        color: 'gray',
        fontSize: 20,
        textAlign: 'center'
      },
      codeTop:{
        flex: 2
      },
      codeMid:{
        flex: 2
      },
      codeBottom:{
        flex: 6,
        flexDirection: 'row',
        justifyContent: 'center'
      },
      noCode:{
        color: '#9E9E9E',
        fontSize: 14,
        textAlign: 'center',
      }
})