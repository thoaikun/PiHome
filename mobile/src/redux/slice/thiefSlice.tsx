import { createSlice } from '@reduxjs/toolkit'

export type Thief = {
    status: boolean
}

const initValue: Thief = {
    status: false,
}

const thiefSlice = createSlice({
    name: 'thief',
    initialState: initValue,
    reducers: {
        updateThiefNotification: (state, action) => {
            if (action.payload !== '') {
                state.status = action.payload?.status
            }
        },
    },
})

export const { updateThiefNotification } = thiefSlice.actions

export default thiefSlice
