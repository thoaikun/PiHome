import { Express } from 'express'
import MqttClient from '../utils/mqttClient'

const route = (app: Express, mqttClient: MqttClient) => {
    app.use('/test')
}

export default route
