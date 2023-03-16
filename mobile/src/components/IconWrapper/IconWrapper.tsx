import * as React from 'react'
import { Image, Text, View } from 'react-native'
import text from '../../styles/text'
import Button from '../Button/Button'
import styles from './styles'

const IconWrapper = (props: {
    color: string
    children: JSX.Element
}): JSX.Element => {
    return (
        <View>
            <View
                style={{
                    ...styles.iconBackground,
                    backgroundColor: props.color,
                }}
            >
                {props.children}
            </View>
        </View>
    )
}

export default IconWrapper
