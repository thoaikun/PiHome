import { useTheme } from '@react-navigation/native'
import * as React from 'react'
import { Pressable, Text, View } from 'react-native'
import PowerIconActive from '../../../assets/svg/power_active_icon.svg'
import PowerIcon from '../../../assets/svg/power_icon.svg'
import color from '../../styles/color'
import text from '../../styles/text'
import ProgressBar from '../ProgessBar/ProgressBar'

import styles from './styles'

const Fan = (): JSX.Element => {
    const themeColor = useTheme()
    const [status, setStatus] = React.useState<boolean>(false)
    const [speed, setSpeed] = React.useState<number>(0)

    return (
        <View>
            <Pressable onPress={() => setStatus(!status)}>
                <View
                    style={[
                        styles.buttonControl,
                        status
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
            <ProgressBar speed={speed} setSpeed={setSpeed} />
        </View>
    )
}

export default Fan
