import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
    quantity:0,
    totalAmount: 0,
  }
   
  export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
      add_to_cart: (state, {payload}) => {
        console.log (payload)
        
          const isItemExist = state.cartItems.find(
              (item) => item.id === payload.id
            );
            if (!isItemExist) {
              state.cartItems = [...state.cartItems, { ...payload, quantity: 1 }];
            } else {
              state.cartItems = state.cartItems.map((item) => {
                if (item.id === payload.id) {
                  return { ...item, quantity: item.quantity + 1 };
                } else {
                  return item;
                }
              });
            }
            state.quantity++;
          state.totalAmount += payload.price;
          console.log('Bipin',state.cartItems)
          },
      remove_from_cart: (state, {payload}) => {
          state.cartItems = state.cartItems.filter(
              (item) => item.id !== payload.id
            );
            state.quantity -= payload.quantity;
      },
     
    },
  })
   
  // Action creators are generated for each case reducer function
  export const { add_to_cart, remove_from_cart,  } = cartSlice.actions
   
  export default cartSlice.reducer