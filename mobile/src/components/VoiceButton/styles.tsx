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
        backgroundColor: color.red,
    },
    extend: {
        paddingHorizontal: '30%',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 15,
        lineHeight: 18,
        color: color.lightText,
    },
})

export default styles
