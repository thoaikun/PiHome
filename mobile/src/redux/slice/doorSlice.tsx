import { createSlice } from '@reduxjs/toolkit'

export type Door = {
    status: string
}

const initValue: Door = {
    status: 'unlock',
}

const doorSlice = createSlice({
    name: 'door',
    initialState: initValue,
    reducers: {
        updateDoor: (state, action) => {
            if (action.payload !== '') {
                state.status = action.payload?.status
            }
        },
    },
})

export const { updateDoor } = doorSlice.actions

export default doorSlice
