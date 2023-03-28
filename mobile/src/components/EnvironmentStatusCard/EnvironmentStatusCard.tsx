import * as React from 'react'
import { Text, View } from 'react-native'
import { useSelector } from 'react-redux'
import CalendarIcon from '../../../assets/svg/calendar_icon.svg'
import FireIcon from '../../../assets/svg/fire_icon.svg'
import WaterIcon from '../../../assets/svg/water_icon.svg'
import { temperatureSelector, humiditySelector } from '../../redux/selector'

import text from '../../styles/text'
import styles from './styles'

const EnvironmentStatusCard = (): JSX.Element => {
    const { temperature } = useSelector(temperatureSelector)
    const { humidity } = useSelector(humiditySelector)

    var dateObj = new Date()
    var month = dateObj.getUTCMonth() + 1 //months from 1-12
    var day = dateObj.getUTCDate()
    var year = dateObj.getUTCFullYear()
    const monthNames = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ]

    return (
        <View style={styles.container}>
            <View style={styles.dateContainer}>
                <CalendarIcon height={25} width={25} />
                <Text
                    style={[text.semiBold, text.size_small, text.color_white]}
                >
                    {day} {monthNames[month]}, {year}
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
                                text.size_small,
                                text.color_white,
                            ]}
                        >
                            {temperature ? temperature : ''} &deg;C
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
                                text.size_small,
                                text.color_white,
                            ]}
                        >
                            {humidity ? humidity : ''} %
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
