import { NavigationContainer } from '@react-navigation/native'
import * as React from 'react'
import { useSelector } from 'react-redux'
import TabNavigator from './navigation/TabNavigator'
import { themeSelector } from './redux/selector'
import socket from './utils/socket'

const Main = (): JSX.Element => {
    const theme = useSelector(themeSelector)

    React.useEffect(() => {
        const onConnect = () => {
            socket.emit('join client room')
        }

        const onEnvironmentUpdate = (message: string) => {
            console.log(message)
        }

        socket.on('connect', onConnect)
        socket.on('to client', onEnvironmentUpdate)

        return () => {
            socket.off('connect', onConnect)
            socket.off('to client', onEnvironmentUpdate)
        }
    }, [])

    return (
        <NavigationContainer theme={theme}>
            <TabNavigator />
        </NavigationContainer>
    )
}
export default Main
