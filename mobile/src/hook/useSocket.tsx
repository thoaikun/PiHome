import React from 'react'
import { useDispatch } from 'react-redux'
import { Socket } from 'socket.io-client'
import { updateDoor } from '../redux/slice/doorSlice'
import { updateHumidity } from '../redux/slice/humiditySlice'
import { updateLogin } from '../redux/slice/loginSlice'
import {
    updateEarthquakeStatus,
    updateFireStatus,
    updateThiefStatus,
} from '../redux/slice/notificationSlice'
import { updateSpeaker } from '../redux/slice/speakerSlice'
import { updateTemperature } from '../redux/slice/temperatureSlice'

const useSocket = (socket: Socket) => {
    const dispatch = useDispatch()
    const onConnect = () => {
        socket.emit('join client room')
    }
    const onTemperatureUpdate = (message: string) => {
        dispatch(updateTemperature(JSON.parse(message)))
    }
    const onHumidityUpdate = (message: string) => {
        dispatch(updateHumidity(JSON.parse(message)))
    }
    const onDoorUpdate = (message: string) => {
        dispatch(updateDoor(JSON.parse(message)))
        console.log(JSON.parse(message))
    }
    const onSpeakerUpdate = (message: string) => {
        dispatch(updateSpeaker(message))
    }
    const onLightUpdate = (message: string) => {
        dispatch(updateTemperature(JSON.parse(message)))
    }
    const onFanUpdate = (message: string) => {
        dispatch(updateTemperature(JSON.parse(message)))
    }
    const onThiefUpdate = (message: string) => {
        dispatch(updateThiefStatus(JSON.parse(message)))
    }
    const onFireUpdate = (message: string) => {
        dispatch(updateFireStatus(JSON.parse(message)))
    }
    const onEarthquake = (message: string) => {
        dispatch(updateEarthquakeStatus(JSON.parse(message)))
    }
    const onLogin = (message: string) => {
        dispatch(updateLogin(JSON.parse(message)))
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
        socket.on('authController to client', onLogin)

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
            socket.off('authController to client', onLogin)
        }
    }, [socket])
}

export default useSocket
