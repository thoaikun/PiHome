import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../screens/HomeScreen'
import LoginScreen from '../screens/LoginScreen/index'
import TabNavigator from './TabNavigator'

const Stack = createStackNavigator()

const AuthNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Login' component={LoginScreen} />
            <Stack.Screen name='Home' component={TabNavigator} />
        </Stack.Navigator>
    )
}

export default AuthNavigator
