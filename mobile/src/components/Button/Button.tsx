import * as React from 'react'
import { Pressable, View } from 'react-native'
import styles from './styles'

const Button = (props: {
    children: JSX.Element | JSX.Element[]
    extend?: boolean | undefined
}): JSX.Element => {
    const [pressed, setPressed] = React.useState<boolean>(false)

    return (
        <Pressable
            onPressIn={() => setPressed(true)}
            onPressOut={() => setPressed(false)}
            style={[
                styles.container,
                props.extend ? styles.extend : null,
                pressed ? styles.onPress : null,
            ]}
        >
            {props.children}
        </Pressable>
    )
}

export default Button
