import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        width: '85%',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 45,
    },
    image: {
        width: 55,
        height: 55,
        borderRadius: 50,
    },
    btn: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        gap: 20,
    },
    voiceCheck: {
        paddingHorizontal: 10,
    },
    iconBackground: {
        width: 40,
        height: 40,
        borderRadius: 50,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 22,
    },
})

export default styles
