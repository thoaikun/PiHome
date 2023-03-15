import * as mqtt from 'mqtt'
import Publisher from './publisher'

class MqttClient extends Publisher {
    private ADAFRUIT_IO_USERNAME: string = 'thoaile'
    private ADAFRUIT_IO_KEY: string = 'aio_monr4997Xd3vhe6pOTZj61UVXPfL'
    private client: mqtt.MqttClient

    constructor() {
        super()
        let option: Object = {
            host: 'io.adafruit.com',
            port: '8883',
            protocol: 'mqtts',
            username: this.ADAFRUIT_IO_USERNAME,
            password: this.ADAFRUIT_IO_KEY,
        }

        this.client = mqtt.connect(option)

        this.client.on('connect', () => console.log('Connected'))
        this.client.on('error', (err) => console.log(err))

        this.receiveMessage()
    }

    public subscribeTopic(topic: string): void {
        this.client.subscribe(topic, (err) => {
            if (err) console.log(err)
        })
    }

    public receiveMessage(): void {
        this.client.on('message', (topic: string, message) => {
            console.log('Received message:', topic, message.toString())
            this.notify(message.toString())
        })
    }

    public sendMessage(topic: string, message: string): void {
        this.client.publish(topic, message)
    }
}

export default MqttClient
