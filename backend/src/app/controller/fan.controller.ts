import { io, Socket } from 'socket.io-client'
import MqttClient from '../../utils/mqttClient'
import Subscriber from '../../utils/subscriber'
import { ADAFRUIT_IO_FEEDS } from '../../config/adafruit'
import { DeviceModel, FanModel } from '../model/device.model'

class FanController implements Subscriber {
    private socket: Socket
    private name: String = 'fanController'

    constructor(mqttClient: MqttClient, topic: string) {
        this.socket = io('http://localhost:3000')

        this.socket.on('connect', () => {
            this.socket.emit('join controller room', this.name)
        })

        this.socket.on(`client to ${this.name}`, (message) => {
            mqttClient.sendMessage(ADAFRUIT_IO_FEEDS + topic, message)
        })
    }

    public update(context): void {
        this.socket.emit('transmission', context)

        DeviceModel.deleteMany({ type: 'Fan' })
            .then(() => {
                let model = new FanModel({
                    status: context.data.status,
                })
                model.save().then(() => console.log('database is updated')) // Success
            })
            .catch(function (error) {
                console.log(error) // Failure
            })
    }

    public getSocket(): Socket {
        return this.socket
    }
}

export default FanController
