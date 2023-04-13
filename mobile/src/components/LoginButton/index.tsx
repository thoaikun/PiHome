import * as React from 'react'
import { Pressable, View, Text } from 'react-native'
import styles from './styles'
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import { updateLogin } from '../../redux/slice/loginSlice'
const LoginButton = (props: { extend?: boolean | undefined }): JSX.Element => {
    const [pressed, setPressed] = React.useState<boolean>(false)
    const navigation = useNavigation()
    const dispatch = useDispatch()
    return (
        <Pressable
            onPress={() => {
                setPressed(!pressed)
                dispatch(updateLogin())
                navigation.navigate('Home')
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
