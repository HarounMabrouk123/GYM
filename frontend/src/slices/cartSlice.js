import { createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : {cartItems:[]}
const addDecimals = (num) => {
    if (isNaN(num)) return "0.00";  // Handle NaN input
    return (Math.round(num * 100) / 100).toFixed(2);
}

const cartSlice = createSlice({
    name:"cart" ,
    initialState,
    reducers:{

        addToCart: (state,action) => {
            const item = action.payload
            console.log(item)
            const existItem = state.cartItems.find((x) => x._id == item._id)
            if (existItem) {
                state.cartItems = state.cartItems.map((x) => x._id === existItem._id ? item : x)
            }
            else{
                state.cartItems = [...state.cartItems , item]
            }

            //calculate items price
            const orders = state.cartItems.map((x) => x.price * x.quantity)
            state.itemsPrice = orders.reduce((acc,x) => acc + x , 0)

            //calculate shipping price
            state.shippingPrice = state.itemsPrice > 100 ? 0 : 10 ;

            //calculate tax price 
            state.taxPrice = state.itemsPrice*0.15

            console.log(state.shippingPrice)
            console.log(state.shippinPrice)

            //total
            state.totalPrice =state.itemsPrice + state.shippingPrice + state.taxPrice
            
            localStorage.setItem("cart",JSON.stringify(state)) ; 

            


        } ,


        removeFromCart: (state) => {
            state.cartItems = [] ;
            state.itemsPrice = 0
            state.shippingPrice = 0
            state.taxPrice = 0
            state.totalPrice = 0
            console.log(state.cartItems)

            localStorage.setItem("cart",JSON.stringify(state))
        }

    }
})
export const {removeFromCart , addToCart} = cartSlice.actions
export default cartSlice.reducer ;