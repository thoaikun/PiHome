import { createSlice } from '@reduxjs/toolkit'
import { io } from 'socket.io-client'

// const socket = io('http://localhost:3000')

const socketSlice = createSlice({
    name: 'socket',
    initialState: {},
    reducers: {},
})

export default socketSlice
