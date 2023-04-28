import * as React from 'react'
import { Switch, Text, View } from 'react-native'
import DoorIcon from '../../../assets/svg/door_icon.svg'
import useNotifications from '../../hook/useNotification'
import color from '../../styles/color'
import text from '../../styles/text'

import { useDispatch, useSelector } from 'react-redux'
import { doorSelector } from '../../redux/selector'
import { updateDoor } from '../../redux/slice/doorSlice'
import socket from '../../utils/socket'
import styles from './styles'

const DoorCard = (): JSX.Element => {
    const { isUnlock } = useSelector(doorSelector)
    const dispatch = useDispatch()

    const handleUnlockDoor = () => {
        let data = {
            from: 'client',
            to: 'doorController',
            data: {
                command: 'on',
            },
        }
        socket.emit('transmission', data)
    }

    const handleLockDoor = () => {
        let data = {
            from: 'client',
            to: 'doorController',
            data: {
                command: 'off',
            },
        }
        socket.emit('transmission', data)
    }

    return (
        <View
            style={[
                styles.container,
                !isUnlock ? styles.container__green : styles.container__red,
            ]}
        >
            <View style={styles.content}>
                <View style={styles.iconBackground}>
                    <DoorIcon />
                </View>
                <Text style={[text.heavy, text.size_small, text.color_white]}>
                    {!isUnlock ? 'KHÓA' : 'MỞ KHÓA'}
                </Text>
            </View>
            <Switch
                trackColor={{ false: color.gray, true: color.gray }}
                thumbColor={'white'}
                value={!isUnlock}
                onValueChange={() => {
                    dispatch(updateDoor({ status: !isUnlock }))
                    if (!isUnlock) handleUnlockDoor()
                    else handleLockDoor()
                }}
            />
        </View>
    )
}

export default DoorCard
