import { createSlice } from '@reduxjs/toolkit'

export type Fan = {
    status: number
}

const initValue: Fan = {
    status: 0,
}

const fanSlice = createSlice({
    name: 'light',
    initialState: initValue,
    reducers: {
        updateFan: (state, action) => {
            if (action.payload !== '') {
                state.status = action.payload?.status
            }
        },
    },
})

export const { updateFan } = fanSlice.actions

export default fanSlice
