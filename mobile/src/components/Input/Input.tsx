import * as React from 'react'
import { TextInput, View } from 'react-native'
import text from '../../styles/text'
import styles from './styles'

const Input = (props: {
    placeholder?: string
    focus?: boolean
    value: string
    password?: boolean
    onChange?: (input: string) => void
}): JSX.Element => {
    const [typing, setTyping] = React.useState<boolean>(false)

    return (
        <View style={styles.container}>
            <TextInput
                placeholder={props.placeholder}
                value={props.value}
                onChangeText={props.onChange}
                onChange={({ nativeEvent: { eventCount, target, text } }) => {
                    if (text === '') setTyping(false)
                    else setTyping(true)
                }}
                focusable={props.focus}
                secureTextEntry={props.password}
                style={[styles.input, text.medium, text.size_medium]}
            />
        </View>
    )
}

export default Input
