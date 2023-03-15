import * as React from 'react'
import { Pressable, Text, View } from 'react-native'
import styles from './styles'

const VoiceButton = (props: {
    extend?: boolean | undefined
}): JSX.Element => {
    const [pressed, setPressed] = React.useState<boolean>(false)

    return (
        <Pressable
            onPress={() => setPressed(!pressed)}
            style={[
                styles.container,
                props.extend ? styles.extend : null,
                pressed ? styles.onPress : null,
            ]}
        >
           {!pressed ? <Text style={styles.title}>Kiểm tra loa</Text> : <Text style={styles.title}>Dừng kiểm tra</Text>}
        </Pressable>
    )
}

export default VoiceButton
