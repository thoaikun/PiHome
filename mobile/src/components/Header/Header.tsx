import * as React from 'react'
import {Text, View, Image, Pressable} from 'react-native'
import Button from '../Button/Button'
import styles from './styles'
import text from '../../styles/text'
import BellIcon from '../../../assets/svg/bell_icon.svg'
import IconButton from '../IconButton/IconButton'
import { useNavigation } from '@react-navigation/native';
import VoiceButton from '../VoiceButton/index'
const Header = (): JSX.Element => {
    const navigation = useNavigation();
    const [isChecked, setIsChecked] = React.useState(false)
    return (
        <View>
          <View style={styles.header}>
            <Image
              source={require('../../../assets/imgs/avatar.png')}
            />
            <View style={styles.btn}>
              <VoiceButton />
              <Pressable onPress={()=>{navigation.navigate('NotifyScreen')}}>
                <IconButton color='white' Icon={BellIcon} />
              </Pressable>
              </View>
          </View>
          <Text style={styles.title}>Xin chào, ThoaiLe</Text>
        </View>     
      
    )
}

export default Header
