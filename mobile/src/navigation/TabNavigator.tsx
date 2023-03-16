import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginScreen from '../screens/LoginScreen';
import NotifyScreen from '../screens/NotifyScreen';
import LivingRoomScreen from '../screens/LivingRoomScreen';
import HomeScreen from '../screens/HomeScreen';
import SettingScreen from '../screens/SettingScreen';
import color from '../styles/color'
import AppIcon from '../../assets/svg/app_icon.svg'
import SettingIcon from '../../assets/svg/setting_icon.svg'
import AppActiveIcon from '../../assets/svg/app_active_icon.svg'
import SettingActiveIcon from '../../assets/svg/setting_active_icon.svg'

const Tab = createBottomTabNavigator();
function TabNavigator() {
  const [visible, setVisible] = React.useState(true)
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
          tabBarIcon: () => {
              if (route.name === 'HomeScreen') {
                  return visible ? <AppIcon width={25} height={25}/> : <AppActiveIcon width={25} height={25}/>
              } 
              else if (route.name === 'SettingScreen') {
                  return !visible ? <SettingIcon width={25} height={25}/> : <SettingActiveIcon width={25} height={25}/>
              }
          },
            tabBarActiveTintColor: color.blue,
            tabBarInactiveTintColor: color.gray,
            tabBarStyle: {
                backgroundColor:'transparent',
                borderTopWidth: 0,
                position: 'absolute',
                elevation: 0
            }
          }
      )}>
        <Tab.Screen 
          name="LoginScreen" 
          component={LoginScreen}  
          options={{
              headerShown: false,
              tabBarShowLabel: false,
              tabBarButton: () => null,
          }}
        />
        <Tab.Screen 
          name="HomeScreen" 
          component={HomeScreen}  
          options={{
              headerShown: false,
              tabBarShowLabel: false,
          }}
          listeners={{
            tabPress: () => {
                visible && setVisible(!visible)
            },
        }}
      />
       <Tab.Screen 
          name="SettingScreen" 
          component={SettingScreen}  
          options={{
              headerShown: false,
              tabBarShowLabel: false,
          }}
          listeners={{
              tabPress: () => {
                  !visible && setVisible(!visible)
              },
          }}
      />
      <Tab.Screen 
          name="LivingRoomScreen" 
          component={LivingRoomScreen}  
          options={{
              headerShown: false,
              tabBarShowLabel: false,
              tabBarButton: () => null,
          }}
      />
      <Tab.Screen 
          name="NotifyScreen" 
          component={NotifyScreen}  
          options={{
              headerShown: false,
              tabBarShowLabel: false,
              tabBarButton: () => null,
          }}
      />
    </Tab.Navigator>
  );
}
export default TabNavigator