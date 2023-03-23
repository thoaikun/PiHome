import React from 'react'
import { useDispatch } from 'react-redux'
import { Socket } from 'socket.io-client'
import { update } from '../redux/slice/environmentSlice'

const useSocket = (socket: Socket) => {
    const dispatch = useDispatch()
    const [environmentData, setEnvironmentData] = React.useState<string>('')

    const onConnect = () => {
        socket.emit('join client room')
    }

    const onEnvironmentUpdate = (message: string) => {
        setEnvironmentData(message)
        console.log(message)
    }

    React.useEffect(() => {
        socket.on('connect', onConnect)
        socket.on('to client', onEnvironmentUpdate)

        return () => {
            socket.off('connect', onConnect)
            socket.off('to client', onEnvironmentUpdate)
        }
    }, [socket])

    React.useEffect(() => {
        dispatch(update(JSON.parse(environmentData)))
    }, [environmentData])
}

export default useSocket
