import { createSlice } from '@reduxjs/toolkit'

export type NotifyElement = {
    title: string
    message: string
    isRead: boolean
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
            if (action.payload && action.payload?.status != state.earthquake) {
                state.earthquake = action.payload?.status
            }
        },
        updateFireStatus: (state, action) => {
            if (action.payload && action.payload?.status != state.fire) {
                state.fire = action.payload?.status
            }
        },
        updateThiefStatus: (state, action) => {
            if (
                action.payload !== '' &&
                action.payload?.status != state.thief
            ) {
                state.thief = action.payload?.status
            }
        },
        addNotify: (state, action) => {
            if (action.payload) {
                let data: NotifyElement = {
                    title: action.payload.title,
                    message: action.payload.message,
                    isRead: false,
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
        setIsRead: (state, action) => {
            if (action.payload) {
                state.list.forEach((element, i) => {
                    if (i == action.payload.id) element.isRead = true
                    return element
                })
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
    setIsRead,
} = notificationSlice.actions

export default notificationSlice
