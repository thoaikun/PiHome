import { io, Socket } from 'socket.io-client'
import MqttClient from '../../utils/mqttClient'
import Subscriber from '../../utils/subscriber'

class FanController implements Subscriber {
    private socket: Socket
    private name: String = 'fanController'

    constructor(mqttClient: MqttClient, feed: String) {
        this.socket = io('http://localhost:3000')

        this.socket.on('connect', () => {
            this.socket.emit('join controller room', this.name)
        })

        this.socket.on(`client to ${this.name}`, (message) => {
            mqttClient.sendMessage('thoaile/feeds/' + feed, JSON.stringify(message))
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

export default FanController
