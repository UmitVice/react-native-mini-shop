import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store";

interface MenuState {
    menu: any[];
    selectedMenu: any;
}

const initialState: MenuState = {
    menu: [],
    selectedMenu: null
};

export const menuSlice = createSlice({
    name: "menu",
    initialState,
    reducers: {
        setMenu: (state, action: PayloadAction<any[]>) => {
            state.menu = action.payload;
        }
    }
});

export const { setMenu } = menuSlice.actions;

export const selectMenu = (state: RootState) => state.menu.menu;

export default menuSlice.reducer;
