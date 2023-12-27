import {configureStore} from '@reduxjs/toolkit';
import countSlice from './countSlice'; //by default it return reducer

export const store = configureStore(
    {
        reducer:{
            counterReducer:countSlice
        }
    }
)