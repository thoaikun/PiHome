import io from 'socket.io-client'

const socket = io('http://10.230.5.123:3000', {
    transports: ['websocket'],
})

export default socket
