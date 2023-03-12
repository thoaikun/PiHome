import * as React from 'react'
import { Text, View } from 'react-native'
import CalendarIcon from '../../../assets/svg/calendar_icon.svg'
import FireIcon from '../../../assets/svg/fire_icon.svg'
import WaterIcon from '../../../assets/svg/water_icon.svg'
import text from '../../styles/text'
import styles from './styles'

const EnvironmentStatusCard = (props: {
    temperature: number
    humidity: number
}): JSX.Element => {
    return (
        <View style={styles.container}>
            <View style={styles.dateContainer}>
                <CalendarIcon height={25} width={25} />
                <Text
                    style={[text.semiBold, text.size_small, text.color_white]}
                >
                    16 Nov, 2023
                </Text>
            </View>
            <View style={styles.statusContainer}>
                <View style={styles.statusCard}>
                    <View
                        style={[
                            styles.statusCardBackground,
                            styles.statusCardBackground__red,
                        ]}
                    >
                        <FireIcon height={25} width={25} />
                    </View>
                    <View style={styles.statusCardContent}>
                        <Text
                            style={[
                                text.heavy,
                                text.size_medium,
                                text.color_white,
                            ]}
                        >
                            {props.temperature ? props.temperature : ''} &deg;C
                        </Text>
                        <Text
                            style={[
                                text.regular,
                                text.size_extraSmall,
                                text.color_white,
                            ]}
                        >
                            Nhiệt độ
                        </Text>
                    </View>
                </View>
                <View style={styles.statusCard}>
                    <View
                        style={[
                            styles.statusCardBackground,
                            styles.statusCardBackground__blue,
                        ]}
                    >
                        <WaterIcon height={25} width={25} />
                    </View>
                    <View style={styles.statusCardContent}>
                        <Text
                            style={[
                                text.heavy,
                                text.size_medium,
                                text.color_white,
                            ]}
                        >
                            {props.humidity ? props.humidity : ''} %
                        </Text>
                        <Text
                            style={[
                                text.regular,
                                text.size_extraSmall,
                                text.color_white,
                            ]}
                        >
                            Độ ẩm
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default EnvironmentStatusCard
