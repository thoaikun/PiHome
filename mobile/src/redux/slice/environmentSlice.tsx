import { createSlice } from '@reduxjs/toolkit'

export type Environment = {
    temperature: number
    humidity: number
}

const initValue: Environment = {
    temperature: 25,
    humidity: 0.69,
}

const environmentSlice = createSlice({
    name: 'environment',
    initialState: initValue,
    reducers: {
        update: (state, action) => {
            if (action.payload !== '') {
                state.temperature = action.payload?.data?.temperature
                state.humidity = action.payload?.data?.humidity
            }
        },
    },
})

export const { update } = environmentSlice.actions

export default environmentSlice
