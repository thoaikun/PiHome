import { createSlice } from '@reduxjs/toolkit'

export type Login = {
    isLogin: boolean
    invalidAccount: boolean
}

const initValue: Login = {
    isLogin: false,
    invalidAccount: false,
}

const loginSlice = createSlice({
    name: 'login',
    initialState: initValue,
    reducers: {
        updateLogin: (state, actions) => {
            state.isLogin = actions.payload.status
            if (!actions.payload.status) state.invalidAccount = true
        },
        updateLogout: (state) => {
            state.isLogin = false
            state.invalidAccount = false
        },
        updateInvalidAccount: (state, actions) => {
            state.invalidAccount = actions.payload.invalidAccount
        },
    },
})

export const { updateLogin, updateLogout, updateInvalidAccount } =
    loginSlice.actions

export default loginSlice
