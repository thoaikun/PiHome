import { StyleSheet } from 'react-native'
import color from '../../styles/color'

const styles = StyleSheet.create({
    container: {
        width: '75%',
        borderWidth: 2,
        borderColor: color.gray,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        backgroundColor: 'white',
    },
    input: {
        paddingHorizontal: 15,
        height: 45,
        backgroundColor: 'white',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
})

export default styles
