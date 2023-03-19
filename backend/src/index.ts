import express, { Express } from 'express'
import { createServer } from 'http'
import { Server } from 'socket.io'
import DevicesController from './app/controller/devices.controller'
import DoorController from './app/controller/door.controller'
import EnvController from './app/controller/env.controller'
import SpeakerController from './app/controller/speaker.controller'

// import TestController from './app/controller/test.controller'
import MqttClient from './utils/mqttClient'
import Subscriber from './utils/subscriber'

const port = 3000
// const app: Express = express()
// const httpServer = createServer(app)
const io = new Server(3000)

// let testController = new TestController()
let envController: Subscriber = new EnvController()
let doorController: Subscriber = new DoorController()
let speakerController: Subscriber = new SpeakerController()
let devicesController: Subscriber = new DevicesController()

const mqttClient: MqttClient = new MqttClient()
// mqttClient.subscribe(testController)
// mqttClient.subscribeTopic('thoaile/feeds/welcome-feed')
mqttClient.subscribe(envController, 'env controller')
mqttClient.subscribeTopic('thoaile/feeds/envstatus')
mqttClient.subscribe(doorController, 'door controller')
mqttClient.subscribeTopic('thoaile/feeds/doorstatus')
mqttClient.subscribe(speakerController, 'speaker controller')
mqttClient.subscribeTopic('thoaile/feeds/speakerstatus')
mqttClient.subscribe(devicesController, 'devices controller')
mqttClient.subscribeTopic('thoaile/feeds/devicesstatus')

// app.use(express.json())
// app.use(express.urlencoded({ extended: false }))
// app.use(morgan('combined'))

// app.use('/', express.static(path.join(__dirname, 'public')))

// route(app, mqttClient)

// app.listen(port, () => console.log(`Server listen on port ${port}`))

io.on('connection', (socket) => {
    socket.on('join controller room', (message) => {
        socket.join(message)
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
        let data = JSON.parse(message)
        io.to(data.to).emit('to controller', message)
    })
})

// io.on('controller', (message) => {
//     console.log('main server receive message from controller: ', message)
//     io.to('client room').emit('to client', message)
// })
