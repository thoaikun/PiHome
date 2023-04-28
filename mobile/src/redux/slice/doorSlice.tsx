import { createSlice } from '@reduxjs/toolkit'

export type Door = {
    isUnlock: boolean
}

const initValue: Door = {
    isUnlock: false,
}

const doorSlice = createSlice({
    name: 'door',
    initialState: initValue,
    reducers: {
        updateDoor: (state, action) => {
            if (action.payload) state.isUnlock = action.payload?.status
        },
    },
})

export const { updateDoor } = doorSlice.actions

export default doorSlice
