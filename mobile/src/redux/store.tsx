import { configureStore } from '@reduxjs/toolkit'
import socketSlice from './slice/socketSlice'
import themeSlice from './slice/themeSlice'

const store = configureStore({
    reducer: {
        socket: socketSlice.reducer,
        theme: themeSlice.reducer,
    },
})

export default store
export type RootState = ReturnType<typeof store.getState>
