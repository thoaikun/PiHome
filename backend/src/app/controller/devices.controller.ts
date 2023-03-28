import { io, Socket } from 'socket.io-client'
import MqttClient from '../../utils/mqttClient'
import Subscriber from '../../utils/subscriber'

class DevicesController implements Subscriber {
    private socket: Socket
    private name: String = 'devicesController'

    constructor(mqttClient: MqttClient) {
        this.socket = io('http://localhost:3000')

        this.socket.on('connect', () => {
            this.socket.emit('join controller room', this.name)
        })

        this.socket.on(`client to ${this.name}`, (message) => {
            const data = {
                from: this.name,
                to: 'client',
                data: JSON.parse(message)
            }
            mqttClient.sendMessage('thoaile/feeds/devicesstatus', data.toString())
        })
    }

    public update(context: string): void {
        this.socket.emit('transmission', context)
        // Updata database
    }

    public getSocket(): Socket {
        return this.socket
    }
}

export default DevicesController
