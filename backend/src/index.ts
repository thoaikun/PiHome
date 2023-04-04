// import express, { Express } from 'express'
// import { createServer } from 'http'
import { Server } from 'socket.io'
import DoorController from './app/controller/door.controller'
import FanController from './app/controller/fan.controller'
import HumidityController from './app/controller/humidity.controller'
import LightController from './app/controller/light.controller'
import SpeakerController from './app/controller/speaker.controller'
import TemperatureController from './app/controller/temperature.controller'
import db from './config/database'

import MqttClient from './utils/mqttClient'
import Subscriber from './utils/subscriber'

const port = 3000
// const app: Express = express()
// const httpServer = createServer(app)
const io = new Server(3000)
db.connect()

const mqttClient: MqttClient = new MqttClient()
const [temperatureFeed, humidityFeed, doorFeed, speakerFeed, lightFeed, fanFeed]
    = ['pihome-temperature', 'pihome-humidity', 'pihome-door', 'pihome-speaker', 'pihome-light', 'pihome-fan']

const temperatureController: Subscriber = new TemperatureController()
const humidityController: Subscriber = new HumidityController()
const doorController: Subscriber = new DoorController(mqttClient, doorFeed)
const speakerController: Subscriber = new SpeakerController(mqttClient, speakerFeed)
const lightController: Subscriber = new LightController(mqttClient, lightFeed)
const fanController: Subscriber = new FanController(mqttClient, fanFeed)

mqttClient.subscribe(temperatureController, 'temperatureController')
mqttClient.subscribeTopic(temperatureFeed)
mqttClient.subscribe(humidityController, 'humidityController')
mqttClient.subscribeTopic(humidityFeed)
mqttClient.subscribe(doorController, 'doorController')
mqttClient.subscribeTopic(doorFeed)
mqttClient.subscribe(speakerController, 'speakerController')
mqttClient.subscribeTopic(speakerFeed)
mqttClient.subscribe(lightController, 'lightController')
mqttClient.subscribeTopic(lightFeed)
mqttClient.subscribe(fanController, 'fanController')
mqttClient.subscribeTopic(fanFeed)

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

    socket.on('transmission', (message) => {
        const { from, to, data } = message
        io.to(`${from === 'client' ? to : 'client room'}`).emit(
            `${from} to ${to}`,
            message
        )
        console.log(`Message from ${from} to ${to}: ${JSON.stringify(data)}`)
    })
})
