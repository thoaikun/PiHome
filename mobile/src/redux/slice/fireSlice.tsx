import { createSlice } from '@reduxjs/toolkit'

export type Fire = {
    status: boolean
}

const initValue: Fire = {
    status: false,
}

const fireSlice = createSlice({
    name: 'fire',
    initialState: initValue,
    reducers: {
        updateFireNotification: (state, action) => {
            if (action.payload !== '') {
                state.status = action.payload?.status
            }
        },
    },
})

export const { updateFireNotification } = fireSlice.actions

export default fireSlice
