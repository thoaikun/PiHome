import { useTheme } from '@react-navigation/native'
import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import AppActiveIcon from '../../../assets/svg/app_active_icon.svg'
import AppIcon from '../../../assets/svg/app_icon.svg'
import SettingActiveIcon from '../../../assets/svg/setting_active_icon.svg'
import SettingIcon from '../../../assets/svg/setting_icon.svg'
import styles from './styles'

const Navbar = ({ state, descriptors, navigation }: any): JSX.Element => {
    const themeColor = useTheme()

    return (
        <View
            style={[
                styles.background,
                { backgroundColor: themeColor.colors.background },
            ]}
        >
            {state.routes.map((route: any, index: any) => {
                const { options } = descriptors[route.key]
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                        ? options.title
                        : route.name

                const isFocused = state.index === index

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    })

                    if (!isFocused && !event.defaultPrevented) {
                        // The `merge: true` option makes sure that the params inside the tab screen are preserved
                        navigation.navigate({ name: route.name, merge: true })
                    }
                }

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    })
                }

                return (
                    <TouchableOpacity
                        key={route.key}
                        accessibilityRole='button'
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={styles.element}
                    >
                        {label === 'HomeStack' ? (
                            isFocused ? (
                                <AppActiveIcon width={25} height={25} />
                            ) : (
                                <AppIcon width={25} height={25} />
                            )
                        ) : isFocused ? (
                            <SettingActiveIcon width={25} height={25} />
                        ) : (
                            <SettingIcon width={25} height={25} />
                        )}
                    </TouchableOpacity>
                )
            })}
        </View>
    )
}

export default Navbar
