import { Dimensions, StyleSheet } from 'react-native'
import color from '../../styles/color'

var maxWidth = Dimensions.get('window').width //full width'

const styles = StyleSheet.create({
    container: {
        width: 170,
        paddingVertical: 25,
        paddingHorizontal: 20,
        marginHorizontal: 5,
        borderRadius: 20,
        flexDirection: 'column',
        backgroundColor: color.lightText,
        gap: 10,
    },
    room: {
        fontSize: 19,
        lineHeight: 23,
    },
    device: {
        fontSize: 14,
        lineHeight: 14,
        color: color.gray,
    },
})

export default styles
