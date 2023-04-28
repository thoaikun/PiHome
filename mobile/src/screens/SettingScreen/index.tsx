import { useNavigation, useTheme } from '@react-navigation/native'
import * as React from 'react'
import { Image, ListRenderItemInfo, Pressable, Text, View } from 'react-native'
import InfoIcon from '../../../assets/svg/info_icon.svg'
import LogoutIcon from '../../../assets/svg/logout.svg'
import DarkModeCard from '../../components/DarkModeCard/DarkModeCard'
import { useDispatch } from 'react-redux'
import { updateLogout } from '../../redux/slice/loginSlice'
import styles from './styles'
const SettingScreen = (): JSX.Element => {
    const themeColor = useTheme()
    const [pressed, setPressed] = React.useState<boolean>(false)
    const navigation = useNavigation()
    const dispatch = useDispatch()
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image
                    source={require('../../../assets/imgs/avatar.png')}
                    style={styles.img}
                />
                <Text
                    style={[styles.username, { color: themeColor.colors.text }]}
                >
                    Thoai Le
                </Text>
                <Pressable
                    onPress={() => {
                        setPressed(!pressed)
                        dispatch(updateLogout())
                        navigation.navigate('Login')
                    }}
                >
                    <LogoutIcon
                        width={40}
                        height={40}
                        style={pressed ? styles.onPress : null}
                    />
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
