import * as React from 'react'
import { Switch, Text, View } from 'react-native'
import IconButton from '../IconButton/IconButton'
import styles from './styles'
import color from '../../styles/color'

type DeviceProps = {
  color: string, 
  room: string, 
  device: string, 
  Icon: React.ComponentType
}

const DeviceCard = ({color, room, device, Icon}: DeviceProps): JSX.Element => {
    return ( 
      <View style={styles.container}>
          <IconButton color={color} Icon={Icon} />
          <Text style={styles.room}>{room}</Text>
          <Text style={styles.device}>{device} thiết bị</Text>
      </View>
    )
}

export default DeviceCard
