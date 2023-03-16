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
    },
    header: {
      position: 'absolute',
      left: 0,
      top: 0,
    },
    title: {
      position: 'absolute',
      left: 145,
      top: 52,
      fontWeight: 'bold',
      fontSize: 24,
      lineHeight: 29,
      color: color.darkText
    },
    main: {
      flex: 1,
      flexDirection: 'column',
      marginTop: 150,
      alignItems: 'center',
      gap: 20,
    },
    iconlist: {
      width: maxWidth * 0.5,
      flexDirection: 'row',
      justifyContent: 'space-between',
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
    iconBackground: {
      width: 80,
      height: 80,
      borderRadius: 50,
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 1.6,
      borderColor: '#A2A9B8',
      borderStyle:'solid'
    },
    iconActive: {
      backgroundColor: '#7F89F9',
    },
    buttonControl: {
      width: 260,
      height: 260,
      borderRadius: 130,
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 25,
      backgroundColor: color.lightText,
      borderStyle:'solid',
      marginTop: 50,
      marginLeft: 20
    },
    buttonControlRed: {
      borderColor: color.red,
    },
    buttonControlGreen: {
      borderColor: color.green,
    },
    temperature: {
      fontSize: 64,
      lineHeight: 76,
      fontWeight: 'bold',
      textAlign: 'center'
    },
    celcius: {
      fontSize: 20,
      lineHeight: 24,
      textAlign: 'center'
    },
    lightStatus: {
      fontSize: 32,
      lineHeight: 38,
      marginTop: 20,
      textAlign: 'center'
    },
    power: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      gap: 10,
      marginTop: 20,
    },
    powerHead: {
      width: 50, 
      height: 35, 
      backgroundColor: '#D9D9D9',
      borderTopLeftRadius: 15,
      borderBottomLeftRadius: 15
    },
    powerTail: {
      width: 50, 
      height: 35, 
      backgroundColor: '#D9D9D9',
      borderTopRightRadius: 15,
      borderBottomRightRadius: 15
    },
    powerMid: {
      width: 50, 
      height: 35, 
      backgroundColor: '#D9D9D9',
    },
    powerFull: {
      backgroundColor: color.green,
    },
    fanStatus: {
      fontSize: 24,
      lineHeight: 30,
      marginTop: 20,
      textAlign: 'center',
    }
})

export default styles
