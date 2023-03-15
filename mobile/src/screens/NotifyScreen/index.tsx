import * as React from 'react'
import {Text, View, Image, Pressable, FlatList, ListRenderItemInfo } from 'react-native'
import styles from './styles'
import NotifyCard from '../../components/NotifyCard/NotifyCard'
import Title from '../../components/Title/Title'
const NotifyScreen = (): JSX.Element => {
    return (
        <View style={styles.container}>
           <Title name="Thông báo" />
           <View style={styles.noti}>
                <NotifyCard type='warning' message='Nhập sai mật khẩu' />
                <NotifyCard type='error' message='Có cháy, có cháy !!!' />
                <NotifyCard type='warning' message='Có người đột nhập' />
           </View>
        </View>
    )
}

export default NotifyScreen