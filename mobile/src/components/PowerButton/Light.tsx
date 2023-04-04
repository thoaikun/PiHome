import { useTheme } from '@react-navigation/native'
import * as React from 'react'
import { Pressable, Text, View } from 'react-native'
import PowerIconActive from '../../../assets/svg/power_active_icon.svg'
import PowerIcon from '../../../assets/svg/power_icon.svg'
import color from '../../styles/color'
import text from '../../styles/text'

import styles from './styles'

export type LightProps = {
    setStatus: (value: boolean) => void
    status: boolean
}

const Light = (props: LightProps): JSX.Element => {
    const themeColor = useTheme()

    return (
        <View>
            <Pressable onPress={() => props.setStatus(!props.status)}>
                <View
                    style={[
                        styles.buttonControl,
                        props.status
                            ? styles.button__inactive
                            : styles.button__active,
                    ]}
                >
                    {!props.status ? (
                        <PowerIcon width={60} height={60} />
                    ) : (
                        <PowerIconActive width={60} height={60} />
                    )}
                </View>
            </Pressable>
            <View style={styles.text}>
                <Text
                    style={[
                        text.bold,
                        text.color_back,
                        text.size_big,
                        { color: themeColor.colors.text },
                    ]}
                >
                    Trạng thái:
                </Text>
                <Text
                    style={[
                        text.bold,
                        text.size_big,
                        props.status
                            ? styles.text__active
                            : styles.text__inactive,
                    ]}
                >
                    {props.status ? 'BẬT' : 'TẮT'}
                </Text>
            </View>
        </View>
    )
}

export default Light
