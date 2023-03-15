import { StyleSheet, Dimensions } from 'react-native'
import color from '../../styles/color'
var maxWidth = Dimensions.get('window').width; //full width
const styles = StyleSheet.create({
    header: {
      width: maxWidth - 50,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 50
    },
    btn: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      gap: 20
    },
    voiceCheck: {
      paddingHorizontal: 10,
    },
    iconBackground: {
      width: 50,
      height: 50,
      borderRadius: 50,
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      fontWeight: 'bold',
      fontSize: 24,
      color: color.darkText,
      marginTop: 10
    },
    
})

export default styles
