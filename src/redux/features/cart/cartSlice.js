import { createSlice } from '@reduxjs/toolkit'
import Swal from 'sweetalert2'

const initialState = {
    cartItems: []
  }
  
  export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            let exisitingCart = state.cartItems.find(item => item._id === action.payload._id);

            if(!exisitingCart){
                state.cartItems.push(action.payload);
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Product has been added.",
                    showConfirmButton: false,
                    timer: 1500
                });
            } else {
                Swal.fire({
                    title: "Item already in cart!",
                    icon: "warning",
                    showCancelButton: false,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Ok!"
                });
            }
        },

        removeFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter(item => item._id !== action.payload._id);
        },

        clearCart: (state) => {
            state.cartItems = []
        }
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { addToCart, removeFromCart, clearCart } = cartSlice.actions
  
  export default cartSlice.reducer