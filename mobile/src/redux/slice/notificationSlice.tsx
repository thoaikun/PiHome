import { createSlice } from '@reduxjs/toolkit'

export type NotifyElement = {
    title: string
    message: string
}

export type Notification = {
    earthquake: boolean
    thief: boolean
    fire: boolean
    list: NotifyElement[]
}

const initValue: Notification = {
    earthquake: false,
    thief: false,
    fire: false,
    list: [],
}

const notificationSlice = createSlice({
    name: 'notification',
    initialState: initValue,
    reducers: {
        updateEarthquakeStatus: (state, action) => {
            if (action.payload !== '') {
                state.earthquake = action.payload?.status
            }
        },
        updateFireStatus: (state, action) => {
            if (action.payload !== '') {
                state.fire = action.payload?.status
            }
        },
        updateThiefStatus: (state, action) => {
            if (action.payload !== '') {
                state.thief = action.payload?.status
            }
        },
        addNotify: (state, action) => {
            if (action.payload) {
                let data: NotifyElement = {
                    title: action.payload.title,
                    message: action.payload.message,
                }
                state.list.unshift(data)
            }
        },
        removeNotify: (state, action) => {
            if (action.payload) {
                state.list = state.list.filter(
                    (element: any, i: number) => i !== action.payload.id
                )
            }
        },
    },
})

export const {
    updateEarthquakeStatus,
    updateFireStatus,
    updateThiefStatus,
    addNotify,
    removeNotify,
} = notificationSlice.actions

export default notificationSlice
