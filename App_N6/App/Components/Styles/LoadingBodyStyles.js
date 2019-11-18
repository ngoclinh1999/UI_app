import {StyleSheet, Dimensions} from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#4FC3F7'
    },
    view:{
        marginBottom: Dimensions.get('window').height*0.3,
        justifyContent: 'center',
        alignItems: 'center',
    },
})