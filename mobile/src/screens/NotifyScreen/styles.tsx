import { Dimensions, StyleSheet } from 'react-native'
import color from '../../styles/color'

var maxWidth = Dimensions.get('window').width //full width
var maxHeight = Dimensions.get('window').height //full height

const styles = StyleSheet.create({
    container: {
        width: maxWidth,
        height: maxHeight,
    },
    notify: {
        width: maxWidth,
        marginTop: 110,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 15,
    },
})

export default styles
