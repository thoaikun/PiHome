import { configureStore } from '@reduxjs/toolkit'
import { default as doorSlice, default as doorSlice } from './slice/doorSlice'
import { default as fanSlice, default as fanSlice } from './slice/fanSlice'
import humiditySlice from './slice/humiditySlice'
import lightSlice from './slice/lightSlice'
import loginSlice from './slice/loginSlice'
import speakerSlice from './slice/speakerSlice'

const store = configureStore({
    reducer: {
        theme: themeSlice.reducer,
        temperature: temperatureSlice.reducer,
        humidity: humiditySlice.reducer,
        door: doorSlice.reducer,
        light: lightSlice.reducer,
        fan: fanSlice.reducer,
        speaker: speakerSlice.reducer,
        notification: notificationSlice.reducer,
        login: loginSlice.reducer,
    },
})

export default store
export type RootState = ReturnType<typeof store.getState>
