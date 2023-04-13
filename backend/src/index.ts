import { Server } from 'socket.io'
import db from './config/database'
import MqttClient from './utils/mqttClient'

import DoorController from './app/controller/door.controller'
import FanController from './app/controller/fan.controller'
import HumidityController from './app/controller/humidity.controller'
import LightController from './app/controller/light.controller'
import SpeakerController from './app/controller/speaker.controller'
import TemperatureController from './app/controller/temperature.controller'
import EarthquakeController from './app/controller/earthquake.controller'
import FireController from './app/controller/fire.controller'
import ThiefController from './app/controller/thief.controller'

import Subscriber from './utils/subscriber'

const io = new Server(3000)
db.connect()

const mqttClient: MqttClient = new MqttClient()
const [temperature, humidity, door, speaker, light, fan, earthquake, fire, thief]
    = ['temperature', 'humidity', 'door', 'speaker', 'light', 'fan', 'earthquake', 'fire', 'thief']
        .map((item) => ({ feed: `pihome-${item}`, name: `${item}Controller` }))

const temperatureController: Subscriber = new TemperatureController()
const humidityController: Subscriber = new HumidityController()
const doorController: Subscriber = new DoorController(mqttClient, door.feed)
const speakerController: Subscriber = new SpeakerController(mqttClient, speaker.feed)
const lightController: Subscriber = new LightController(mqttClient, light.feed)
const fanController: Subscriber = new FanController(mqttClient, fan.feed)
const earthquakeController: Subscriber = new EarthquakeController()
const fireController: Subscriber = new FireController()
const thiefController: Subscriber = new ThiefController()

mqttClient.subscribe(temperatureController, temperature.name)
mqttClient.subscribeTopic(temperature.feed)
mqttClient.subscribe(humidityController, humidity.name)
mqttClient.subscribeTopic(humidity.feed)
mqttClient.subscribe(doorController, door.name)
mqttClient.subscribeTopic(door.feed)
mqttClient.subscribe(speakerController, speaker.name)
mqttClient.subscribeTopic(speaker.feed)
mqttClient.subscribe(lightController, light.name)
mqttClient.subscribeTopic(light.feed)
mqttClient.subscribe(fanController, fan.name)
mqttClient.subscribeTopic(fan.feed)
mqttClient.subscribe(earthquakeController, earthquake.name)
mqttClient.subscribeTopic(earthquake.feed)
mqttClient.subscribe(fireController, fire.name)
mqttClient.subscribeTopic(fire.feed)
mqttClient.subscribe(thiefController, thief.name)
mqttClient.subscribeTopic(thief.feed)

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
            data
        )
        console.log(`Message from ${from} to ${to}: ${JSON.stringify(data)}`)
    })
})
