import { model, Schema } from 'mongoose'

const options = { discriminatorKey: 'type' }

interface Notification {
    updateTime: Date
}

interface Earthquake {
    status: boolean
}

interface Fire {
    status: boolean
}

interface Thief {
    status: boolean
}

const notificationSchema = new Schema<Notification>(
    {
        updateTime: { type: Date, default: Date.now() },
    },
    options
)

const NotificationModel = model('Notification', notificationSchema)

const EarthquakeModel = NotificationModel.discriminator(
    'Earthquake',
    new Schema<Earthquake>(
        {
            status: { type: Boolean, required: true },
        },
        options
    )
)

const FireModel = NotificationModel.discriminator(
    'Fire',
    new Schema<Fire>(
        {
            status: { type: Boolean, required: true },
        },
        options
    )
)

const ThiefModel = NotificationModel.discriminator(
    'Thief',
    new Schema<Thief>(
        {
            status: { type: Boolean, required: true },
        },
        options
    )
)

export {
    NotificationModel,
    EarthquakeModel,
    FireModel,
    ThiefModel
}
