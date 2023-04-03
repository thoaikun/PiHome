import { io, Socket } from 'socket.io-client'
import MqttClient from '../../utils/mqttClient'
import Subscriber from '../../utils/subscriber'
import { LightModel } from '../model/device.model'

class LightController implements Subscriber {
    private socket: Socket
    private name: String = 'lightController'

    constructor(mqttClient: MqttClient) {
        this.socket = io('http://localhost:3000')

        this.socket.on('connect', () => {
            this.socket.emit('join controller room', this.name)
        })

        this.socket.on(`client to ${this.name}`, (message) => {
            mqttClient.sendMessage(
                'thoaile/feeds/lightstatus',
                JSON.stringify(message)
            )
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
