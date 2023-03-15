import { StyleSheet, Dimensions } from 'react-native'
import color from '../../styles/color'
var maxWidth = Dimensions.get('window').width; //full width
const styles = StyleSheet.create({
    header: {
      position: 'absolute',
      left: 0,
      top: 0,
    },
    iconback: {
      width: 40,
      height: 40,
      borderRadius: 50,
      backgroundColor: color.lightText,
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute', 
      top: 46, 
      left: 32
    },
    title: {
      fontWeight: 'bold',
      fontSize: 24,
      color: color.darkText,
      top: 50,
      left: 145
    }
})

export default styles
