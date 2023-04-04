import { useTheme } from '@react-navigation/native'
import * as React from 'react'
import { Pressable, Text, View } from 'react-native'
import PowerIconActive from '../../../assets/svg/power_active_icon.svg'
import PowerIcon from '../../../assets/svg/power_icon.svg'
import color from '../../styles/color'
import text from '../../styles/text'
import ProgressBar from '../ProgessBar/ProgressBar'

import styles from './styles'

export type FanProps = {
    setSpeed: (value: number) => void
    speed: number
    status: boolean
    setStatus: (value: boolean) => void
}

const Fan = (props: FanProps): JSX.Element => {
    const themeColor = useTheme()

    return (
        <View>
            <Pressable
                onPress={() => {
                    props.setStatus(!props.status)
                }}
            >
                <View
                    style={[
                        styles.buttonControl,
                        !props.status
                            ? styles.button__active
                            : styles.button__inactive,
                    ]}
                >
                    <View>
                        <Text
                            style={[
                                text.bold,
                                text.color_back,
                                styles.temperature,
                            ]}
                        >
                            24
                        </Text>
                        <Text style={[text.bold, styles.celcius]}>Celcius</Text>
                    </View>
                </View>
            </Pressable>
            <View style={styles.text}>
                <Text
                    style={[
                        text.bold,
                        text.size_big,
                        { color: themeColor.colors.text },
                    ]}
                >
                    Tốc độ quạt
                </Text>
            </View>
            <ProgressBar speed={props.speed} setSpeed={props.setSpeed} />
        </View>
    )
}

export default Fan
