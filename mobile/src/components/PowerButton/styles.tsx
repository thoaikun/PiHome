import { Dimensions, StyleSheet } from 'react-native'
import color from '../../styles/color'

var maxHeight = Dimensions.get('window').height //full height

const styles = StyleSheet.create({
    buttonControl: {
        width: 260,
        height: 260,
        borderRadius: 130,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 25,
        backgroundColor: color.lightText,
        borderStyle: 'solid',
        marginTop: maxHeight / 10,
        marginLeft: 20,
    },
    button__active: {
        borderColor: color.red,
    },
    button__inactive: {
        borderColor: color.green,
    },
    text: {
        marginTop: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
    },
    text__active: {
        color: color.green,
    },
    text__inactive: {
        color: color.red,
    },
    temperature: {
        fontSize: 64,
        lineHeight: 76,
        textAlign: 'center',
    },
    celcius: {
        fontSize: 20,
        lineHeight: 24,
        textAlign: 'center',
    },
})

export default styles
