import { StyleSheet, Dimensions } from 'react-native'

const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height

export default StyleSheet.create({
    modalViewContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2.5 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 10
    },
    addLine: {
        height: 15
    },
    text: {
        fontSize: 16,
        fontWeight: '400',
        color: 'black',
        paddingLeft: 10,
        marginBottom: 3
    },
    modalText: {
        fontSize: 16,
        fontWeight: '400',
        fontStyle: 'italic',
        color: '#ecf0f1',
        paddingLeft: 10,
        marginBottom: 30
    },
    viewStyle: {
        flex: 1,
        flexDirection: 'column',
        marginBottom: 10,
        backgroundColor: '#F7F7F7',
        borderRadius: 14
    }, 
    titeText: {
        flex: 1,
        fontSize: 20,
        marginTop: 20,
        marginBottom: 20,
        fontWeight: 'bold',
        fontFamily: 'Rubik',
        color: 'black',
        textAlign: 'center'
    },
    bottomContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    statusText: {
        fontSize: 16,
        color: 'black',
        fontStyle: 'italic',
        marginRight: 10
    },
    contentText: {
        fontSize: 16,
        color: 'black', 
        fontWeight: 'normal',
        marginLeft: 10,
        marginBottom: 20
    },
    absoluteText: {
        backgroundColor: '#3498db',
        fontFamily: 'Rubik',
        color: 'white',
        paddingLeft: 5,
        paddingRight: 5
    },
    absoluteContainer: {
        position: 'absolute',
        top: -10,
        left: 10
    },
    imageContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})