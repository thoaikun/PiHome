import { StyleSheet } from 'react-native'
import color from '../../styles/color'

const styles = StyleSheet.create({
    container: {
        width: '90%',
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 20,
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    col1: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    content: {
        marginLeft: 20,
        gap: -5,
    },
    header__warning: {
        color: color.yellow,
    },
    header__alert: {
        color: color.red,
    },
    button: {
        color: color.red,
    },
})

export default styles
