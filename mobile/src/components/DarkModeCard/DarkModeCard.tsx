import { useTheme } from '@react-navigation/native'
import * as React from 'react'
import { Switch, Text, View } from 'react-native'
import { useDispatch } from 'react-redux'
import DarkModeIcon from '../../../assets/svg/darkmode_icon.svg'
import { toggleTheme } from '../../redux/slice/themeSlice'
import color from '../../styles/color'
import text from '../../styles/text'

import styles from './styles'

const useChangeTheme = (status: boolean) => {
    const dispatch = useDispatch()

    React.useEffect(() => {
        dispatch(toggleTheme())
    }, [status])
}

const DarkModeCard = (): JSX.Element => {
    const themeColor = useTheme()
    const [status, setStatus] = React.useState<boolean>(false)
    useChangeTheme(status)

    return (
        <View
            style={[
                styles.container,
                { backgroundColor: themeColor.colors.notification },
            ]}
        >
            <View style={styles.content}>
                <View style={styles.iconBackground}>
                    <DarkModeIcon />
                </View>
                <Text
                    style={[
                        text.heavy,
                        text.size_small,
                        !themeColor.dark ? text.color_white : text.color_back,
                    ]}
                >
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
