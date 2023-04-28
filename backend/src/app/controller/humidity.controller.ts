import { io, Socket } from 'socket.io-client'
import Subscriber from '../../utils/subscriber'
import { DeviceModel, HumidityModel } from '../model/device.model'

class HumidityController implements Subscriber {
    private socket: Socket
    private name: String = 'humidityController'

    constructor() {
        this.socket = io('http://localhost:3000')

        this.socket.on('connect', () => {
            this.socket.emit('join controller room', this.name)
        })
    }

    public update(context): void {
        this.socket.emit('transmission', context)

        DeviceModel.deleteMany({ type: 'Humidity' })
            .then(() => {
                let model = new HumidityModel({
                    value: context.data.humidity,
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

export default HumidityController
