import { useNavigation, useTheme } from '@react-navigation/native'
import * as React from 'react'
import { Image, ScrollView, Text, View } from 'react-native'
import { useSelector } from 'react-redux'
import Input from '../../components/Input/Input'
import LoginButton from '../../components/LoginButton/index'
import { loginSelector } from '../../redux/selector'
import text from '../../styles/text'
import socket from '../../utils/socket'
import styles from './styles'

const LoginScreen = (): JSX.Element => {
    const [email, setEmail] = React.useState<string>('')
    const [password, setPassword] = React.useState<string>('')
    const theme = useTheme()
    const { isLogin, invalidAccount } = useSelector(loginSelector)
    const navigation = useNavigation()

    React.useEffect(() => {
        if (isLogin) {
            navigation.navigate('Home')
        }
    }, [isLogin])

    const handleLogin = (username: string, password: string) => {
        setEmail('')
        setPassword('')
        let data = {
            from: 'client',
            to: 'authController',
            data: {
                username,
                password,
            },
        }
        socket.emit('transmission', data)
    }

    return (
        <ScrollView
            contentContainerStyle={[
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
                    password
                    placeholder={'Password'}
                />
                {invalidAccount && (
                    <Text
                        style={[styles.alertText, text.medium, text.size_small]}
                    >
                        Username or password is invalid
                    </Text>
                )}
                <LoginButton
                    extend
                    onPress={() => handleLogin(email, password)}
                />
            </View>
        </ScrollView>
    )
}

export default LoginScreen
