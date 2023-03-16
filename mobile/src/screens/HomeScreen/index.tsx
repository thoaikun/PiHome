import * as React from 'react'
import { FlatList, ListRenderItemInfo, Pressable, View } from 'react-native'
import DoorCard from '../../components/DoorCard/DoorCard'
import EnvironmentStatusCard from '../../components/EnvironmentStatusCard/EnvironmentStatusCard'
import Header from '../../components/Header/Header'
import DeviceCard from '../../components/RoomCard/RoomCard'
import styles from './styles'

const data = [
    {
        id: '1',
        color: '#F7DBDB',
        room: 'Phòng ngủ',
        device: '6',
    },
    {
        id: '2',
        color: '#F7F2DB',
        room: 'Nhà bếp',
        device: '6',
    },
    {
        id: '3',
        color: '#C6E6FD',
        room: 'Phòng khách',
        device: '6',
    },
    {
        id: '4',
        color: '#F7DBF4',
        room: 'Phòng Toilet',
        device: '6',
    },
]

type DeviceProps = {
    id: string
    color: string
    room: string
    device: string
}

const HomeScreen = ({ navigation }: any): JSX.Element => {
    return (
        <View style={styles.container}>
            <Header navigation={navigation} />
            <EnvironmentStatusCard temperature={30} humidity={80} />
            <DoorCard />
            <FlatList
                data={data}
                ItemSeparatorComponent={() => (
                    <View style={{ width: 10, height: 10 }} />
                )}
                renderItem={({ item }: ListRenderItemInfo<DeviceProps>) => (
                    <Pressable
                        onPress={() => navigation.navigate('LivingRoom')}
                    >
                        <DeviceCard
                            color={item.color}
                            room={item.room}
                            device={item.device}
                        />
                    </Pressable>
                )}
                keyExtractor={(item: DeviceProps) => item.id}
                numColumns={2}
            />
        </View>
    )
}

export default HomeScreen
