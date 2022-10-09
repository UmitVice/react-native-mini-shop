import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store'

// Define a type for the slice state
interface CartState {
    cart: any[];
    totalPrice: number;

}

// Define the initial state using that type
const initialState: CartState = {
    cart: [],
    totalPrice: 0
}

export const cartSlice = createSlice({
    name: 'cart',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        // Use the PayloadAction type to declare the contents of `action.payload`
        setCart: (state, action: PayloadAction<any[]>) => {
            state.cart = action.payload;
        },
        addToCart: (state, action: PayloadAction<any>) => {
            // if exists, increment quantity
            const index = state.cart.findIndex((item) => item.id === action.payload.id);
            if (index !== -1) {
                state.cart[index].quantity++;
            }
            // else add to cart and add quantity property
            else {
                state.cart.push({ ...action.payload, quantity: 1 });
            }
        },
        removeFromCart: (state, action: PayloadAction<any>) => {
            // if exists, decrement quantity
            const index = state.cart.findIndex((item) => item.id === action.payload.id);
            if (index !== -1) {
                state.cart[index].quantity--;
                // if quantity is 0, remove from cart
                if (state.cart[index].quantity === 0) {
                    state.cart.splice(index, 1);
                }
            }
        },
        removeAllFromCart: (state, action: PayloadAction<any>) => {
            // if exists, remove from cart
            const index = state.cart.findIndex((item) => item.id === action.payload.id);
            if (index !== -1) {
                state.cart.splice(index, 1);
            }
        },
        clearCart: (state) => {
            state.cart = [];
        },
        getTotalPrice: (state) => {
            state.totalPrice = state.cart.reduce((total, item) => total + item.price * item.quantity, 0);
        }
    }
});

export const { getTotalPrice, addToCart, clearCart, removeFromCart, removeAllFromCart } = cartSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCart = (state: RootState) => state.cart.cart;

export default cartSlice.reducer;
