import * as React from 'react'
import { Pressable, View, Text } from 'react-native'
import styles from './styles'
import { useNavigation } from '@react-navigation/native';
const LoginButton = (props: {
    extend?: boolean | undefined
}): JSX.Element => {
    const [pressed, setPressed] = React.useState<boolean>(false)
    const navigation = useNavigation();
    return (
        <Pressable
            onPress={() => {
                setPressed(!pressed) 
                navigation.navigate('HomeScreen')
            }}
            style={[
                styles.container,
                props.extend ? styles.extend : null,
                pressed ? styles.onPress : null,
            ]}
        >
            <Text style={styles.title}>Login</Text>
        </Pressable>
    )
}

export default LoginButton
