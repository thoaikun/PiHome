import { configureStore } from '@reduxjs/toolkit'
import themeSlice from './slice/themeSlice'
import temperatureSlice from './slice/temperatureSlice'
import humiditySlice from './slice/humiditySlice'
import doorSlice from './slice/doorSlice'
import speakerSlice from './slice/speakerSlice'
import lightSlice from './slice/lightSlice'
import fanSlice from './slice/fanSlice'
import loginSlice from './slice/loginSlice'

const store = configureStore({
    reducer: {
        theme: themeSlice.reducer,
        temperature: temperatureSlice.reducer,
        humidity: humiditySlice.reducer,
        door: doorSlice.reducer,
        light: lightSlice.reducer,
        fan: fanSlice.reducer,
        speaker: speakerSlice.reducer,
        login: loginSlice.reducer,
    },
})

export default store
export type RootState = ReturnType<typeof store.getState>
