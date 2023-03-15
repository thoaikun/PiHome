import { StyleSheet } from 'react-native'
import color from '../../styles/color'

const styles = StyleSheet.create({
    container: {
        width: '90%',
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 20,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: color.darkBackground
    },
    content: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 15,
    },
    iconBackground: {
        width: 50,
        height: 50,
        borderRadius: 50,
        backgroundColor: color.lightText,
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default styles
