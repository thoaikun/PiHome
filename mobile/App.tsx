import { useFonts } from 'expo-font'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Button from './src/components/Button/Button'
import DoorCard from './src/components/DoorCard/DoorCard'
import EnvironmentStatusCard from './src/components/EnvironmentStatusCard/EnvironmentStatusCard'
import Input from './src/components/Input/Input'
import NotifyCard from './src/components/NotifyCard/NotifyCard'
import text from './src/styles/text'

export default function App() {
    const [visible, setVisible] = React.useState(true)
    const [value, setValue] = React.useState<string>('')
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
            <EnvironmentStatusCard temperature={30} humidity={80} />
            <DoorCard />
            <NotifyCard type='warning' message='Có người đột nhập' />
            <Input value={value} onChange={setValue} placeholder={'email'} />
            <Button extend>
                <Text style={[text.bold, text.size_medium, text.color_white]}>
                    Login
                </Text>
            </Button>
        </View>
    )
}

const style = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20,
        backgroundColor: '#F6F2DB',
    },
})
