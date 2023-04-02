import { model, Schema } from 'mongoose'

interface Notification {
    time: Date
    type: string
    message: string
}

const notificationSchema = new Schema<Notification>({
    time: { type: Date, default: Date.now() },
    type: { type: String, required: true },
    message: { type: String, required: true },
})

const NotificationModel = model('Notification', notificationSchema)
export default NotificationModel
