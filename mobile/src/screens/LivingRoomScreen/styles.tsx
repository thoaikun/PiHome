import { Dimensions, StyleSheet } from 'react-native'
import color from '../../styles/color'
var maxWidth = Dimensions.get('window').width //full width
var maxHeight = Dimensions.get('window').height //full height
const styles = StyleSheet.create({
    container: {
        width: maxWidth,
        height: maxHeight,
        flexDirection: 'column',
        alignItems: 'center',
        gap: 20,
    },
    iconback: {
        width: 40,
        height: 40,
        borderRadius: 50,
        backgroundColor: color.lightText,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 46,
        left: 32,
    },
    fanStatus: {
        fontSize: 24,
        lineHeight: 30,
        marginTop: 20,
        textAlign: 'center',
    },
})

export default styles
