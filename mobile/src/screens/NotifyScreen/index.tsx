import * as React from 'react'
import { Text, View } from 'react-native'
import { useSelector } from 'react-redux'
import NotifyCard from '../../components/NotifyCard/NotifyCard'
import Title from '../../components/Title/Title'
import { notifyListSelector } from '../../redux/selector'
import { NotifyElement } from '../../redux/slice/notificationSlice'
import text from '../../styles/text'
import styles from './styles'

const NotifyScreen = (): JSX.Element => {
    const list = useSelector(notifyListSelector)

    return (
        <View style={styles.container}>
            <Title name='Thông báo' />
            <View style={styles.notify}>
                {list.length > 0 &&
                    list.map((element: NotifyElement, i: number) => (
                        <NotifyCard
                            key={i}
                            type={element.title}
                            message={element.message}
                            id={i}
                        />
                    ))}
                {list.length == 0 && (
                    <Text style={[text.medium, text.color_back, styles.text]}>
                        Không có thông báo mới
                    </Text>
                )}
            </View>
        </View>
    )
}

export default NotifyScreen
