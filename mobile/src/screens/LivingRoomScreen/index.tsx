import * as React from 'react'
import {Text, View, Image, Pressable, FlatList, ListRenderItemInfo } from 'react-native'
import styles from './styles'
import BackIcon from '../../../assets/svg/back_icon.svg'
import LightIcon from '../../../assets/svg/light_icon.svg'
import LightActiveIcon from '../../../assets/svg/light_active_icon.svg'
import FanIcon from '../../../assets/svg/fan_icon.svg'
import FanActiveIcon from '../../../assets/svg/fan_active_icon.svg'
import PowerIcon from '../../../assets/svg/power_icon.svg'
import PowerIconActive from '../../../assets/svg/power_active_icon.svg'
import color from '../../styles/color'
import Title from '../../components/Title/Title'
const LivingRoomScreen = (): JSX.Element => {
    const [device, setDevice] = React.useState<boolean>(true)
    const [light, setLight] = React.useState<boolean>(false)
    const [fan, setFan] = React.useState<boolean>(false)
    return (
        <View style={styles.container}>
          <Title name="Phòng Khách"/>
          <View style={styles.main}>
            <View style={styles.iconlist}>
            <Pressable 
              onPress={() => {setDevice(!device)}}>
              <View style={
                [styles.iconBackground, 
                device ? styles.iconActive : styles.iconBackground]}>
                  {device ? <LightActiveIcon />: <LightIcon />}
              </View>
            </Pressable>
            <Pressable 
              onPress={() => setDevice(!device)}>
              <View style={ 
                [styles.iconBackground, 
                !device ? styles.iconActive : styles.iconBackground]}>
                  {!device ? <FanActiveIcon />: <FanIcon />}
                  </View>
            </Pressable>
            </View>
            {device && 
            <View>
            <Pressable onPress={() => setLight(!light)}>
              <View style={[styles.buttonControl, !light ? styles.buttonControlRed : styles.buttonControlGreen]}>
                {!light ? <PowerIcon width={60} height={60} />: <PowerIconActive width={60} height={60} />}
              </View>
            </Pressable>
            <Text style={styles.lightStatus}>Trạng thái: {light ? <Text style={{color: color.green}}>BẬT</Text>: <Text style={{color: color.red}}>TẮT</Text>}</Text>
            <Pressable onPress={()=>setLight(!light)}>
              <View style={styles.power}>
                  <View style={[styles.powerHead, light ? styles.powerFull : null]}></View>
                  <View style={[styles.powerMid, light ? styles.powerFull : null]}></View>
                  <View style={[styles.powerMid, light ? styles.powerFull : null]}></View>
                  <View style={[styles.powerMid, light ? styles.powerFull : null]}></View>
                  <View style={[styles.powerTail, light ? styles.powerFull : null]}></View>
              </View>
            </Pressable>
            </View>}
            {!device &&
            <View> 
            <Pressable onPress={() => setFan(!fan)}>
              <View style={[styles.buttonControl, !fan ? styles.buttonControlRed : styles.buttonControlGreen]}>
                <View>
                  <Text style={styles.temperature}>24</Text>
                  <Text style={styles.celcius}>Celcius</Text>
                </View>
              </View>
            </Pressable>
            <Text style={styles.fanStatus}>Tốc độ quạt</Text>
            <Pressable onPress={()=>setFan(!fan)}>
              <View style={styles.power}>
                  <View style={[styles.powerHead, fan ? styles.powerFull : null]}></View>
                  <View style={[styles.powerMid, fan ? styles.powerFull : null]}></View>
                  <View style={[styles.powerMid, fan ? styles.powerFull : null]}></View>
                  <View style={[styles.powerMid, fan ? styles.powerFull : null]}></View>
                  <View style={[styles.powerTail, fan ? styles.powerFull : null]}></View>
              </View>
            </Pressable>
            </View>}
          </View>
          </View>
    )
}

export default LivingRoomScreen
