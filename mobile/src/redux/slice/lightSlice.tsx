import { createSlice } from '@reduxjs/toolkit'

export type Light = {
  status: string
}

const initValue: Light = {
    status: 'off'
}

const lightSlice = createSlice({
    name: 'light',
    initialState: initValue,
    reducers: {
        updateLight: (state, action) => {
            if (action.payload !== '') {
                state.status = action.payload?.status
            }
        },
    },
})

export const { updateLight } = lightSlice.actions

export default lightSlice
