import { createSlice } from '@reduxjs/toolkit'
import { PiHomeDarkTheme, PiHomeLightTheme } from '../../styles/themes'

const themeSlice = createSlice({
    name: 'theme',
    initialState: PiHomeLightTheme,
    reducers: {
        toggleTheme: (state) => {},
    },
})

// action
export const { toggleTheme } = themeSlice.actions

export default themeSlice
