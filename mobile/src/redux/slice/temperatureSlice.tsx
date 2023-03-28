import { createSlice } from '@reduxjs/toolkit'

export type Temperature = {
    temperature: number
}

const initValue: Temperature = {
    temperature: 25,
}

const temperatureSlice = createSlice({
    name: 'temperature',
    initialState: initValue,
    reducers: {
        updateTemperature: (state, action) => {
            if (action.payload !== '') {
                state.temperature = action.payload?.temperature
            }
        },
    },
})

export const { updateTemperature } = temperatureSlice.actions

export default temperatureSlice
