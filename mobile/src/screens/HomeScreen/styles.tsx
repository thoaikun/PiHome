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
        gap: maxHeight * 0.03,
    },
})

export default styles
