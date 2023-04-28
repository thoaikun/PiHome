import { StyleSheet } from 'react-native'
import color from '../../styles/color'

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 20,
        backgroundColor: color.primary,
    },
    onPress: {
        backgroundColor: color.focusPrimary,
    },
    extend: {
        paddingHorizontal: '30%',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        lineHeight: 18,
        color: color.lightText,
        padding: 5,
    },
})

export default styles
