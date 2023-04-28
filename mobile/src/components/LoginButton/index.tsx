import * as React from 'react'
import { Pressable, Text } from 'react-native'
import styles from './styles'

const LoginButton = (props: {
    extend?: boolean | undefined
    onPress: () => void
}): JSX.Element => {
    const [pressed, setPressed] = React.useState<boolean>(false)

    return (
        <Pressable
            onPress={() => {
                setPressed(!pressed)
                props.onPress()
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
