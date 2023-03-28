// import express, { Express } from 'express'
// import { createServer } from 'http'
import { Server } from 'socket.io'
import LightController from './app/controller/light.controller'
import DoorController from './app/controller/door.controller'
import HumidityController from './app/controller/humidity.controller'
import SpeakerController from './app/controller/speaker.controller'
import TemperatureController from './app/controller/temperature.controller'

import MqttClient from './utils/mqttClient'
import Subscriber from './utils/subscriber'
import FanController from './app/controller/fan.controller'

const port = 3000
// const app: Express = express()
// const httpServer = createServer(app)
const io = new Server(3000)

const mqttClient: MqttClient = new MqttClient()

const temperatureController: Subscriber = new TemperatureController(mqttClient)
const humidityController: Subscriber = new HumidityController(mqttClient)
const doorController: Subscriber = new DoorController(mqttClient)
const speakerController: Subscriber = new SpeakerController(mqttClient)
const lightController: Subscriber = new LightController(mqttClient)
const fanController: Subscriber = new FanController(mqttClient)

mqttClient.subscribe(temperatureController, 'temperatureController')
mqttClient.subscribeTopic('thoaile/feeds/temperaturestatus')
mqttClient.subscribe(humidityController, 'humidityController')
mqttClient.subscribeTopic('thoaile/feeds/humiditystatus')
mqttClient.subscribe(doorController, 'doorController')
mqttClient.subscribeTopic('thoaile/feeds/doorstatus')
mqttClient.subscribe(speakerController, 'speakerController')
mqttClient.subscribeTopic('thoaile/feeds/speakerstatus')
mqttClient.subscribe(lightController, 'lightController')
mqttClient.subscribeTopic('thoaile/feeds/lightstatus')
mqttClient.subscribe(fanController, 'fanController')
mqttClient.subscribeTopic('thoaile/feeds/fanstatus')

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
        const {from, to, data} = message
        io.to(`${from === 'client' ? to : 'client room'}`).emit(`${from} to ${to}`, message)
        console.log(`Message from ${from} to ${to}: ${JSON.stringify(data)}`)
    })
})
