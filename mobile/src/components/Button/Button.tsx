import * as React from 'react'
import { Pressable, View } from 'react-native'
import styles from './styles'

const Button = (props: {
    children: JSX.Element | JSX.Element[]
    extend?: boolean | undefined
}): JSX.Element => {
    return (
        <Pressable
            style={[styles.container, props.extend ? styles.extend : null]}
        >
            {props.children}
        </Pressable>
    )
}

export default Button
