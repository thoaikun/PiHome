import React from 'react'
import { useDispatch } from 'react-redux'
import { Socket } from 'socket.io-client'
import { updateTemperature } from '../redux/slice/temperatureSlice'
import { updateHumidity } from '../redux/slice/humiditySlice'
import { updateDoor } from '../redux/slice/doorSlice'
import { updateSpeaker } from '../redux/slice/speakerSlice'

const useSocket = (socket: Socket) => {
    const dispatch = useDispatch()
    const onConnect = () => {
        socket.emit('join client room')
    }
    const onTemperatureUpdate = (message: string) => {
        dispatch(updateTemperature(message))
        console.log(message)
    }
    const onHumidityUpdate = (message: string) => {
        dispatch(updateHumidity(message))
        console.log(message)
    }
    const onDoorUpdate = (message: string) => {
        dispatch(updateDoor(message))
        console.log(message)
    }
    const onSpeakerUpdate = (message: string) => {
        dispatch(updateSpeaker(message))
        console.log(message)
    }
    const onLightUpdate = (message: string) => {
        dispatch(updateTemperature(JSON.parse(message)))
        console.log(message)
    }
    const onFanUpdate = (message: string) => {
        dispatch(updateTemperature(JSON.parse(message)))
        console.log(message)
    }

    React.useEffect(() => {
        socket.on('connect', onConnect)
        socket.on('temperatureController to client', onTemperatureUpdate)
        socket.on('humidityController to client', onHumidityUpdate)
        socket.on('doorController to client', onDoorUpdate)
        socket.on('speakerController to client', onSpeakerUpdate)
        socket.on('lightController to client', onLightUpdate)
        socket.on('fanController to client', onFanUpdate)

        return () => {
            socket.off('connect', onConnect)
            socket.off('to client', onTemperatureUpdate)
            socket.off('to client', onTemperatureUpdate)
            socket.off('to client', onHumidityUpdate)
            socket.off('to client', onDoorUpdate)
            socket.off('to client', onSpeakerUpdate)
            socket.off('to client', onLightUpdate)
            socket.off('to client', onFanUpdate)
        }
    }, [socket])
}

export default useSocket
