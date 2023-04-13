import { createSlice } from '@reduxjs/toolkit'

export type Earthquake = {
    status: boolean
}

const initValue: Earthquake = {
    status: false,
}

const earthquakeSlice = createSlice({
    name: 'earthquake',
    initialState: initValue,
    reducers: {
        updateEarthquakeNotification: (state, action) => {
            if (action.payload !== '') {
                state.status = action.payload?.status
            }
        },
    },
})

export const { updateEarthquakeNotification } = earthquakeSlice.actions

export default earthquakeSlice
