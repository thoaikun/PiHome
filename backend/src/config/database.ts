import mongoose from 'mongoose'

const connect = async () => {
    try {
        await mongoose.connect(
            'mongodb+srv://piHome:12345@cluster0.tvenq.mongodb.net/piHome?retryWrites=true&w=majority'
        )
        console.log('connect successfully!')
    } catch (err) {
        console.log('Connected fail: ', err)
    }
}

export default { connect }
