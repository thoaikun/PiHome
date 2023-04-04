import { Dimensions, StyleSheet } from 'react-native'
import color from '../../styles/color'

var maxWidth = Dimensions.get('window').width //full width

const styles = StyleSheet.create({
    container: {
        width: maxWidth,

        position: 'absolute',
        left: 0,
        top: 45,

        alignItems: 'center',
    },
    header: {
        width: '85%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    title: {
        marginLeft: 0,
        fontSize: 22,
        marginStart: '20%',
    },
})

export default styles
