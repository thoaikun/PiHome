import { Dimensions, Platform, StatusBar, StyleSheet } from 'react-native'
import color from '../../styles/color'

var maxWidth = Dimensions.get('window').width //full width

const styles = StyleSheet.create({
    container: {
        width: maxWidth,
        alignItems: 'center',
    },
    header: {
        width: '85%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',

        position: 'absolute',
        marginTop:
            Platform.OS === 'android' && StatusBar.currentHeight
                ? StatusBar?.currentHeight
                : 0,
    },
    title: {
        marginLeft: 0,
        fontSize: 22,
        marginStart: '20%',
    },
})

export default styles
