import { useFonts } from 'expo-font'
import * as React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Provider } from 'react-redux'
import Main from './src/Main'
import store from './src/redux/store'

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
        <SafeAreaProvider>
            <Provider store={store}>
                <Main />
            </Provider>
        </SafeAreaProvider>
    )
}
