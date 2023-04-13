import { NavigationContainer } from '@react-navigation/native'
import * as React from 'react'
import { useSelector } from 'react-redux'
import useSocket from './hook/useSocket'
import TabNavigator from './navigation/TabNavigator'
import { themeSelector, loginSelector } from './redux/selector'
import socket from './utils/socket'
import AuthNaviagor from './navigation/AuthNavigator'

const Main = (): JSX.Element => {
    const theme = useSelector(themeSelector)
    const login = useSelector(loginSelector)
    //useSocket(socket)
    return (
        <NavigationContainer theme={theme}>
            {login.isLogin ? <TabNavigator /> : <AuthNaviagor />}
        </NavigationContainer>
    )
}
export default Main
