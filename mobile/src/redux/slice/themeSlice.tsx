import { createSlice } from '@reduxjs/toolkit'
import { PiHomeDarkTheme, PiHomeLightTheme } from '../../styles/themes'

const themeSlice = createSlice({
    name: 'theme',
    initialState: PiHomeLightTheme,
    reducers: {
        toggleTheme: (state) => {
            return JSON.stringify(state) === JSON.stringify(PiHomeLightTheme) ? PiHomeDarkTheme: PiHomeLightTheme;
        },
    },
})

// action
export const { toggleTheme } = themeSlice.actions

export default themeSlice
