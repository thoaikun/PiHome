import { StyleSheet } from 'react-native'
import color from '../../styles/color'

const style = StyleSheet.create({
    background: {
        width: '100%',
        paddingVertical: 15,

        display: 'flex',
        flexDirection: 'row',
    },
    element: {
        flexBasis: '20%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default style
