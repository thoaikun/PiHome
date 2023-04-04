import { createSlice } from '@reduxjs/toolkit'

export type Speaker = {
    status: string
}

const initValue: Speaker = {
    status: 'off',
}

const speakerSlice = createSlice({
    name: 'speaker',
    initialState: initValue,
    reducers: {
        updateSpeaker: (state, action) => {
            if (action.payload !== '') {
                state.status = action.payload?.status
            }
        },
    },
})

export const { updateSpeaker } = speakerSlice.actions

export default speakerSlice
