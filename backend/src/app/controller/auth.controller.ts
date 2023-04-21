import { io, Socket } from 'socket.io-client'
import Subscriber from '../../utils/subscriber'
import AccountModel from '../model/account.model'

class AuthController implements Subscriber {
    private socket: Socket
    private name: String = 'authController'

    constructor() {
        this.socket = io('http://localhost:3000')

        this.socket.on('connect', () => {
            this.socket.emit('join controller room', this.name)
        })

        this.socket.on(`client to ${this.name}`, (message: string) => {
            const {username, password} = JSON.parse(message)
            let status = 'successful'

            AccountModel.findOne({ username: username }).then((doc) => {
                if (!doc) {
                    status = 'failed'
                }
                else if (doc.password != password) {
                    status = 'wrong password'
                }
            });
            
            this.socket.emit('transmission', {
                from: 'authController',
                to: 'client',
                data: {
                    status: status
                }
            })
        })
    }

    public update(context): void {
        
    }

    public getSocket(): Socket {
        return this.socket
    }
}

export default AuthController
