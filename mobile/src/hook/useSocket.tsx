import React from 'react'
import { useDispatch } from 'react-redux'
import { Socket } from 'socket.io-client'
import { updateDoor } from '../redux/slice/doorSlice'
import { updateEarthquakeNotification } from '../redux/slice/earthquakeSlice'
import { updateFireNotification } from '../redux/slice/fireSlice'
import { updateHumidity } from '../redux/slice/humiditySlice'
import { updateSpeaker } from '../redux/slice/speakerSlice'
import { updateTemperature } from '../redux/slice/temperatureSlice'
import { updateThiefNotification } from '../redux/slice/thiefSlice'

const useSocket = (socket: Socket) => {
    const dispatch = useDispatch()
    const onConnect = () => {
        socket.emit('join client room')
    }
    const onTemperatureUpdate = (message: string) => {
        dispatch(updateTemperature(JSON.parse(message)))
        // console.log(message)
    }
    const onHumidityUpdate = (message: string) => {
        dispatch(updateHumidity(JSON.parse(message)))
        // console.log(message)
    }
    const onDoorUpdate = (message: string) => {
        dispatch(updateDoor(message))
        // console.log(message)
    }
    const onSpeakerUpdate = (message: string) => {
        dispatch(updateSpeaker(message))
        // console.log(message)
    }
    const onLightUpdate = (message: string) => {
        dispatch(updateTemperature(JSON.parse(message)))
        // console.log(message)
    }
    const onFanUpdate = (message: string) => {
        dispatch(updateTemperature(JSON.parse(message)))
        // console.log(message)
    }
    const onThiefUpdate = (message: string) => {
        dispatch(updateThiefNotification(JSON.parse(message)))
        // console.log(JSON.parse(message))
    }
    const onFireUpdate = (message: string) => {
        dispatch(updateFireNotification(JSON.parse(message)))
    }
    const onEarthquake = (message: string) => {
        dispatch(updateEarthquakeNotification(JSON.parse(message)))
        console.log(JSON.parse(message))
    }

    React.useEffect(() => {
        socket.on('connect', onConnect)
        socket.on('temperatureController to client', onTemperatureUpdate)
        socket.on('humidityController to client', onHumidityUpdate)
        socket.on('doorController to client', onDoorUpdate)
        socket.on('speakerController to client', onSpeakerUpdate)
        socket.on('lightController to client', onLightUpdate)
        socket.on('fanController to client', onFanUpdate)
        socket.on('thiefController to client', onThiefUpdate)
        socket.on('fireController to client', onFireUpdate)
        socket.on('earthquakeController to client', onEarthquake)

        return () => {
            socket.off('connect', onConnect)
            socket.off('temperatureController to client', onTemperatureUpdate)
            socket.off('humidityController to client', onHumidityUpdate)
            socket.off('doorController to client', onDoorUpdate)
            socket.off('speakerController to client', onSpeakerUpdate)
            socket.off('lightController to client', onLightUpdate)
            socket.off('fanController to client', onFanUpdate)
            socket.off('thiefController to client', onThiefUpdate)
            socket.off('fireController to client', onFireUpdate)
            socket.off('earthquakeController to client', onEarthquake)
        }
    }, [socket])
}

export default useSocket
