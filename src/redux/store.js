import {configureStore} from '@reduxjs/toolkit'
import optionsReducer from './options'

export default configureStore({
    reducer: {
        options: optionsReducer
    }
})