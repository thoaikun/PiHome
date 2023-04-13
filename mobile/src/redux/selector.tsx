import { RootState } from './store'

export const themeSelector = (state: RootState) => state.theme

export const temperatureSelector = (state: RootState) => state.temperature

export const humiditySelector = (state: RootState) => state.humidity

export const speakerSelector = (state: RootState) => state.speaker

export const doorSelector = (state: RootState) => state.door

export const lightSelector = (state: RootState) => state.light

export const fanSelector = (state: RootState) => state.fan

export const thiefSelector = (state: RootState) => state.notification.thief

export const fireSelector = (state: RootState) => state.notification.fire

export const earthquakeSelector = (state: RootState) =>
    state.notification.earthquake

export const notifyListSelector = (state: RootState) => state.notification.list

export const loginSelector = (state: RootState) => state.login
