import * as React from 'react'
import { View } from 'react-native'
import DeviceTabBar from '../../components/DeviceTabBar/DeviceTabBar'
import PowerButton from '../../components/PowerButton/PowerButton'
import Title from '../../components/Title/Title'
import socket from '../../utils/socket'
import styles from './styles'

const LivingRoomScreen = (): JSX.Element => {
    const [device, setDevice] = React.useState<string>('light')
    const [lightStatus, setLightStatus] = React.useState<boolean>(false)
    const [fanSpeed, setFanSpeed] = React.useState<number>(0)
    const [fanStatus, setFanStatus] = React.useState<boolean>(false)

    const handleClickLightPower = (status: boolean) => {
        const data = {
            from: 'client',
            to: 'lightController',
            data: {
                command: status ? 'on' : 'off',
            },
        }
        socket.emit('transmission', data)
    }

    const handleClickFanPower = (speed: number) => {
        const data = {
            from: 'client',
            to: 'fanController',
            data: {
                status: fanStatus ? 'on' : 'off',
                command: speed,
            },
        }
        socket.emit('transmission', data)
    }

    React.useEffect(() => {
        handleClickLightPower(lightStatus)
    }, [lightStatus])

    React.useEffect(() => {
        handleClickFanPower(fanSpeed)
    }, [fanSpeed])

    React.useEffect(() => {
        if (!fanStatus) handleClickFanPower(0)
        else handleClickFanPower(fanSpeed)
    }, [fanStatus])

    return (
        <View style={styles.container}>
            <Title name='Phòng Khách' />
            <DeviceTabBar device={device} setDevice={setDevice} />
            <View>
                {device === 'light' ? (
                    <PowerButton.Light
                        status={lightStatus}
                        setStatus={setLightStatus}
                    />
                ) : (
                    <PowerButton.Fan
                        speed={fanSpeed}
                        status={fanStatus}
                        setSpeed={setFanSpeed}
                        setStatus={setFanStatus}
                    />
                )}
            </View>
        </View>
    )
}

export default LivingRoomScreen
