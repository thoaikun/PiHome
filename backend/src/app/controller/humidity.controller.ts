import { io, Socket } from 'socket.io-client'
import Subscriber from '../../utils/subscriber'

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
        // Updata database
    }

    public getSocket(): Socket {
        return this.socket
    }
}

export default HumidityController
