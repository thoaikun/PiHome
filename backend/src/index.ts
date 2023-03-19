import express, { Express } from 'express'
import { createServer } from 'http'
import { Server } from 'socket.io'
import EnvController from './app/controller/env.controller'

import TestController from './app/controller/test.controller'
import MqttClient from './utils/mqttClient'
import Subscriber from './utils/subscriber'

const port = 3000
// const app: Express = express()
// const httpServer = createServer(app)
const io = new Server(3000)

// let testController = new TestController()
let envController: Subscriber = new EnvController()

const mqttClient: MqttClient = new MqttClient()
// mqttClient.subscribe(testController)
// mqttClient.subscribeTopic('thoaile/feeds/welcome-feed')
mqttClient.subscribe(envController, 'env controller')
mqttClient.subscribeTopic('thoaile/feeds/envstatus')

// app.use(express.json())
// app.use(express.urlencoded({ extended: false }))
// app.use(morgan('combined'))

// app.use('/', express.static(path.join(__dirname, 'public')))

// route(app, mqttClient)

// app.listen(port, () => console.log(`Server listen on port ${port}`))

const controllerSocket = {}

io.on('connection', (socket) => {
    socket.on('join controller room', (message) => {
        // socket.join('controller room')
        controllerSocket[message] = socket
    })

    socket.on('join client room', () => {
        socket.join('client room')

        io.in('client room')
            .fetchSockets()
            .then((sockets) => {
                for (let socket of sockets) {
                    console.log(socket.id)
                }
            })
    })

    socket.on('controller', (message: string) => {
        io.to('client room').emit('to client', message)
    })

    socket.on('client', (message: string) => {
        // io.to('controller room').emit('to controller', message)
        let data = JSON.parse(message)
        controllerSocket[data.to].emit('to controller', message)
    })
})

// io.on('controller', (message) => {
//     console.log('main server receive message from controller: ', message)
//     io.to('client room').emit('to client', message)
// })
