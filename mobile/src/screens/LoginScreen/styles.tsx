import { Dimensions, StyleSheet } from 'react-native'
import color from '../../styles/color'

var maxWidth = Dimensions.get('window').width //full width
var maxHeight = Dimensions.get('window').height //full height

const styles = StyleSheet.create({
    container: {
        height: maxHeight,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },
    logo: {
        width: maxWidth,
        height: 400,
        position: 'absolute',
        left: 0,
        top: 0,
        borderBottomLeftRadius: 100,
        borderBottomRightRadius: 100,
        resizeMode: 'cover',
    },
    loginForm: {
        position: 'absolute',
        bottom: maxHeight * 0.15,
        width: maxWidth - 10,
        flexDirection: 'column',
        alignItems: 'center',
        gap: 20,
    },
    alertText: {
        color: color.red,
        lineHeight: 20,
    },
})

export default styles
