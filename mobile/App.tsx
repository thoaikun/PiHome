import { useFonts } from 'expo-font'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import DoorCard from './src/components/DoorCard/DoorCard'
import EnvironmentStatusCard from './src/components/EnvironmentStatusCard/EnvironmentStatusCard'

export default function App() {
    const [visible, setVisible] = React.useState(true)
    //load font
    const [fontLoaded, error] = useFonts({
        'SF-Pro-Rounded_heavy': require('./assets/font/SF-Pro-Rounded-Heavy.otf'),
        'SF-Pro-Rounded_bold': require('./assets/font/SF-Pro-Rounded-Bold.otf'),
        'SF-Pro-Rounded_semibold': require('./assets/font/SF-Pro-Rounded-Semibold.otf'),
        'SF-Pro-Rounded_medium': require('./assets/font/SF-Pro-Rounded-Medium.otf'),
        'SF-Pro-Rounded_regular': require('./assets/font/SF-Pro-Rounded-Regular.otf'),
    })

    if (!fontLoaded) {
        return null
    }
    return (
        <View style={style.main}>
            <EnvironmentStatusCard />
            <DoorCard />
        </View>
    )
}

const style = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20,
    },
})
