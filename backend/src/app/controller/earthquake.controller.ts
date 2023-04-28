import { io, Socket } from 'socket.io-client'
import Subscriber from '../../utils/subscriber'
import { EarthquakeModel, NotificationModel } from '../model/notification.model'

class EarthquakeController implements Subscriber {
    private socket: Socket
    private name: String = 'earthquakeController'

    constructor() {
        this.socket = io('http://localhost:3000')

        this.socket.on('connect', () => {
            this.socket.emit('join controller room', this.name)
        })
    }

    public update(context): void {
        this.socket.emit('transmission', context)

        NotificationModel.deleteMany({ type: 'Earthquake' })
            .then(() => {
                let model = new EarthquakeModel({
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

export default EarthquakeController
