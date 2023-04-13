import { configureStore } from '@reduxjs/toolkit'
import doorSlice from './slice/doorSlice'
import earthquakeSlice from './slice/earthquakeSlice'
import fanSlice from './slice/fanSlice'
import fireSlice from './slice/fireSlice'
import humiditySlice from './slice/humiditySlice'
import lightSlice from './slice/lightSlice'
import speakerSlice from './slice/speakerSlice'
import temperatureSlice from './slice/temperatureSlice'
import themeSlice from './slice/themeSlice'
import thiefSlice from './slice/thiefSlice'

const store = configureStore({
    reducer: {
        theme: themeSlice.reducer,
        temperature: temperatureSlice.reducer,
        humidity: humiditySlice.reducer,
        door: doorSlice.reducer,
        light: lightSlice.reducer,
        fan: fanSlice.reducer,
        speaker: speakerSlice.reducer,
        thief: thiefSlice.reducer,
        fire: fireSlice.reducer,
        earthquake: earthquakeSlice.reducer,
    },
})

export default store
export type RootState = ReturnType<typeof store.getState>
