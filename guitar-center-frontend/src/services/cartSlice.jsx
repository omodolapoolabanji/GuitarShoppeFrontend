import {createSlice} from '@reduxjs/toolkit'


const saveToLocalStorage = (state)=>{
    try{
        const serializeState = JSON.stringify(state)
        localStorage.setItem('state', serializeState)
    }
    catch(e){
        console.warn(e, 'Could not be saved to local Storage!')
    }
}

const loadFromlocalStorage =() =>{
    try{
        const state = localStorage.getItem('state') 
        if(state === null){
            return undefined
        }
        else{
            return JSON.parse(state)
        }
    }catch(e){
        console.warn(e, "Could not be loaded from local Storage")
        return undefined
    }

}
export  const cartSlice= createSlice({
    name: 'cart',
    initialState: loadFromlocalStorage()||{
        items: 0, 
        values: [],
        total: 0
    }, 
    reducers: {
        addToCart: (state ,  action)=>{
            state.items += action.payload.items
            state.values.push(action.payload.values)
            
            state.total += action.payload.values.price
            saveToLocalStorage(state)
        },
        removeFromcart: (state, action)=>{
            state.values = state.values.filter(val => val.name !== action.payload.values.name);
            state.items -= action.payload.items;
            state.total -= action.payload.values.price
            saveToLocalStorage(state)
            

        }
    } 
})

export const {addToCart, removeFromcart} = cartSlice.actions
export default cartSlice.reducer


