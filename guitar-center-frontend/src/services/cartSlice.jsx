import {createSlice} from '@reduxjs/toolkit'
export  const cartSlice= createSlice({
    name: 'cart',
    initialState: {
        items: 0, 
        values: []
    }, 
    reducers: {
        addToCart: (state ,  action)=>{
            state.items += action.payload.items
            state.values.push(action.payload.values)
        },
        removeFromcart: (state, action)=>{
            state.values = state.values.filter(val => val.name !== action.payload.values.name);
            state.items -= action.payload.items;
        }
    } 
})

export const {addToCart, removeFromcart} = cartSlice.actions
export default cartSlice.reducer


