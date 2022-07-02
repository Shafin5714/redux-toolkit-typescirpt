import {createSlice, PayloadAction} from '@reduxjs/toolkit'

type InitialState = {
    count:number
}

export const counterSlice = createSlice({
    name:'counter',
    initialState:<InitialState>{
        count: 0
    },
    reducers:{
        increment:(state) => {
            state.count = state.count + 1
        },
        decrement:(state) => {
            state.count = state.count - 1
        },
        reset:(state) => {
            state.count = 0
        },
        increaseByAmount:(state, action:PayloadAction<number>) => {
            state.count = state.count + action.payload
        }
    }
})


// Action Creator
export const {
    increment,decrement,reset,increaseByAmount
} = counterSlice.actions


export default counterSlice.reducer