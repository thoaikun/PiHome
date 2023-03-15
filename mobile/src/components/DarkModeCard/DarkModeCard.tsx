import * as React from 'react'
import { Switch, Text, View } from 'react-native'
import DarkModeIcon from '../../../assets/svg/darkmode_icon.svg'
import color from '../../styles/color'
import text from '../../styles/text'

import styles from './styles'

const DarkModeCard = (): JSX.Element => {
    const [status, setStatus] = React.useState<boolean>(false)
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={styles.iconBackground}>
                    <DarkModeIcon />
                </View>
                <Text style={[text.heavy, text.size_small, text.color_white]}>
                    CHỦ ĐỀ TỐI
                </Text>
            </View>
            <Switch
                trackColor={{ false: color.gray, true: color.blue }}
                thumbColor={'white'}
                value={status}
                onValueChange={() => setStatus(!status)}
            />
        </View>
    )
}

export default DarkModeCard
