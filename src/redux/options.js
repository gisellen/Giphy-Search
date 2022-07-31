import {createSlice} from '@reduxjs/toolkit'

export const options = createSlice({
    name: 'options',
    initialState: {
        value: 'none'
    },
    reducers: {
        trending: (state) => {
            state.value = 'trending'
        },
        search: (state) => {
            state.value = 'search'
        },
        random: (state) => {
            state.value = 'random'
        }
    },
})

export const {trending, search, random} = options.actions
export default options.reducer