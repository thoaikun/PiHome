import { createSlice } from '@reduxjs/toolkit'

export type Humidity = {
    humidity: number
}

const initValue: Humidity = {
    humidity: 0.69,
}

const humiditySlice = createSlice({
    name: 'humidity',
    initialState: initValue,
    reducers: {
        updateHumidity: (state, action) => {
            if (action.payload !== '') {
                state.humidity = action.payload?.humidity
            }
        },
    },
})

export const { updateHumidity } = humiditySlice.actions

export default humiditySlice
