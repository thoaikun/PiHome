import { RootState } from './store'

export const themeSelector = (state: RootState) => state.theme

export const socketSelector = (state: RootState) => state.socket
