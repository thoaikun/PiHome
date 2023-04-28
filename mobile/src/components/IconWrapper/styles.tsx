import { StyleSheet } from 'react-native'
import color from '../../styles/color'

const styles = StyleSheet.create({
    container: {
        position: 'relative',
    },
    iconBackground: {
        width: 40,
        height: 40,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    hasNotify: {
        width: 10,
        height: 10,
        backgroundColor: color.red,
        borderRadius: 50,
        position: 'absolute',
        top: 0,
        right: 0,
        elevation: 2,
    },
})

export default styles
