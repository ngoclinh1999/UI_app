import { StyleSheet, Dimensions } from 'react-native'

const WIDTH = Dimensions.get('screen').width
const HEIGHT = Dimensions.get('screen').height

export default StyleSheet.create({
    safeAreaView: {
        flex: 1
    },
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        marginTop: 10,
    },
    containerButtonGroup: {
        height: HEIGHT * 0.05,
        width: WIDTH * 0.9,
        elevation: 3,
        borderRadius: 5,
    },
    containerHeaderButton: {
        margin: 5
    },
    containerFlatItem: {
        alignContent: 'center',
        marginTop: HEIGHT * 0.1,
        marginLeft: WIDTH * 0.05,
        marginRight: WIDTH * 0.05,
        height: HEIGHT * 0.7
    },
    buttonGroupTextStyle: {
        fontSize: 18,
        color: 'gray'
    },
    selectedTextStyle: {
        fontWeight: 'bold'
    },
    buttonContainer: {
        marginLeft: WIDTH*0.02
    }
})