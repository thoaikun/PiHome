import * as React from 'react'
import { Pressable, View } from 'react-native'
import FanActiveIcon from '../../../assets/svg/fan_active_icon.svg'
import FanIcon from '../../../assets/svg/fan_icon.svg'
import LightActiveIcon from '../../../assets/svg/light_active_icon.svg'
import LightIcon from '../../../assets/svg/light_icon.svg'

import styles from './styles'

const DeviceTabBar = (props: {
    device: string
    setDevice: (d: string) => void
}): JSX.Element => {
    return (
        <View style={styles.iconlist}>
            <Pressable onPress={() => props.setDevice('light')}>
                <View
                    style={[
                        styles.iconBackground,
                        props.device === 'light'
                            ? styles.iconActive
                            : styles.iconBackground,
                    ]}
                >
                    {props.device === 'light' ? (
                        <LightActiveIcon width={40} height={40} />
                    ) : (
                        <LightIcon width={40} height={40} />
                    )}
                </View>
            </Pressable>
            <Pressable onPress={() => props.setDevice('fan')}>
                <View
                    style={[
                        styles.iconBackground,
                        props.device === 'fan'
                            ? styles.iconActive
                            : styles.iconBackground,
                    ]}
                >
                    {props.device === 'fan' ? (
                        <FanActiveIcon width={40} height={40} />
                    ) : (
                        <FanIcon width={40} height={40} />
                    )}
                </View>
            </Pressable>
        </View>
    )
}

export default DeviceTabBar
