import { createSlice } from '@reduxjs/toolkit'

export type Login = {
    isLogin: boolean
}

const initValue: Login = {
    isLogin: false,
}

const loginSlice = createSlice({
    name: 'login',
    initialState: initValue,
    reducers: {
        updateLogin: (state) => {
          state.isLogin = true;
        },
        updateLogout: (state) => {
          state.isLogin = false;
        },
    },
})

export const { updateLogin, updateLogout } = loginSlice.actions

export default loginSlice
