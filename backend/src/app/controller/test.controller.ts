import { io, Socket } from 'socket.io-client'
import Subscriber from '../../utils/subscriber'

class TestController implements Subscriber {
    private socket: Socket

    constructor() {
        this.socket = io('http://localhost:3000')

        this.socket.on('connect', () => {
            this.socket.emit('join controller room')
        })
    }

    public update(context: string): void {
        this.socket.emit('controller', context)
    }

    public getSocket(): Socket {
        return this.socket
    }
}

export default TestController
