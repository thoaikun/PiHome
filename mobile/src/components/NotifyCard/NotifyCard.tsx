import * as React from 'react'
import { Pressable, Text, View } from 'react-native'
import { useDispatch } from 'react-redux'
import AlertSignIcon from '../../../assets/svg/alert_icon.svg'
import CancelIcon from '../../../assets/svg/cancel_icon.svg'
import WarningSignIcon from '../../../assets/svg/warning_icon.svg'
import { removeNotify } from '../../redux/slice/notificationSlice'
import text from '../../styles/text'
import styles from './styles'

/*
    NotifyCard component:
        type: 'warning' | 'alert',
        message: string
*/

const NotifyCard = (props: {
    type: string
    message: string
    id: number
}): JSX.Element => {
    const dispatch = useDispatch()

    const handleRemove = (id: number) => {
        dispatch(removeNotify({ id }))
    }

    return (
        <View style={styles.container}>
            <View style={styles.col1}>
                {props.type === 'Warning' ? (
                    <WarningSignIcon width={30} height={30} />
                ) : (
                    <AlertSignIcon width={30} height={30} />
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
                        ]}
                    >
                        {props.type === 'Warning' ? 'Cảnh báo' : 'Báo động'}
                    </Text>
                    <Text
                        style={[text.bold, text.size_small, text.color_back]}
                        numberOfLines={2}
                    >
                        {props.message}
                    </Text>
                </View>
            </View>
            <Pressable onPress={() => handleRemove(props.id)}>
                <CancelIcon width={30} height={30} />
            </Pressable>
        </View>
    )
}

export default NotifyCard
