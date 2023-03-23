import { io, Socket } from 'socket.io-client'
import Subscriber from '../../utils/subscriber'

class DevicesController implements Subscriber {
    private socket: Socket

    constructor() {
        this.socket = io('http://localhost:3000')

        this.socket.on('connect', () => {
            this.socket.emit('join controller room', 'devices controller')
        })

        this.socket.on('to controller', (message: string) => {
            let data = JSON.parse(message)
            // Send message to mqtt
        })
    }

    public update(context: string): void {
        this.socket.emit('controller', context)
        let data = JSON.parse(context)
        // Updata database
    }

    public getSocket(): Socket {
        return this.socket
    }
}

export default DevicesController
