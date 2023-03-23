import { NavigationContainer } from '@react-navigation/native'
import * as React from 'react'
import { useSelector } from 'react-redux'
import useSocket from './hook/useSocket'
import TabNavigator from './navigation/TabNavigator'
import { themeSelector } from './redux/selector'
import socket from './utils/socket'

const Main = (): JSX.Element => {
    const theme = useSelector(themeSelector)
    // useSocket(socket)

    return (
        <NavigationContainer theme={theme}>
            <TabNavigator />
        </NavigationContainer>
    )
}
export default Main
