import { StyleSheet, Dimensions } from 'react-native'
import color from '../../styles/color'
var maxWidth = Dimensions.get('window').width; //full width
var maxHeight = Dimensions.get('window').height; //full height
const styles = StyleSheet.create({
    container: {
      width: maxWidth,
      height: maxHeight,
      backgroundColor: color.lightBackground,
      flexDirection: 'column',
      alignItems: 'center',
      gap: 20
    }
})

export default styles
