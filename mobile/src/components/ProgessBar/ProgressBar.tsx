import * as React from 'react'
import { Pressable, View } from 'react-native'

import styles from './styles'

const ProgressBar = (props: {
    speed: number
    setSpeed: (n: number) => void
}): JSX.Element => {
    const value = [1, 2, 3, 4, 5]

    return (
        <View style={styles.power}>
            {value.map((element: number) => (
                <Pressable
                    key={element}
                    onPress={() => props.setSpeed(element)}
                    style={[
                        element == 1
                            ? styles.powerHead
                            : element == 5
                            ? styles.powerTail
                            : styles.powerMid,
                        props.speed >= element ? styles.powerFull : null,
                    ]}
                ></Pressable>
            ))}
        </View>
    )
}

export default ProgressBar
