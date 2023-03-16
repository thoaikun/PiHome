import * as React from 'react'
import { View } from 'react-native'
import DeviceTabBar from '../../components/DeviceTabBar/DeviceTabBar'
import PowerButton from '../../components/PowerButton/PowerButton'
import Title from '../../components/Title/Title'
import styles from './styles'

const LivingRoomScreen = (): JSX.Element => {
    const [device, setDevice] = React.useState<string>('light')

    return (
        <View style={styles.container}>
            <Title name='Phòng Khách' />
            <DeviceTabBar device={device} setDevice={setDevice} />
            <View>
                {device === 'light' ? (
                    <PowerButton.Light />
                ) : (
                    <PowerButton.Fan />
                )}
            </View>
        </View>
    )
}

export default LivingRoomScreen
