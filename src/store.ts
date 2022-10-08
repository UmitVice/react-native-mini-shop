import { configureStore } from '@reduxjs/toolkit';
import {productSlice} from "./features/product/productSlice";
import {menuSlice} from "./features/product/menuSlice";



export const store = configureStore({
    reducer: {
        products: productSlice.reducer,
        menu: menuSlice.reducer
    }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch


