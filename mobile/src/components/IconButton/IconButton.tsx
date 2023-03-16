import * as React from 'react'
import {Text, View, Image} from 'react-native'
import Button from '../Button/Button'
import styles from './styles'
import text from '../../styles/text'

type IconProps = {
  color: string,
  Icon: React.ComponentType
}
const IconButton = ({color, Icon}: IconProps): JSX.Element => {
    return (
        <View>
          <View style={{
            ...styles.iconBackground, 
            backgroundColor: color
          }}>
              <Icon />
          </View>
        </View>     
      
    )
}

export default IconButton
