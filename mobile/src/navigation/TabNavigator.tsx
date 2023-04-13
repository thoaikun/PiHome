import {
    BottomTabScreenProps,
    createBottomTabNavigator,
} from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import Title from '../components/Title/Title'
import HomeScreen from '../screens/HomeScreen'
import LivingRoomScreen from '../screens/LivingRoomScreen'
import NotifyScreen from '../screens/NotifyScreen'
import SettingScreen from '../screens/SettingScreen'
import { AppTabParamList, HomeStackParamList } from '../utils/navigator'
import LoginScreen from '../screens/LoginScreen'

const Tab = createBottomTabNavigator<AppTabParamList>()
const HomeStack = createNativeStackNavigator<HomeStackParamList>()

const HomeStackCmp = ({
    navigation,
}: BottomTabScreenProps<AppTabParamList, 'HomeStack'>): JSX.Element => {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen
                name='Home'
                component={HomeScreen}
                options={{
                    headerShown: false,
                }}
            />
            <HomeStack.Screen
                name='Notification'
                component={NotifyScreen}
                options={{
                    headerShown: false,
                }}
            />
            <HomeStack.Screen
                name='LivingRoom'
                component={LivingRoomScreen}
                options={{
                    headerShown: false,
                }}
            />
            <HomeStack.Screen
                name='Login'
                component={LoginScreen}
                options={{
                    headerShown: false,
                }}
            />
        </HomeStack.Navigator>
    )
}

function TabNavigator() {
    return (
        <Tab.Navigator
            tabBar={(props) => <NavBar {...props} />}
            screenOptions={{
                headerShown: false,
            }}
        >
            <Tab.Screen name='HomeStack' component={HomeStackCmp} />
            <Tab.Screen name='Setting' component={SettingScreen} />
        </Tab.Navigator>
    )
}

export default TabNavigator
