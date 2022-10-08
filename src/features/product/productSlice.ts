import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store'

// Define a type for the slice state
interface ProductState {
    products: any[];
    selectedProduct: any;
}

// Define the initial state using that type
const initialState: ProductState = {
    products: [],
    selectedProduct: null
}

export const productSlice = createSlice({
    name: 'product',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        // Use the PayloadAction type to declare the contents of `action.payload`
        setProducts: (state, action: PayloadAction<any[]>) => {
            state.products = action.payload;
        },
        setSelectedProduct: (state, action: PayloadAction<any>) => {
            state.selectedProduct = action.payload;
        }
    }
})

export const { setProducts, setSelectedProduct } = productSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectProducts = (state: RootState) => state.products.products

export default productSlice.reducer
