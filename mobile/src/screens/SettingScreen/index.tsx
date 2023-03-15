import * as React from 'react'
import {Text, View, Image, Pressable, FlatList, ListRenderItemInfo } from 'react-native'
import styles from './styles'
import NotifyCard from '../../components/NotifyCard/NotifyCard'
import Title from '../../components/Title/Title'
import LogoutIcon from '../../../assets/svg/logout.svg'
import DarkModeCard from '../../components/DarkModeCard/DarkModeCard'
import InfoIcon from '../../../assets/svg/info_icon.svg'
import { useNavigation } from '@react-navigation/native';
const SettingScreen = (): JSX.Element => {
  const [pressed, setPressed] = React.useState<boolean>(false)
  const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.header}>
              <Image
                source={require('../../../assets/imgs/avatar.png')}
                style={styles.img}
              />
              <Text style={styles.username}>Thoai Le</Text>
              <Pressable
               onPressIn={() => setPressed(true)}
               onPressOut={() => setPressed(false)}
               onPress={() => navigation.navigate('LoginScreen')}>
                <LogoutIcon width={40} height={40} style={pressed ? styles.onPress : null}/>
              </Pressable>
            </View>
            <DarkModeCard />
            <View style={styles.info}>
                <View style={styles.infoTitle}>
                  <InfoIcon width={30} height={30} />
                  <Text style={styles.infoText}>Thông tin phần mềm</Text>
                </View>
                <Text style={styles.content}>Nội dung</Text>
            </View>
        </View>
    )
}

export default SettingScreen