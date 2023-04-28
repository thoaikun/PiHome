import { io, Socket } from 'socket.io-client'
import AccountModel from '../model/account.model'

class AuthController {
    private socket: Socket
    private name: String = 'authController'

    constructor() {
        this.socket = io('http://localhost:3000')

        this.socket.on('connect', () => {
            this.socket.emit('join controller room', this.name)
        })

        this.socket.on(`client to ${this.name}`, (message: string) => {
            const { username, password } = JSON.parse(message)
            let status = true

            AccountModel.findOne({ username: username })
                .then((doc) => {
                    if (!doc) {
                        status = false
                    } else if (doc.password != password) {
                        status = false
                    }
                })
                .then(() => {
                    this.socket.emit('transmission', {
                        from: 'authController',
                        to: 'client',
                        data: {
                            status: status,
                        },
                    })
                })
        })
    }

    public getSocket(): Socket {
        return this.socket
    }
}

export default AuthController
