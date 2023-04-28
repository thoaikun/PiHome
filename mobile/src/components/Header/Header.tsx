import { useTheme } from '@react-navigation/native'
import * as React from 'react'
import { Image, Pressable, Text, View } from 'react-native'
import { useSelector } from 'react-redux'
import BellIcon from '../../../assets/svg/bell_icon.svg'
import { notifyListSelector } from '../../redux/selector'
import text from '../../styles/text'
import IconWrapper from '../IconWrapper/IconWrapper'
import VoiceButton from '../VoiceButton/index'
import styles from './styles'

const Header = ({ navigation }: any): JSX.Element => {
    const themeColor = useTheme()
    const list = useSelector(notifyListSelector)
    const hasUnreadNotify = list.filter((e) => e.isRead === false).length > 0

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image
                    source={require('../../../assets/imgs/avatar.png')}
                    style={styles.image}
                />
                <View style={styles.btn}>
                    <Pressable
                        onPress={() => {
                            navigation.navigate('Notification')
                        }}
                    >
                        <IconWrapper color='white' isBell={hasUnreadNotify}>
                            <BellIcon width={25} height={20} />
                        </IconWrapper>
                    </Pressable>
                </View>
            </View>
            <Text
                style={[
                    styles.title,
                    text.bold,
                    { color: themeColor.colors.text },
                ]}
            >
                Xin chào, ThoaiLe
            </Text>
        </View>
    )
}

export default Header
