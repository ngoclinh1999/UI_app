import {StyleSheet, Dimensions} from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#3399FF'
    },
    view:{
        marginBottom: Dimensions.get('window').height*0.3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text1: {
        fontSize: 28   
    },
    text2: {
        fontSize: 28   
    }
})