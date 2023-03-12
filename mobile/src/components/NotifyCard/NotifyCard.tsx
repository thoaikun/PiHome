import * as React from 'react'
import { Pressable, Text, View } from 'react-native'
import AlertSignIcon from '../../../assets/svg/alert_icon.svg'
import CancelIcon from '../../../assets/svg/cancel_icon.svg'
import WarningSignIcon from '../../../assets/svg/warning_icon.svg'
import text from '../../styles/text'
import styles from './styles'

/*
    NotifyCard component:
        type: 'warning' | 'alert',
        message: string
*/

const NotifyCard = (props: { type: string; message: string }): JSX.Element => {
    return (
        <View style={styles.container}>
            <View style={styles.col1}>
                {props.type === 'warning' ? (
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
                            props.type === 'warning'
                                ? styles.header__warning
                                : styles.header__alert,
                        ]}
                    >
                        {props.type === 'wanring' ? 'Cảnh báo' : 'Báo động'}
                    </Text>
                    <Text style={[text.bold, text.size_small, text.color_back]}>
                        {props.message}
                    </Text>
                </View>
            </View>
            <Pressable>
                <CancelIcon width={30} height={30} />
            </Pressable>
        </View>
    )
}

export default NotifyCard
