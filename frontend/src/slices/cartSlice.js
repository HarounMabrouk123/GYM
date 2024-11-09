import {createSlice} from '@reduxjs/toolkit'
import { startSession } from 'mongoose';



const initialState = localStorage.getItem("cart") ? JSON.parse
(localStorage.getItem("cart")) : {cartItems: []}

const addDecimals = (num) => {
    return (Math.round(num*100) / 100).toFixed(2)
}

const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCart: (state,action) => {
            const item = action.payload ;

            const existItem = state.cartItems.find((x) => x._id === item._id) ;
            console.log(existItem)

            if(existItem) {
                state.cartItems = state.cartItems.map((x) =>  x._id === existItem._id ? { ...x, qty: item.qty } : x)
                } else {
                    state.cartItems = [...state.cartItems , item]
                    }


            //calculate price
            state.itemsPrice =addDecimals(state.cartItems.reduce((acc,item) => acc + item.price * item.qty , 0) )       

            //calculate shipping price
            state.shippinPrice = addDecimals(state.itemsPrice > 100 ? 0 : 10) ;

            //calculate tax price
            state.taxPrice = addDecimals(Number((0.15 * state.itemsPrice).toFixed(2)))

            //calculate total price
            state.totalPrice = ( Number(state.itemsPrice) + Number(state.shippinPrice) + Number(state.taxPrice)).toFixed(2) ;

            localStorage.setItem('cart' , JSON.stringify(state))
            
        }
    }
})

export const {addToCart} = cartSlice.actions
export default cartSlice.reducer ; 