import { io, Socket } from 'socket.io-client'
import MqttClient from '../../utils/mqttClient'
import Subscriber from '../../utils/subscriber'
import { LightModel } from '../model/device.model'
import { ADAFRUIT_IO_FEEDS } from '../../config/adafruit'

class LightController implements Subscriber {
    private socket: Socket
    private name: String = 'lightController'

    constructor(mqttClient: MqttClient, topic: string) {
        this.socket = io('http://localhost:3000')

        this.socket.on('connect', () => {
            this.socket.emit('join controller room', this.name)
        })

        this.socket.on(`client to ${this.name}`, (message) => {
            mqttClient.sendMessage(ADAFRUIT_IO_FEEDS + topic, JSON.stringify(message))
        })
    }

    public update(context): void {
        this.socket.emit('transmission', context)
        // Updata database
    }

    public getSocket(): Socket {
        return this.socket
    }
}

export default LightController
