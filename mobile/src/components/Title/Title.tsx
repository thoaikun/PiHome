import { useNavigation, useTheme } from '@react-navigation/native'
import * as React from 'react'
import { Pressable, Text, View } from 'react-native'
import BackIcon from '../../../assets/svg/back_icon.svg'
import text from '../../styles/text'
import IconWrapper from '../IconWrapper/IconWrapper'
import style from '../NavBar/styles'
import styles from './styles'

const Title = (props: { name: string }): JSX.Element => {
    const themeColor = useTheme()
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Pressable
                    onPress={() => {
                        navigation.goBack()
                    }}
                >
                    <IconWrapper color='white'>
                        <BackIcon />
                    </IconWrapper>
                </Pressable>
                <Text
                    style={[
                        text.heavy,
                        text.size_medium,
                        styles.title,
                        { color: themeColor.colors.text },
                    ]}
                >
                    {props.name}
                </Text>
            </View>
        </View>
    )
}

export default Title
