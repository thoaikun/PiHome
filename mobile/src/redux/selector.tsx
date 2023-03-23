import { RootState } from './store'

export const themeSelector = (state: RootState) => state.theme

export const environmentSelector = (state: RootState) => state.environment
