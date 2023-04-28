import io from 'socket.io-client'

const socket = io('http://192.168.150.92:3000', {
    transports: ['websocket'],
})

export default socket
