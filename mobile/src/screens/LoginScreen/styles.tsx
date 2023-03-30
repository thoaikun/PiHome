import { StyleSheet, Dimensions } from 'react-native'
import color from '../../styles/color'
var maxWidth = Dimensions.get('window').width //full width
var maxHeight = Dimensions.get('window').height //full height
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: maxWidth,
        height: 410,
        position: 'absolute',
        left: 0,
        top: 0,
        borderBottomLeftRadius: 100,
        borderBottomRightRadius: 100,
        resizeMode: 'cover',
    },
    loginForm: {
        position: 'absolute',
        width: maxWidth - 10,
        flexDirection: 'column',
        alignItems: 'center',
        gap: 20,
        top: 506,
    },
})

export default styles
