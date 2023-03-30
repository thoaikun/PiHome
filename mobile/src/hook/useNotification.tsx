import * as Device from 'expo-device'
import * as Notifications from 'expo-notifications'
import * as React from 'react'
import { Platform } from 'react-native'

Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldPlaySound: true,
        shouldShowAlert: true,
        shouldSetBadge: false,
    }),
})

const defaultNotificationListener: Notifications.Subscription = {
    remove: () => {},
}

const useNotifications = () => {
    const [expoPushToken, setExpoPushToken] = React.useState<
        string | undefined
    >(undefined)
    const [notification, setNotification] =
        React.useState<Notifications.Notification>()
    const notificationListener = React.useRef<Notifications.Subscription>(
        defaultNotificationListener
    )
    const responseListener = React.useRef<Notifications.Subscription>(
        defaultNotificationListener
    )

    React.useEffect(() => {
        registerForPushNotificationsAsync().then((token) => {
            setExpoPushToken(token)
        })

        notificationListener.current =
            Notifications.addNotificationReceivedListener((notification) => {
                setNotification(notification)
            })

        responseListener.current =
            Notifications.addNotificationResponseReceivedListener(
                (response) => {
                    console.log(response)
                }
            )

        return () => {
            Notifications.removeNotificationSubscription(
                notificationListener.current
            )
            Notifications.removeNotificationSubscription(
                responseListener.current
            )
        }
    }, [])

    return { schedulePushNotification }
}

const schedulePushNotification = async (title: string, body: string) => {
    await Notifications.scheduleNotificationAsync({
        content: {
            title: title,
            body: body,
            data: { data: 'goes here' },
        },
        trigger: null,
    })
}

const registerForPushNotificationsAsync = async () => {
    let token

    if (Platform.OS === 'android') {
        await Notifications.setNotificationChannelAsync('default', {
            name: 'default',
            importance: Notifications.AndroidImportance.MAX,
            vibrationPattern: [0, 250, 250, 250],
            lightColor: '#FF231F7C',
        })
    }

    if (Device.isDevice) {
        const { status: existingStatus } =
            await Notifications.getPermissionsAsync()
        let finalStatus = existingStatus
        if (existingStatus !== 'granted') {
            const { status } = await Notifications.requestPermissionsAsync()
            finalStatus = status
        }
        if (finalStatus !== 'granted') {
            alert('Failed to get push token for push notification!')
            return
        }
        token = (await Notifications.getExpoPushTokenAsync()).data
        console.log(token)
    } else {
        alert('Must use physical device for Push Notifications')
    }

    return token
}

export default useNotifications
