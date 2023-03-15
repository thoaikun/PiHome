import * as React from 'react'
import {Text, View, Image, Pressable, FlatList, ListRenderItemInfo } from 'react-native'
import styles from './styles'
import Header from '../../components/Header/Header'
import EnvironmentStatusCard from '../../components/EnvironmentStatusCard/EnvironmentStatusCard'
import DoorCard from '../../components/DoorCard/DoorCard'
import DeviceCard from '../../components/DeviceCard/DeviceCard'
import BedIcon from '../../../assets/svg/bed_icon.svg'
import CakeIcon from '../../../assets/svg/cake_icon.svg'
import TVIcon from '../../../assets/svg/tv_icon.svg'
import ToiletIcon from '../../../assets/svg/toilet_icon.svg'
import { useNavigation } from '@react-navigation/native';
const data = [
    {
        id: '1',
        color:'#F7DBDB',
        room: 'Phòng ngủ',
        device: '6', 
        Icon: BedIcon
    },
    {
        id: '2',
        color:'#F7F2DB',
        room: 'Nhà bếp',
        device: '6', 
        Icon: CakeIcon
    },
    {
        id: '3',
        color:'#C6E6FD',
        room: 'Phòng khách',
        device: '6', 
        Icon: TVIcon
    },
    {
        id: '4',
        color:'#F7DBF4',
        room: 'Phòng Toilet',
        device: '6', 
        Icon: ToiletIcon
    }
]
type DeviceProps = {
    id: string,
    color: string, 
    room: string, 
    device: string, 
    Icon: React.ComponentType
  }
const HomeScreen = (): JSX.Element => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
           <Header />
           <EnvironmentStatusCard temperature={30} humidity={80} />
           <DoorCard />
           <FlatList
                data={data}
                ItemSeparatorComponent={() => <View style={{width: 10, height: 10}} />}
                renderItem={({ item }: ListRenderItemInfo<DeviceProps>) => (
                    <Pressable onPress={() => navigation.navigate('LivingRoomScreen')}>
                        <DeviceCard color={item.color} room={item.room} device={item.device} Icon={item.Icon} />
                    </Pressable>
                )}
                keyExtractor={(item: DeviceProps) => item.id}
                numColumns={2}
            />
        </View>
    )
}

export default HomeScreen
