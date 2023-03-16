import { StyleSheet, Dimensions } from 'react-native'
import color from '../../styles/color'
var maxWidth = Dimensions.get('window').width; //full width'

const styles = StyleSheet.create({
    container: {
        width: 170,
        paddingVertical: 30,
        paddingHorizontal: 20,
        marginHorizontal: 5,
        borderRadius: 20,
        flexDirection: 'column',
        backgroundColor: color.lightText,
        gap: 10
    },
    room: {
        fontWeight: '800',
        fontSize: 19,
        lineHeight: 23,
    },
    device: {
        fontWeight: '600',
        fontSize: 11,
        lineHeight: 13,
        color: color.gray
    }
})

export default styles
