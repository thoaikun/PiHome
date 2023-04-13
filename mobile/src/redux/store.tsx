import { configureStore } from '@reduxjs/toolkit'
import doorSlice from './slice/doorSlice'
import fanSlice from './slice/fanSlice'
import humiditySlice from './slice/humiditySlice'
import lightSlice from './slice/lightSlice'
import notificationSlice from './slice/notificationSlice'
import speakerSlice from './slice/speakerSlice'
import temperatureSlice from './slice/temperatureSlice'
import themeSlice from './slice/themeSlice'

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
    },
})

export default store
export type RootState = ReturnType<typeof store.getState>
