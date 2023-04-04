import { StyleSheet } from 'react-native'
import color from '../../styles/color'

const styles = StyleSheet.create({
    power: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 10,
        marginTop: 10,
    },
    powerHead: {
        width: 50,
        height: 35,
        backgroundColor: '#D9D9D9',
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15,
    },
    powerTail: {
        width: 50,
        height: 35,
        backgroundColor: '#D9D9D9',
        borderTopRightRadius: 15,
        borderBottomRightRadius: 15,
    },
    powerMid: {
        width: 50,
        height: 35,
        backgroundColor: '#D9D9D9',
    },
    powerFull: {
        backgroundColor: color.primary,
    },
})

export default styles
