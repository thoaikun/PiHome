import { useTheme } from '@react-navigation/native'
import * as React from 'react'
import { Image, Pressable, Text, View } from 'react-native'
import Button from '../../components/Button/Button'
import Input from '../../components/Input/Input'
import LoginButton from '../../components/LoginButton/index'
import color from '../../styles/color'
import text from '../../styles/text'
import styles from './styles'
const LoginScreen = (): JSX.Element => {
    const [email, setEmail] = React.useState<string>('')
    const [password, setPassword] = React.useState<string>('')

    const theme = useTheme()

    return (
        <View
            style={[
                styles.container,
                {
                    backgroundColor: 'white',
                },
            ]}
        >
            <Image
                source={
                    theme.dark
                        ? require('../../../assets/imgs/login_background_dark.png')
                        : require('../../../assets/imgs/login_background_light.png')
                }
                style={styles.logo}
            />
            <View style={styles.loginForm}>
                <Input
                    value={email}
                    onChange={setEmail}
                    placeholder={'Email'}
                />
                <Input
                    value={password}
                    onChange={setPassword}
                    placeholder={'Password'}
                />
                <LoginButton extend />
            </View>
        </View>
    )
}

export default LoginScreen
