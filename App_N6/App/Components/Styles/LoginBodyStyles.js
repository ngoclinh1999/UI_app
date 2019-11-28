import {StyleSheet, Dimensions} from 'react-native'

const widths = Dimensions.get('window').width;

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    top:{
        flex: 4,
        backgroundColor: '#29B6F6',
        alignItems: 'center'
    },
    bottom:{
        flex: 6,
        backgroundColor: '#E0E0E0'
    },
    image:{
        width: 100,
        height: 100,
        borderRadius: 50,
        marginTop: 50
    },
    form: {
        backgroundColor: 'white', 
        width: widths*0.8, 
        height: 350, 
        position: 'absolute', 
        left: widths*0.1, 
        top: -60,
        borderRadius: 10,
        flexDirection: 'column',
        alignItems: 'center'
    },
    title:{
        fontSize: 28,
        fontWeight: '200',
        color: '#76FF03',
        marginTop: 10,
    },
    text1:{
        fontSize: 20,
        left: 10,
        fontWeight: '100',
        color: '#757575',
        marginTop: 15,
        marginRight: widths*0.6
    },
    text2:{
        fontSize: 20,
        left: 10,
        fontWeight: '100',
        color: '#757575',
        marginTop: 15,
        marginRight: widths*0.5
    },
    input: {
        width: widths*0.65,
        height: 50
    },
    containerButton: {
        marginTop: 15,
        width: widths*0.4,
        borderRadius: 5
    },
    button: {
        height: 50,
        backgroundColor: '#29B6F6'
    },
    containtext: {
        flexDirection: 'row'
    }
})