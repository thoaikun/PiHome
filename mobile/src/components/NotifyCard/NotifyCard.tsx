import * as React from 'react'
import { Pressable, Text, View } from 'react-native'
import { useDispatch } from 'react-redux'
import AlertSignIconUnRead from '../../../assets/svg/alert_icon.svg'
import AlertSignIconRead from '../../../assets/svg/alert_read_icon.svg'
import CancelIcon from '../../../assets/svg/cancel_icon.svg'
import WarningSignIconUnRead from '../../../assets/svg/warning_icon.svg'
import WarningSignIconRead from '../../../assets/svg/warning_read_icon.svg'
import { removeNotify, setIsRead } from '../../redux/slice/notificationSlice'
import text from '../../styles/text'
import styles from './styles'

/*
    NotifyCard component:
        type: 'warning' | 'alert',
        message: string
*/

const NotifyCard = (props: {
    id: number
    type: string
    message: string
    isRead: boolean
}): JSX.Element => {
    const dispatch = useDispatch()

    const handleRemove = (id: number) => {
        dispatch(removeNotify({ id }))
    }

    const handleFocus = (id: number) => {
        dispatch(setIsRead({ id }))
    }

    return (
        <Pressable
            style={styles.container}
            onPress={() => handleFocus(props.id)}
        >
            <View style={styles.col1}>
                {props.type === 'Warning' && !props.isRead && (
                    <WarningSignIconUnRead width={30} height={30} />
                )}
                {props.type === 'Warning' && props.isRead && (
                    <WarningSignIconRead width={30} height={30} />
                )}
                {props.type === 'Alert' && !props.isRead && (
                    <AlertSignIconUnRead width={30} height={30} />
                )}
                {props.type === 'Alert' && props.isRead && (
                    <AlertSignIconUnRead width={30} height={30} />
                )}
                <View style={styles.content}>
                    <Text
                        style={[
                            text.bold,
                            text.size_medium,
                            text.color_back,
                            props.type === 'Warning'
                                ? styles.header__warning
                                : styles.header__alert,
                            props.isRead ? styles.header__read : null,
                        ]}
                    >
                        {props.type === 'Warning' ? 'Cảnh báo' : 'Báo động'}
                    </Text>
                    <Text
                        style={[
                            text.bold,
                            text.size_small,
                            text.color_back,
                            props.isRead ? styles.header__read : null,
                        ]}
                        numberOfLines={2}
                    >
                        {props.message}
                    </Text>
                </View>
            </View>
            <Pressable onPress={() => handleRemove(props.id)}>
                <CancelIcon width={30} height={30} />
            </Pressable>
        </Pressable>
    )
}

export default NotifyCard
