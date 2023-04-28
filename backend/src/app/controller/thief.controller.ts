import { io, Socket } from 'socket.io-client'
import Subscriber from '../../utils/subscriber'
import { NotificationModel, ThiefModel } from '../model/notification.model'

class ThiefController implements Subscriber {
    private socket: Socket
    private name: String = 'thiefController'

    constructor() {
        this.socket = io('http://localhost:3000')

        this.socket.on('connect', () => {
            this.socket.emit('join controller room', this.name)
        })
    }

    public update(context): void {
        this.socket.emit('transmission', context)

        NotificationModel.deleteMany({ type: 'Thief' })
            .then(() => {
                let model = new ThiefModel({
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

export default ThiefController
