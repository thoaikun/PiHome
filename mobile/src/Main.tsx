import { NavigationContainer } from '@react-navigation/native'
import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import useNotifications from './hook/useNotification'
import useSocket from './hook/useSocket'
import TabNavigator from './navigation/TabNavigator'
import {
    earthquakeSelector,
    fireSelector,
    themeSelector,
    thiefSelector,
} from './redux/selector'
import { updateEarthquakeNotification } from './redux/slice/earthquakeSlice'
import { updateFireNotification } from './redux/slice/fireSlice'
import { updateThiefNotification } from './redux/slice/thiefSlice'
import socket from './utils/socket'

const Main = (): JSX.Element => {
    const theme = useSelector(themeSelector)
    useSocket(socket)
    const { schedulePushNotification } = useNotifications()
    const dispatch = useDispatch()

    const { status: thiefStatus } = useSelector(thiefSelector)
    const { status: fireStatus } = useSelector(fireSelector)
    const { status: earthquakeStatus } = useSelector(earthquakeSelector)

    React.useEffect(() => {
        const sendNotify = async (title: string, message: string) => {
            await schedulePushNotification(title, message)
        }
        if (thiefStatus) {
            sendNotify('Warning', 'Someone try to break your home')
            dispatch(updateThiefNotification({ status: false }))
        }
    }, [thiefStatus])

    React.useEffect(() => {
        const sendNotify = async (title: string, message: string) => {
            await schedulePushNotification(title, message)
        }
        if (fireStatus) {
            sendNotify('Alert', 'Fireeeee !!!!')
            dispatch(updateFireNotification({ status: false }))
        }
    }, [fireStatus])

    React.useEffect(() => {
        const sendNotify = async (title: string, message: string) => {
            await schedulePushNotification(title, message)
        }
        if (earthquakeStatus) {
            sendNotify('Alert', 'Earthquakeeeee !!!!')
            dispatch(updateEarthquakeNotification({ status: false }))
        }
    }, [earthquakeStatus])

    return (
        <NavigationContainer theme={theme}>
            <TabNavigator />
        </NavigationContainer>
    )
}
export default Main
