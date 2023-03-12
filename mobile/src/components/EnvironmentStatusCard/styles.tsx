import { StyleSheet } from 'react-native'
import color from '../../styles/color'

const styles = StyleSheet.create({
    container: {
        width: '90%',
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 20,
        backgroundColor: color.primary,
        gap: 18,
    },

    dateContainer: {
        width: 180,
        paddingVertical: 9,
        borderRadius: 20,
        backgroundColor: '#656EC7',

        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 15,
    },

    statusContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    statusCard: {
        display: 'flex',
        flexDirection: 'row',
    },
    statusCardBackground: {
        paddingHorizontal: 20,
        borderRadius: 50,

        alignItems: 'center',
        justifyContent: 'center',
    },
    statusCardContent: {
        marginLeft: 10,
        display: 'flex',
        flexDirection: 'column',
        gap: -13,
    },
    statusCardBackground__red: {
        backgroundColor: color.red,
    },
    statusCardBackground__blue: {
        backgroundColor: color.blue,
    },
})

export default styles
