import * as React from 'react'
import { Switch, Text, View } from 'react-native'
import DoorIcon from '../../../assets/svg/door_icon.svg'
import useNotifications from '../../hook/useNotification'
import color from '../../styles/color'
import text from '../../styles/text'

import styles from './styles'

const DoorCard = (): JSX.Element => {
    const [status, setStatus] = React.useState<boolean>(false)
    // const { schedulePushNotification } = useNotifications()

    return (
        <View
            style={[
                styles.container,
                status ? styles.container__green : styles.container__red,
            ]}
        >
            <View style={styles.content}>
                <View style={styles.iconBackground}>
                    <DoorIcon />
                </View>
                <Text style={[text.heavy, text.size_small, text.color_white]}>
                    {status ? 'KHÓA' : 'MỞ KHÓA'}
                </Text>
            </View>
            <Switch
                trackColor={{ false: color.gray, true: color.gray }}
                thumbColor={'white'}
                value={status}
                onValueChange={async () => {
                    setStatus(!status)
                    // await schedulePushNotification(
                    //     'Successful',
                    //     status
                    //         ? 'Door has been locked'
                    //         : 'Door has been unlocked'
                    // )
                }}
            />
        </View>
    )
}

export default DoorCard
