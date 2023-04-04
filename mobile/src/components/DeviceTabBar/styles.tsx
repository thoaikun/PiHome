import { Dimensions, StyleSheet } from 'react-native'
import color from '../../styles/color'

var maxWidth = Dimensions.get('window').width //full width
var maxHeight = Dimensions.get('window').height //full height

const styles = StyleSheet.create({
    iconlist: {
        width: maxWidth * 0.5,
        marginTop: 120,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    iconBackground: {
        width: 70,
        height: 70,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1.6,
        borderColor: color.gray,
        borderStyle: 'solid',
    },
    iconActive: {
        backgroundColor: color.primary,
        borderWidth: 0,
    },
})

export default styles
