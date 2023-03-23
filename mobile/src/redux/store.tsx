import { configureStore } from '@reduxjs/toolkit'
import environmentSlice from './slice/environmentSlice'
import themeSlice from './slice/themeSlice'

const store = configureStore({
    reducer: {
        environment: environmentSlice.reducer,
        theme: themeSlice.reducer,
    },
})

export default store
export type RootState = ReturnType<typeof store.getState>
