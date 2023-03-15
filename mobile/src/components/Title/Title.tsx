import * as React from 'react'
import {Text, View, Image, Pressable} from 'react-native'
import styles from './styles'
import BackIcon from '../../../assets/svg/back_icon.svg'
import { useNavigation } from '@react-navigation/native';
const Title = (props:{name:string}): JSX.Element => {
  const navigation = useNavigation();
    return (
      <View style={styles.header}>
          <Pressable onPress={() => { navigation.navigate('HomeScreen');}}>
            <View style={styles.iconback}>
              <BackIcon />
            </View>
          </Pressable>
          <Text style={styles.title}>{props.name}</Text>
        </View>
      )
}

export default Title
