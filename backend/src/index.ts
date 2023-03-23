// import express, { Express } from 'express'
// import { createServer } from 'http'
import { Server } from 'socket.io'
import DevicesController from './app/controller/devices.controller'
import DoorController from './app/controller/door.controller'
import EnvController from './app/controller/env.controller'
import SpeakerController from './app/controller/speaker.controller'

import MqttClient from './utils/mqttClient'
import Subscriber from './utils/subscriber'

const port = 3000
// const app: Express = express()
// const httpServer = createServer(app)
const io = new Server(3000)

const mqttClient: MqttClient = new MqttClient()

let envController: Subscriber = new EnvController(mqttClient)
let doorController: Subscriber = new DoorController(mqttClient)
let speakerController: Subscriber = new SpeakerController(mqttClient)
let devicesController: Subscriber = new DevicesController(mqttClient)

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

    socket.on('transmission', (message: string) => {
        const {from, to, data} = JSON.parse(message)
        io.to(`${from === 'client' ? to : 'client room'}`).emit(`${from} to ${to}`, data)
        console.log(`Message from ${from} to ${to}: ${data}`)
    })
})
