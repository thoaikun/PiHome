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
        paddingBottom: 10,
        paddingHorizontal: 15,
        backgroundColor: 'white',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    mt: {
        marginTop: 10,
    },
})

export default styles
