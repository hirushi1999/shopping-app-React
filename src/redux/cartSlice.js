import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        totalQuantity: 0,
    },

    reducers: {
        addToCart(state,action){
            const newItem = action.payload;
            const existingItem = state.items.find((item) => item.name === newItem.name);

            if(existingItem){
                existingItem.quantity += newItem.quantity;
            } else {
                state.items.push({
                    name: newItem.name,
                    price: newItem.price,
                    quantity: newItem.quantity,
                    image: newItem.image,
                });
            }
            state.totalQuantity += newItem.quantity;
        },

        // Action to remove an item from the cart
        removeFromCart(state, action) {
            const name = action.payload.name;
            const existingItem = state.items.find(item => item.name === name);
    
            if (existingItem) {
            state.totalQuantity -= existingItem.quantity;
            state.items = state.items.filter(item => item.name !== name);
            }
        },
    
        // Action to update the quantity of an item in the cart
        updateQuantity(state, action) {
            const { name, quantity } = action.payload;
            const existingItem = state.items.find(item => item.name === name);
    
            if (existingItem && quantity >= 1) {
            state.totalQuantity += quantity - existingItem.quantity;
            existingItem.quantity = quantity;
            }
        },
    },
});

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;