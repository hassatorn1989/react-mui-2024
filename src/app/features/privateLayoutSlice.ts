import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


export type PrivateLayoutState = {
    isDarkMode: boolean
}

const initialState: PrivateLayoutState = {
    isDarkMode: false
}

const privateLayoutSlice = createSlice({
    name: 'privateLayout',
    initialState,
    reducers: {
        changeMode(state, action: PayloadAction<string>) {
            state.isDarkMode = action.payload === 'dark'
        }
    },
})


export const { increment, decrement, incrementByAmount } = privateLayoutSlice.actions

export default privateLayoutSlice.reducer