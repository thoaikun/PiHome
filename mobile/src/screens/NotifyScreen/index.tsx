import * as React from 'react'
import { View } from 'react-native'
import NotifyCard from '../../components/NotifyCard/NotifyCard'
import Title from '../../components/Title/Title'
import styles from './styles'

const NotifyScreen = (): JSX.Element => {
    return (
        <View style={styles.container}>
            <Title name='Thông báo' />
            <View style={styles.notify}>
                <NotifyCard type='warning' message='Nhập sai mật khẩu' />
                <NotifyCard type='error' message='Có cháy, có cháy !!!' />
                <NotifyCard type='warning' message='Có người đột nhập' />
            </View>
        </View>
    )
}

export default NotifyScreen
