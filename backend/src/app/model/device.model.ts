import { model, Schema } from 'mongoose'

const options = { discriminatorKey: 'type' }

interface Device {
    updateTime: Date
}

interface Light {
    status: boolean
}

interface Door {
    status: boolean
}

interface Speaker {
    status: boolean
}

interface Temperature {
    value: number
}

interface Humidity {
    value: number
}

interface Fan {
    speed: number
}

const deviceSchema = new Schema<Device>(
    {
        updateTime: { type: Date, default: Date.now() },
    },
    options
)

const DeviceModel = model('Device', deviceSchema)

const LightModel = DeviceModel.discriminator(
    'Light',
    new Schema<Light>(
        {
            status: { type: Boolean, required: true },
        },
        options
    )
)

const DoorModel = DeviceModel.discriminator(
    'Door',
    new Schema<Door>(
        {
            status: { type: Boolean, required: true },
        },
        options
    )
)

const SpeakerModel = DeviceModel.discriminator(
    'Speaker',
    new Schema<Speaker>(
        {
            status: { type: Boolean, required: true },
        },
        options
    )
)

const TemperatureModel = DeviceModel.discriminator(
    'Temperature',
    new Schema<Temperature>(
        {
            value: { type: Number, required: true },
        },
        options
    )
)

const HumidityModel = DeviceModel.discriminator(
    'Humidity',
    new Schema<Humidity>(
        {
            value: { type: Number, required: true },
        },
        options
    )
)

const FanModel = DeviceModel.discriminator(
    'Fan',
    new Schema<Fan>(
        {
            speed: { type: Number, required: true },
        },
        options
    )
)

export {
    DeviceModel,
    LightModel,
    DoorModel,
    SpeakerModel,
    TemperatureModel,
    HumidityModel,
    FanModel,
}
